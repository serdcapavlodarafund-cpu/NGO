import { Stethoscope, HeartPulse, Home, Search, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Stethoscope,
    title: "Лечение и ветеринарная помощь",
    description:
      "Обеспечиваем медицинскую помощь пострадавшим и больным животным в ветеринарных клиниках-партнёрах.",
  },
  {
    icon: HeartPulse,
    title: "Реабилитация животных",
    description:
      "Помогаем животным восстановиться после травм и болезней, обеспечивая уход и наблюдение.",
  },
  {
    icon: Home,
    title: "Временная передержка",
    description:
      "Организуем временное содержание животных до момента нахождения постоянного дома.",
  },
  {
    icon: Search,
    title: "Поиск новых владельцев",
    description:
      "Ведём активную работу по поиску ответственных хозяев для животных, нуждающихся в семье.",
  },
  {
    icon: BookOpen,
    title: "Информационная поддержка и просвещение",
    description:
      "Проводим образовательные мероприятия и информируем общество о гуманном обращении с животными.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Направления
          </p>
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            Направления деятельности
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border border-border bg-background transition-shadow hover:shadow-md"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
