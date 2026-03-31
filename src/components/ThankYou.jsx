import { useState, useEffect } from "react"

export default function ThankYou() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString())
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="reveal px-6 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="pr-6 md:pr-12 lg:pr-20 py-16 md:py-24">

        <div className="border-t border-black/20 dark:border-white/20 pt-12 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-mono opacity-50">Next Step</span>

          <div className="mt-8 mb-16 md:mb-24">
            <h2 className="font-[gaia] leading-none tracking-tighter uppercase" style={{ fontSize: "clamp(3rem,10vw,9rem)" }}>
              Thank You.
            </h2>
            <p className="font-sans mt-6 leading-relaxed opacity-70" style={{ fontSize: "clamp(1rem,1.8vw,1.2rem)" }}>
              I am currently looking for internships and junior roles.<br />
              If you like my work, let's build something meaningful together.
            </p>
          </div>

          <footer className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-black/10 dark:border-white/10 pt-8 font-mono text-xs uppercase tracking-widest text-left opacity-60">
            <div className="flex flex-col space-y-2">
              <span>India / Global</span>
              <span>Local Time: {time}</span>
            </div>
            <div className="flex flex-col space-y-2 sm:items-center">
              {[
                { label: "Behance", href: "https://www.behance.net/mubashiraansari1" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/mubashira-dev-0037203ba/" },
                { label: "GitHub", href: "https://github.com/mbsira?tab=repositories" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity duration-300">
                  {label}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-2 sm:items-end sm:text-right">
              <span>Designed & Built by Mubashira Suroor</span>
              <span>© 2026 All Rights Reserved</span>
            </div>
          </footer>
        </div>

      </div>
    </section>
  )
}
