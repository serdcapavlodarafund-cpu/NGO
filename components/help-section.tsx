"use client"

import { useState, type FormEvent } from "react"
import { HandHeart, Package, Share2, Handshake, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const helpWays = [
  { icon: HandHeart, text: "Стать волонтёром" },
  { icon: Package, text: "Передать корм или медикаменты" },
  { icon: Share2, text: "Поддержать информационно" },
  { icon: Handshake, text: "Связаться для сотрудничества" },
]

export function HelpSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      contact: formData.get("contact") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error("Ошибка отправки")
      }

      setSubmitted(true)
    } catch {
      setError("Не удалось отправить сообщение. Попробуйте позже.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="help" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Участие
          </p>
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            Как помочь
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Ways to help */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Вы можете помочь фонду следующими способами:
            </h3>
            <ul className="flex flex-col gap-4">
              {helpWays.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Спасибо за обращение!
                </h3>
                <p className="text-muted-foreground">
                  Мы получили ваше сообщение и свяжемся с вами в ближайшее
                  время.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="mt-2"
                >
                  Отправить ещё
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-lg font-semibold text-foreground">
                  Написать нам
                </h3>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="contact">Телефон или Email</Label>
                  <Input
                    id="contact"
                    name="contact"
                    placeholder="+7 (___) ___-__-__ или email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ваше сообщение..."
                    rows={4}
                    required
                  />
                </div>
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
                <Button type="submit" size="lg" disabled={loading}>
                  {loading ? "Отправка..." : "Отправить"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
