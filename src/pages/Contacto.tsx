import {Navbar} from "../components/navbar"
import {ContactSection} from "../components/contact-section"
import {Footer} from "../components/footer"

export function Contacto() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  )
}