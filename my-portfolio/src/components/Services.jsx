export default function Services() {
  return (
    <section className="bg-white dark:bg-black text-left text-black dark:text-white min-h-screen p-8 pt-20 md:pt-52 transition-colors duration-500 tracking-wider md:mt-[-10rem] overflow-hidden">
      
      <div className="flex justify-between items-baseline border-t border-black/20 dark:border-white/20 pt-8 mb-12 md:mb-[14rem]">
        <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-[gaia] leading-none tracking-tighter">
          Services
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">

        <div className="reveal flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 border border-black dark:border-white rounded-full"></div>
            <span className="text-sm font-mono uppercase opacity-60">01</span>
          </div>
          <h2 className="text-[clamp(2rem,7vw,3.75rem)] font-[gaia] uppercase tracking-wide">Web Design</h2>
          <p className="text-[1rem] opacity-70 leading-relaxed">
            Building aesthetic and functional interfaces.<br />
            Focusing on clean layouts, modern typography,<br />
            and user-centric flows.
          </p>
        </div>

        <div className="reveal flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 border border-black dark:border-white rounded-full"></div>
            <span className="text-xs font-mono uppercase opacity-60">02</span>
          </div>
          <h2 className="text-[clamp(2rem,7vw,3.75rem)] font-[gaia] uppercase tracking-wide">QA & Debugging</h2>
          <p className="text-[1rem] opacity-70 leading-relaxed">
            Checking for bugs, broken links, and <br />
            responsiveness issues. Ensuring the web<br />
            works exactly how it's supposed to.
          </p>
        </div>

        <div className="reveal flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 border border-black dark:border-white rounded-full"></div>
            <span className="text-sm font-mono uppercase opacity-60">03</span>
          </div>
          <h2 className="text-[clamp(2rem,7vw,3.75rem)] font-[gaia] uppercase tracking-wide">Exploration</h2>
          <p className="text-[1rem] opacity-70 leading-relaxed">
            Constantly experimenting with new ideas,<br />
            improving with every project, and building<br />
            things that actually ship.
          </p>
        </div>

      </div>
    </section>
  )
}