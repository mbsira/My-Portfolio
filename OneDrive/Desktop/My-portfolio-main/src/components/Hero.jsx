import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const [ready, setReady] = useState(false)
  const titleRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  const anim = (delay) => ({
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  })

  return (
    <section className="bg-white  dark:bg-black text-black dark:text-white min-h-[100vh] flex flex-col relative transition-colors duration-700 overflow-hidden">

      <div className="w-full overflow-hidden">
        <h1
          ref={titleRef}
          className="font-[gaia] text-black dark:text-white leading-none tracking-wider w-full"
          style={{ fontSize: "clamp(3.5rem, 21.4vw, 22rem)", ...anim(0) }}
        >
          Portfolio
        </h1>
      </div>
<div className="flex-1 flex px-6 items-center pr-6 md:pr-12 lg:pr-20">
  <div
    className="text-left font-sans"
    style={{
      fontSize: "clamp(1.1rem, 4vw, 1.3rem)",
      maxWidth: "min(560px, 100%)", 
      lineHeight: "1.7",
      textTransform: "uppercase",
      fontWeight: "400",
      letterSpacing: "0.02em", 
      marginBottom: "2rem",     
      ...anim(0),
    }}
  >
    I create web designs and web development <br className="hidden md:block" />
    work. I search for new concepts which I <br className="hidden md:block" />
    test through my work in each project.
    
    <div className="h-6 md:h-10" /> 
    
    I develop my skills through every project <br className="hidden md:block" />
    I complete while constructing products <br className="hidden md:block" />
    which reach the market.
  </div>
</div>

      <div className="w-full px-6 flex items-end justify-between pr-6 md:pr-12 lg:pr-20 pb-8">
        <div className="font-[gaia]" style={{ fontSize: "clamp(1rem, 2vw, 1.8rem)", ...anim(0.2) }}>
          Mubashira Suroor
        </div>
        <div className="font-[gaia]" style={{ fontSize: "clamp(1rem, 2vw, 1.8rem)", ...anim(0.35) }}>
          Designer and Developer
        </div>
      </div>

    </section>
  )
}