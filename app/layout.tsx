import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Общественный фонд «Сердца Павлодара» — Помощь животным',
  description:
    'Благотворительный фонд, оказывающий поддержку бездомным и пострадавшим животным в Павлодаре и Павлодарской области.',
}

export const viewport: Viewport = {
  themeColor: '#2478c2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
