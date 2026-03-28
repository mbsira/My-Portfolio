import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const [ready, setReady] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col relative transition-colors duration-700 overflow-hidden">

      <div className="w-full p-0">
        <h1
          ref={titleRef}
          className="font-[gaia] py-1 text-black dark:text-white leading-none tracking-wider transition-colors duration-500 w-full"
          style={{
            fontSize: "21.4vw",
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          Portfolio
        </h1>
      </div>

      <div className="flex-1 flex items-center px-6">
        <div
          className="text-left font-sans"
          style={{
            fontSize: "clamp(1.5rem, 2vw, 1.4rem)",
            maxWidth: "480px",
            opacity: ready ? 0.8 : 0,
            transform: ready ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.5s",
          }}
        >
          I create web designs and web development work.
          I search for new concepts which I test through
          my work in each project.
          <br /><br />
          I develop my skills through every project I complete
          while constructing products which reach the market.
        </div>
      </div>

      <div className="w-full flex items-end justify-between px-6 pb-6">
        <div
          className="font-[gaia]"
          style={{
            fontSize: "clamp(0.85rem, 2vw, 1.5rem)",
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          Mubashira Suroor
        </div>

        <div
          className="font-[gaia]"
          style={{
            fontSize: "clamp(0.85rem, 2vw, 1.5rem)",
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.35s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.35s",
          }}
        >
          Designer and Developer
        </div>
      </div>

    </section>
  )
}
