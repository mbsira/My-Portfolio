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
    <section className="reveal font-[gaia] bg-white dark:bg-black text-black text-center dark:text-white pt-20 md:pt-32 pb-12 px-8 transition-colors duration-500 overflow-hidden">
      
      <div className="border-t border-black/20 dark:border-white/20 pt-12">
        <span className="text-xs uppercase opacity-50 tracking-[0.3em]">Next Step</span>

        <div className="mt-8 mb-8 md:mb-24">
          <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-[gaia] leading-none tracking-tighter uppercase">
            Thank You.
          </h2>
          <p className="text-[clamp(0.8rem,2vw,1.5rem)] font-[arial] mt-4 leading-relaxed text-center opacity-80">
            I am currently looking for internships and junior roles.<br />
            If you like my work, let's build something meaningful together.
          </p>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-t border-black/10 dark:border-white/10 pt-8 font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">
          
          <div className="flex flex-col space-y-2">
            <span>India / Global</span>
            <span>Local Time: {time}</span>
          </div>

          <div className="flex flex-col md:items-center space-y-2">
            <a href="https://www.behance.net/mubashiraansari1" className="hover:opacity-100 transition-opacity">Behance</a>
            <a href="https://www.behance.net/mubashiraansari1/editor" className="hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="https://github.com/mbsira/basic-projects/tree/main/" className="hover:opacity-100 transition-opacity">GitHub</a>
          </div>

          <div className="flex flex-col md:items-end space-y-2 md:text-right">
            <span>Designed & Built by Mubashira Suroor</span>
            <span>© 2026 All Rights Reserved</span>
          </div>

        </footer>
      </div>
    </section>
  )
}