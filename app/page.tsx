import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AuthoritySection } from "@/components/authority-section"
import { AboutSection } from "@/components/about-section"
import { PlansSection } from "@/components/plans-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MethodologySection } from "@/components/methodology-section"
import { CtaSection } from "@/components/cta-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AuthoritySection />
      <AboutSection />
      <PlansSection />
      <TestimonialsSection />
      <MethodologySection />
      <CtaSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
