import Image from "next/image"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between lg:px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Логотип Сердца Павлодара"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="font-semibold text-foreground">
            Сердца Павлодара
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Ссылки футера">
          <a
            href="/privacy"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Политика конфиденциальности
          </a>
        </nav>

        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Общественный фонд «Сердца Павлодара»
        </p>
      </div>
    </footer>
  )
}
