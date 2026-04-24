export default function Projects() {
 const projects = [
  {
    title: "Roastery Coffee",
    description: "A web app of Roastery cafe with all the features and modern design typography",
    link: "https://roastery-coffee-clone.vercel.app"
  },
   {
      title: "Skincare Website",
      description: "A luxury skincare e-commerce landing page with a working cart, video hero, and editorial typography. Built with HTML, CSS, and Vanilla JS.",
      link: "https://skincare-website-three.vercel.app"
    },
   {
    title: "Fashion Store",
    description: "Luxury modest fashion e-commerce built with React & Tailwind CSS. Editorial design, cart system and full checkout flow.",
    link: "https://elara-vela-modest.vercel.app"
  },
   {
      title: "Cafe Website",
      description: "A premium café website redesign inspired by high-end restaurant brands. Video hero, editorial typography, smooth hover effects, and a fully functional cart.",
      link: "https://cafe-website-snowy-eta.vercel.app"
    }
]

  return (
    <section className="bg-white px-6 dark:bg-black text-black dark:text-white min-h-[100vh] md:min-h-screen transition-colors duration-500">
      <div className="pr-6 md:pr-12 lg:pr-20 py-16 md:py-24">

        <div className="border-t border-black/20 dark:border-white/20 pt-8 mb-12 md:mb-24">
          <h1 className="font-[gaia] leading-none tracking-tighter" style={{ fontSize: "clamp(3rem,10vw,7rem)" }}>
            Projects
          </h1>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="reveal group border-t border-black/10 dark:border-white/10 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-all duration-300"
            >
              <div className="flex-1">
                <h3
                  className="font-[gaia] uppercase tracking-wide group-hover:opacity-60 transition-opacity duration-300"
                  style={{ fontSize: "clamp(1.8rem,5vw,4rem)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="mt-2 text-black/60 dark:text-white/60"
                  style={{ fontSize: "clamp(0.85rem,1.5vw,1rem)", lineHeight: "1.7", maxWidth: "600px" }}
                >
                  {project.description}
                </p>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                View →
              </span>
            </a>
          ))}
          <div className="border-t border-black/10 dark:border-white/10" />
        </div>

      </div>
    </section>
  )
}
