import { useState, useEffect } from "react"

export default function ThankYou() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString())
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="reveal font-[gaia] bg-white dark:bg-black text-black text-center dark:text-white px-6 pt-20 pb-12 md:px-8 md:pt-32 transition-colors duration-500 overflow-hidden">

      <div className="border-t border-black/20 dark:border-white/20 pt-12">
        <span className="text-xs uppercase opacity-50 tracking-[0.3em]">Next Step</span>

        <div className="mt-8 mb-10 md:mb-20">
          <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-[gaia] leading-none tracking-tighter uppercase">
            Thank You.
          </h2>
          <p className="text-[clamp(0.85rem,2vw,1.2rem)] font-sans mt-4 leading-relaxed text-center opacity-80">
            I am currently looking for internships and junior roles.<br />
            If you like my work, let's build something meaningful together.
          </p>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-black/10 dark:border-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 text-left">

          <div className="flex flex-col space-y-2">
            <span>India / Global</span>
            <span>Local Time: {time}</span>
          </div>

          <div className="flex flex-col space-y-2 md:items-center">
            <a href="https://www.behance.net/mubashiraansari1" className="hover:opacity-100 transition-opacity">Behance</a>
            <a href="https://www.linkedin.com/in/mubashira-dev-0037203ba/" className="hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="https://github.com/mbsira?tab=repositories" className="hover:opacity-100 transition-opacity">GitHub</a>
          </div>

          <div className="flex flex-col space-y-2 md:items-end md:text-right">
            <span>Designed & Built by Mubashira Suroor</span>
            <span>© 2026 All Rights Reserved</span>
          </div>

        </footer>
      </div>
    </section>
  )
}
