export default function Projects() {
  const projects = [
    {
      title: "Cafe website",
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
    <section className="bg-white dark:bg-black text-left text-black dark:text-white min-h-screen p-8 pt-20 md:pt-52 transition-colors duration-500 tracking-wider md:mt-[-10rem]">
      
      <div className="flex justify-between items-baseline border-t border-black/20 dark:border-white/20 pt-8 mb-12 md:mb-[14rem]">
        <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-[gaia] leading-none tracking-tighter">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-y-16 cursor-pointer">
        {projects.map((project, index) => (
          <div key={index} className="reveal flex flex-col space-y-2">
            <h3 className="text-[clamp(1.8rem,6vw,3.75rem)] font-[gaia] uppercase tracking-wide
              text-black dark:text-white
              hover:text-black dark:hover:text-white
              transition-colors duration-300">
              <a href={project.link} className="project-link">
                {project.title}
              </a>
            </h3>
            <p className="text-[1rem] opacity-70 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}