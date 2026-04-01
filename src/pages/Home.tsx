import { Navbar } from "../components/navbar"
import { Hero } from "../components/hero"
import { Disciplinas } from "../components/disciplinas"
import { NuestroEspacio, Mentalidad, Comunidad, EntrenamientoPersonalizado } from "../components/landing-sections"
import { InstagramFeed } from "../components/instagram-feed"
import { Footer } from "../components/footer"
import { FAQ } from "../components/faq"

import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Disciplinas />
      <NuestroEspacio />
      <EntrenamientoPersonalizado />
      <Mentalidad />
      <Comunidad />
      <FAQ />
      <InstagramFeed />
      <Footer />
    </main>
  )
}