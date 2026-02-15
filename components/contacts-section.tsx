import { MapPin, Phone, Mail, Building2, Instagram } from "lucide-react"

const contactItems = [
  {
    icon: Building2,
    label: "Юридическое название",
    value: 'Общественный фонд «Сердца Павлодара»',
  },
  {
    icon: MapPin,
    label: "Город",
    value: "Павлодар, Республика Казахстан",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Улица Аэропорт, строение 50",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 705 587 04 04",
  },
  {
    icon: Mail,
    label: "Email",
    value: "serdca.pavlodara.fund@gmail.com",
  },
]

export function ContactsSection() {
  return (
    <section id="contacts" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Связь
          </p>
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            Контакты
          </h2>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <ul className="flex flex-col gap-5">
            {contactItems.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h3 className="mb-3 text-lg font-bold text-foreground">
            Мы в социальных сетях
          </h3>
          <p className="mb-4 text-muted-foreground">
            Следите за деятельностью фонда в официальном Instagram-аккаунте.
          </p>
          <a
            href="https://www.instagram.com/serdca_pavlodara_shelter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}
