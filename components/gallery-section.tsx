import Image from "next/image"

const photos = [
  { src: "/images/gallery-1.jpg", alt: "Спасённый кот на руках ветеринара" },
  { src: "/images/gallery-2.jpg", alt: "Волонтёры с собаками на территории приюта" },
  { src: "/images/gallery-3.jpg", alt: "Здание центра реабилитации животных" },
  { src: "/images/gallery-4.jpg", alt: "Урок доброты для детей с участием щенка" },
  { src: "/images/gallery-5.jpg", alt: "Ветеринарная помощь спасённой собаке" },
  { src: "/images/gallery-6.jpg", alt: "Специализированный транспорт фонда" },
]

export function GallerySection() {
  return (
    <section className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Фотогалерея
          </p>
          <h2 className="text-balance text-2xl font-bold text-foreground md:text-3xl">
            Наша работа в фотографиях
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
