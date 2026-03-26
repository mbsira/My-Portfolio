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

      <div className="w-full p-4 pt-6">
        <h1
          ref={titleRef}
          className="font-[gaia] text-black dark:text-white leading-none tracking-wider transition-colors duration-500 text-[clamp(6.1rem,18vw,20rem)]"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          Portfolio
        </h1>
      </div>

      <div className="flex-1 flex items-center px-6 md:px-8">
        <div
          className="text-left font-sans text-[clamp(1.3rem,1.5vw,2rem)] opacity-80 max-w-sm md:max-w-md"
          style={{
            opacity: ready ? 0.8 : 0,
            transform: ready ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.5s",
          }}
        >
          I design and build for the web.<br />
          Balancing aesthetics and logic,<br />
          I focus on interfaces that feel simple<br />
          and work the way people expect.<br /><br />
          I am exploring new ideas,<br />
          improving with every project,<br />
          and building things that actually ship.
        </div>
      </div>

      <div className="w-full flex items-end justify-between p-6 md:p-8">
        <div
          className="font-[gaia] text-[clamp(0.85rem,2vw,1.5rem)]"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          Mubashira Suroor
        </div>

        <div
          className="font-[gaia] text-[clamp(0.85rem,2vw,1.5rem)]"
          style={{
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