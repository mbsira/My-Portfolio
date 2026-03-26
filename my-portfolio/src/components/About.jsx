export default function About() {
  const hardSkills = [
    "HTML5 / CSS3",
    "React.js", 
    "JavaScript",
    "Tailwind",
    "UI/UX Design"
  ]

  return (
    <section className="reveal bg-white dark:bg-black text-black dark:text-white min-h-screen p-8 pt-2 transition-colors duration-500 overflow-hidden">      <div className="border-t border-black/20 dark:border-white/20 pt-8 mb-20">
       <h1 className="text-[clamp(2.2rem,10vw,6rem)] font-[gaia] leading-none tracking-tight text-black dark:text-white">
        About ( me )
      </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-20 gap-x-12 font-[arial]">

        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-mono uppercase opacity-50 mb-6 tracking-widest">Contact</h3>
            <p className="text-base leading-relaxed">
              Mubashira.dev@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-sm font-mono uppercase opacity-50 mb-6 tracking-widest">Education</h3>
            <div className="space-y-3">
              <p className="text-lg font-bold uppercase tracking-wide">B.S. Computer Science</p>
              <p className="text-sm opacity-60 font-mono">Status: Level 02 / In Progress</p>
              <p className="text-base opacity-70 leading-relaxed pt-2">
                Focusing on core fundamentals while building modern web applications independently.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-mono uppercase opacity-50 mb-6 tracking-widest">Soft Skills</h3>
            <ul className="text-base space-y-2 opacity-80">
              <li>• Time Management</li>
              <li>• Energetic & Positive</li>
              <li>• Hard-Working</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-mono uppercase opacity-50 mb-6 tracking-widest">Independent Projects</h3>
            <p className="text-lg opacity-80 leading-relaxed font-bold">Open Source & Exploration</p>
            <p className="text-base opacity-50 mt-2">Experimenting with React components and CSS layouts.</p>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-mono uppercase opacity-50 mb-6 tracking-widest">Languages</h3>
            <p className="text-base leading-relaxed">
              <strong>English</strong>: Intermediate<br />
              <strong>Hindi</strong>: Native
            </p>
          </div>
          <div>
            <h3 className="text-sm font-mono uppercase opacity-50 mb-6 tracking-widest">Interests</h3>
            <p className="text-base opacity-80 leading-relaxed">
              Photography<br />
              Writing<br />
              Editing
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-mono uppercase opacity-50 mb-6 tracking-widest">Hard Skills</h3>
          <div className="flex flex-wrap gap-3">
            {hardSkills.map((skill, index) => (
              <span
                key={index}
                className="border border-black/20 dark:border-white/20 px-4 py-3 text-xs uppercase font-bold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
     
    </section>
  )
}