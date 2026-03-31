export default function About() {
  const hardSkills = ["HTML5 / CSS3", "React.js", "JavaScript", "Tailwind", "UI/UX Design"]

  return (
    <section className="reveal px-6 bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-500">
      <div className="pr-6 md:pr-12 lg:pr-20 py-16 md:py-24">

        <div className="border-t border-black/20 dark:border-white/20 pt-8 mb-12 md:mb-20">
          <h1 className="font-[gaia] leading-none tracking-tight" style={{ fontSize: "clamp(3rem,10vw,7rem)" }}>
            About ( me )
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-mono uppercase mb-4 tracking-widest opacity-50">Contact</h3>
              <p style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", lineHeight: "1.7" }}>
                Mubashira.dev@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase mb-4 tracking-widest opacity-50">Education</h3>
              <p className="font-bold uppercase tracking-wide mb-1" style={{ fontSize: "clamp(0.85rem,1vw,1rem)" }}>
                B.S. Computer Science
              </p>
              <p className="text-xs font-mono mb-2 opacity-60">Status: Level 02 / In Progress</p>
              <p style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", lineHeight: "1.7" }}>
                Focusing on core fundamentals while building modern web applications independently.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-mono uppercase mb-4 tracking-widest opacity-50">Soft Skills</h3>
              <ul className="space-y-2" style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", lineHeight: "1.7" }}>
                <li>• Time Management</li>
                <li>• Energetic & Positive</li>
                <li>• Hard-Working</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase mb-4 tracking-widest opacity-50">Independent Projects</h3>
              <p className="font-bold mb-1" style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)" }}>Open Source & Exploration</p>
              <p style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", lineHeight: "1.7" }}>
                Experimenting with React components and CSS layouts.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-mono uppercase mb-4 tracking-widest opacity-50">Languages</h3>
              <p style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", lineHeight: "1.7" }}>
                <strong>English</strong>: Intermediate<br />
                <strong>Hindi</strong>: Native
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase mb-4 tracking-widest opacity-50">Interests</h3>
              <p style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", lineHeight: "1.7" }}>
                Photography<br />Writing<br />Editing
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase mb-4 tracking-widest opacity-50">Hard Skills</h3>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((skill, i) => (
                <span
                  key={i}
                  className="border border-black/20 dark:border-white/20 px-3 py-2 text-xs uppercase font-bold transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-16 md:mt-24 flex flex-col sm:flex-row justify-between gap-2 text-xs font-mono uppercase tracking-widest border-t border-black/10 dark:border-white/10 pt-4 opacity-40">
          <span>MUBASHIRA SUROOR / 2026</span>
          <span>Open for Internships</span>
        </div>

      </div>
    </section>
  )
}
