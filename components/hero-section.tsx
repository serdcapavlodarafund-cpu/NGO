import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24 lg:px-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Помощь бездомным и раненым животным в Павлодаре
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Благотворительный фонд, оказывающий поддержку животным, оказавшимся
            в трудной ситуации
          </p>
          <div>
            <Button size="lg" asChild>
              <a href="#contacts">Связаться с фондом</a>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/hero.jpg"
            alt="Спасённые животные — кошка и собака"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
