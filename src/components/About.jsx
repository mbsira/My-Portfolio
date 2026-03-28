export default function About() {
  const hardSkills = [
    "HTML5 / CSS3",
    "React.js",
    "JavaScript",
    "Tailwind",
    "UI/UX Design"
  ]

  return (
    <section className="reveal bg-white dark:bg-black text-black dark:text-white min-h-screen px-6 py-6 md:px-8 md:py-32 transition-colors duration-500 overflow-hidden">

      <div className="border-t border-black/20 dark:border-white/20 pt-8 mb-16 md:mb-20">
        <h1 className="text-base md:text-lg font-[gaia] leading-none tracking-tight">
          About ( me )
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">

        <div className="space-y-10">
          <div>
            <h3 className="text-xs font-mono uppercase opacity-50 mb-4 tracking-widest">Contact</h3>
            <p className="text-base leading-relaxed">
              Mubashira.dev@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase mb-4 tracking-widest">Education</h3>
            <div className="space-y-2">
              <p className="text-sm font-bold uppercase tracking-wide">B.S. Computer Science</p>
              <p className="text-xs font-mono">Status: Level 02 / In Progress</p>
              <p className="text-base leading-relaxed pt-1">
                Focusing on core fundamentals while building modern web applications independently.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-xs font-mono uppercase mb-4 tracking-widest">Soft Skills</h3>
            <ul className="text-base space-y-2 ">
              <li>• Time Management</li>
              <li>• Energetic & Positive</li>
              <li>• Hard-Working</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase mb-4 tracking-widest">Independent Projects</h3>
            <p className="text-base font-bold">Open Source & Exploration</p>
            <p className="text-base mt-1">Experimenting with React components and CSS layouts.</p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-xs font-mono uppercase mb-4 tracking-widest">Languages</h3>
            <p className="text-base leading-relaxed">
              <strong>English</strong>: Intermediate<br />
              <strong>Hindi</strong>: Native
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono uppercase mb-4 tracking-widest">Interests</h3>
            <p className="text-base leading-relaxed">
              Photography<br />
              Writing<br />
              Editing
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-mono uppercase mb-4 tracking-widest">Hard Skills</h3>
          <div className="flex flex-wrap gap-2">
            {hardSkills.map((skill, index) => (
              <span
                key={index}
                className="border border-black/20 dark:border-white/20 px-3 py-2 text-xs uppercase font-bold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-16 md:mt-24 flex justify-between text-xs font-mono uppercase tracking-widest border-t border-black/10 dark:border-white/10 pt-4">
        <span>MUBASHIRA SUROOR / 2026</span>
        <span>Open for Internships</span>
      </div>

    </section>
  )
}
