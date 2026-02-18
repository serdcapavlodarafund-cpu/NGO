import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Сердца Павлодара",
  description:
    "Политика обработки и защиты персональных данных пользователей сайта фонда «Сердца Павлодара».",
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80"
      >
        &larr; На главную
      </Link>

      <h1 className="mb-2 text-3xl font-bold text-foreground">
        Политика конфиденциальности
      </h1>
      <p className="mb-8 text-muted-foreground">
        {'Общественный фонд «Сердца Павлодара»'}
      </p>
      <p className="mb-10 text-sm text-muted-foreground">
        Дата вступления в силу: 16.02.2026
      </p>

      <div className="flex flex-col gap-8 text-foreground leading-relaxed">
        <section>
          <h2 className="mb-3 text-xl font-semibold">1. Общие положения</h2>
          <p>
            {'Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта фонда «Сердца Павлодара».'}
          </p>
          <p className="mt-2">
            Используя сайт, пользователь выражает согласие с данной Политикой.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">
            2. Персональные данные
          </h2>
          <p className="mb-2">Фонд может обрабатывать следующие данные:</p>
          <ul className="list-inside list-disc flex flex-col gap-1 text-muted-foreground">
            <li>Имя</li>
            <li>Номер телефона</li>
            <li>Адрес электронной почты</li>
            <li>Текст обращения</li>
            <li>Иные данные, добровольно предоставленные пользователем</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">3. Цели обработки</h2>
          <p className="mb-2">Персональные данные используются для:</p>
          <ul className="list-inside list-disc flex flex-col gap-1 text-muted-foreground">
            <li>Обработки обращений</li>
            <li>Связи с заявителем</li>
            <li>
              Организации волонтёрской и благотворительной деятельности
            </li>
            <li>Улучшения работы сайта</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">
            4. Передача третьим лицам
          </h2>
          <p>
            Данные не передаются третьим лицам, за исключением случаев,
            предусмотренных законодательством.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">5. Защита данных</h2>
          <p>
            Фонд принимает необходимые организационные и технические меры для
            защиты персональных данных.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">6. Контакты</h2>
          <p>
            По вопросам обработки персональных данных можно обратиться через
            контактные данные, указанные на сайте.
          </p>
        </section>
      </div>
    </main>
  )
}
