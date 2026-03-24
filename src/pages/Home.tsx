import { Navbar } from "../components/navbar"
import { Hero } from "../components/hero"
import { Disciplinas } from "../components/disciplinas"
import { Footer } from "../components/footer"

export function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Disciplinas />
      <Footer />
    </main>
  )
}