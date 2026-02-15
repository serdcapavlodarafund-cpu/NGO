import { Heart, Building, Truck, Handshake, GraduationCap, PawPrint } from "lucide-react"

const results = [
  {
    icon: PawPrint,
    text: "Более 3000 спасённых кошек и собак за годы работы.",
  },
  {
    icon: Heart,
    text: "Центр реабилитации раненых и бездомных животных.",
  },
  {
    icon: Building,
    text: "Собственное здание, где размещён центр.",
  },
  {
    icon: Truck,
    text: "Специализированный транспорт для оперативной помощи.",
  },
  {
    icon: Handshake,
    text: "Сотрудничество с государственными органами.",
  },
  {
    icon: GraduationCap,
    text: "Проведение уроков доброты в образовательных учреждениях города.",
  },
]

export function ResultsSection() {
  return (
    <section className="scroll-mt-20 bg-card py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Достижения
          </p>
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            Наши результаты
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 shadow-sm"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
