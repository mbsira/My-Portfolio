export default function Services() {
  return (
    <section className="bg-white dark:bg-black text-left text-black dark:text-white min-h-screen px-[-4] py-6 md:px-8 md:py-20 transition-colors duration-500 overflow-hidden">

      <div className="border-t border-black/20 dark:border-white/20 pt-8 mb-10 md:mb-20">
        <h1 className="text-[clamp(3rem,10vw,6rem)] font-[gaia] leading-none tracking-tighter">
          Services
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        <div className="reveal flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 border border-black dark:border-white rounded-full"></div>
            <span className="text-sm font-mono uppercase opacity-60">01</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-[gaia] uppercase tracking-wide">Web Design</h2>
          <p className="text-[clamp(1rem,1.5vw,1rem)] opacity-70 leading-relaxed">
            Building aesthetic and functional interfaces.
            I design according to three principles which
            include clean design methods, modern font style,
            and user-friendly navigation systems.
          </p>
        </div>

        <div className="reveal flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 border border-black dark:border-white rounded-full"></div>
            <span className="text-sm font-mono uppercase opacity-60">02</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-[gaia] uppercase tracking-wide">QA & Debugging</h2>
          <p className="text-[clamp(1rem,1.5vw,1rem)] opacity-70 leading-relaxed">
            Checking for bugs, broken links, and
            responsiveness issues. Ensuring the web
            works accordance with its planned functionality.
          </p>
        </div>

        <div className="reveal flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 border border-black dark:border-white rounded-full"></div>
            <span className="text-sm font-mono uppercase opacity-60">03</span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-[gaia] uppercase tracking-wide">Exploration</h2>
          <p className="text-[clamp(1rem,1.5vw,1rem)] opacity-70 leading-relaxed">
            Continuously developing my skills through
            experimentation with new ideas. Open to
            any new concepts currently.
          </p>
        </div>

      </div>
    </section>
  )
}
