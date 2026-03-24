import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.tsx"
import { Contacto } from "./pages/Contacto.tsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App