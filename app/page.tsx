import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ResultsSection } from "@/components/results-section"
import { GallerySection } from "@/components/gallery-section"
import { HelpSection } from "@/components/help-section"
import { ReportsSection } from "@/components/reports-section"
import { ContactsSection } from "@/components/contacts-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ResultsSection />
        <GallerySection />
        <HelpSection />
        <ReportsSection />
        <ContactsSection />
      </main>
      <SiteFooter />
    </>
  )
}
