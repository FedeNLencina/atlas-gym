import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Home } from "./pages/Home.tsx"
import { Contacto } from "./pages/Contacto.tsx"
import { Disciplinas } from "./pages/Disciplinas.tsx"
import { useEffect } from "react"

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/disciplinas" element={<Disciplinas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App