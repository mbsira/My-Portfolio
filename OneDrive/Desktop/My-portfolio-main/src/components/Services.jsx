export default function Services() {
  const services = [
    {
      num: "01",
      title: "Web Design",
      desc: "Building aesthetic and functional interfaces. Clean design, modern typography, and user-friendly navigation."
    },
    {
      num: "02",
      title: "QA & Debugging",
      desc: "Checking for bugs, broken links, and responsiveness issues. Ensuring everything works as planned."
    },
    {
      num: "03",
      title: "Exploration",
      desc: "Continuously developing skills through experimentation. Open to any new concepts and collaborations."
    }
  ]

  return (
    <section className="bg-white px-6 dark:bg-black text-black dark:text-white min-h-[100vh] md:min-h-screen transition-colors duration-500">
      <div className="pr-6 md:pr-12 lg:pr-20 py-16 md:py-24">

        <div className="border-t border-black/20 dark:border-white/20 pt-8 mb-12 md:mb-20">
          <h1 className="font-[gaia] leading-none tracking-tighter" style={{ fontSize: "clamp(3rem,10vw,7rem)" }}>
            Services
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {services.map((s) => (
            <div key={s.num} className="reveal flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 border border-black dark:border-white rounded-full" />
                <span className="text-xs font-mono uppercase tracking-widest">{s.num}</span>
              </div>
              <h2 className="font-[gaia] uppercase tracking-wide" style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
                {s.title}
              </h2>
              <p style={{ fontSize: "clamp(0.95rem,1.5vw,1.1rem)", lineHeight: "1.8" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
