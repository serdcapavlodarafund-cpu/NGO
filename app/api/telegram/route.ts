import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, contact, message } = await request.json()

    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "Все поля обязательны" },
        { status: 400 }
      )
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID")
      return NextResponse.json(
        { error: "Ошибка конфигурации сервера" },
        { status: 500 }
      )
    }

    const text = [
      "📩 *Новая заявка с сайта*",
      "",
      `👤 *Имя:* ${escapeMarkdown(name)}`,
      `📞 *Контакт:* ${escapeMarkdown(contact)}`,
      `💬 *Сообщение:* ${escapeMarkdown(message)}`,
    ].join("\n")

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Telegram API error:", errorData)
      return NextResponse.json(
        { error: "Не удалось отправить сообщение" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Telegram send error:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&")
}
