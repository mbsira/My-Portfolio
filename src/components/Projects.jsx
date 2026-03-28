export default function Projects() {
  const projects = [
    {
      title: "Cafe Website",
      description: "A premium café website design inspired by high-end restaurant brands.",
      link: "https://cafe-website-snowy-eta.vercel.app"
    },
    {
      title: "Skincare Website",
      description: "A luxury skincare e-commerce landing page with a working cart, video hero, and editorial typography. Built with HTML, CSS, and Vanilla JS.",
      link: "https://skincare-website-three.vercel.app"
    },
    {
      title: "Fashion Store",
      description: "Luxury modest fashion e-commerce built with React & Tailwind CSS. Features editorial design, cart system and full checkout flow.",
      link: "https://elara-vela-modest.vercel.app"
    }
  ]

  return (
    <section className="bg-white dark:bg-black text-left text-black dark:text-white min-h-screen px-6 py-6 md:px-8 md:py-32 transition-colors duration-500 overflow-hidden">

      <div className="border-t border-black/20 dark:border-white/20 pt-8 mb-16 md:mb-32">
        <h1 className="text-[clamp(3rem,10vw,6rem)] font-[gaia] leading-none tracking-tighter">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-y-12">
        {projects.map((project, index) => (
          <div key={index} className="reveal flex flex-col space-y-2 border-t border-black/10 dark:border-white/10 pt-6">
            <h3 className="text-[clamp(2rem,5vw,3.75rem)] font-[gaia] uppercase tracking-wide text-black dark:text-white transition-colors duration-300">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {project.title}
              </a>
            </h3>
            <p className="text-[clamp(1rem,1.5vw,1rem)] opacity-70 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
