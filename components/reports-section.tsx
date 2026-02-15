"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { FileText, X } from "lucide-react"

const reports = [
  {
    title: "Финансовый отчёт — март 2024",
    image: "/images/img_0607.jpg",
  },
  {
    title: "Финансовый отчёт — апрель 2024",
    image: "/images/img_0606.jpg",
  },
  {
    title: "Финансовый отчёт — май 2024",
    image: "/images/img_0605.jpg",
  },
]

export function ReportsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

  const openModal = (image: string, title: string) => {
    setSelectedImage(image)
    setSelectedTitle(title)
  }

  const closeModal = useCallback(() => {
    setSelectedImage(null)
    setSelectedTitle(null)
  }, [])

  useEffect(() => {
    if (!selectedImage) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [selectedImage, closeModal])

  return (
    <>
      <section id="reports" className="scroll-mt-20 bg-card py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileText className="h-7 w-7" />
            </span>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                Прозрачность
              </p>
              <h2 className="mb-4 text-balance text-2xl font-bold text-foreground md:text-3xl">
                Прозрачность и отчётность
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Центр реабилитации существует благодаря поддержке неравнодушных
              граждан и партнёров. Фонд публикует информацию о своей деятельности
              и обновляет данные по мере реализации инициатив.
            </p>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Отчёты о работе размещаются на сайте по мере формирования и
              обновляются регулярно.
            </p>
          </div>

          <div className="mt-14">
            <h3 className="mb-6 text-center text-xl font-bold text-foreground">
              Финансовая отчётность за 2024 год
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reports.map((report) => (
                <button
                  key={report.title}
                  type="button"
                  onClick={() => openModal(report.image, report.title)}
                  className="group overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={report.image}
                      alt={report.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-foreground">
                      {report.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedTitle ?? "Просмотр отчёта"}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-colors hover:bg-background"
            aria-label="Закрыть"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[90vh] max-w-2xl overflow-hidden rounded-xl bg-background shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={selectedTitle ?? "Финансовый отчёт"}
              width={800}
              height={1067}
              className="h-auto max-h-[85vh] w-auto object-contain"
            />
            <div className="bg-background px-5 py-3">
              <p className="text-center text-sm font-medium text-foreground">
                {selectedTitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
