import { useState, useEffect } from "react"
import Cursor from "./components/Cursor"
import ThemeToggle from "./components/ThemeToggle"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Projects from "./components/Projects"
import About from "./components/About"
import ThankYou from "./components/ThankYou"
import useReveal from "./hooks/useReveal"

export default function App() {
  const [dark, setDark] = useState(true)

  useReveal()

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <div>
      <Cursor />
        <ThemeToggle dark={dark} setDark={setDark} />
      <Hero />
      <Services />
      <Projects />
      <About />
      <ThankYou />
    </div>
  )
}