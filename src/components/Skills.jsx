function Skills() {
    const skillGroups = [
      {
        title: "Frontend",
        icon: "⚛",
        skills: [
          { name: "React", level: "Core" },
          { name: "JavaScript", level: "Core" },
          { name: "HTML5", level: "Core" },
          { name: "CSS3", level: "Core" },
          { name: "Tailwind CSS", level: "Core" },
        ],
      },
      {
        title: "Tools",
        icon: "⚙",
        skills: [
          { name: "Git", level: "Daily" },
          { name: "GitHub", level: "Daily" },
          { name: "Vite", level: "Daily" },
          { name: "VS Code", level: "Daily" },
          { name: "npm", level: "Daily" },
        ],
      },
      {
        title: "Currently Exploring",
        icon: "✦",
        skills: [
          { name: "TypeScript", level: "Learning" },
          { name: "UI/UX", level: "Exploring" },
          { name: "Next.js", level: "Exploring" },
        ],
      },
    ];
  
    return (
      <section
        id="skills"
        className="relative py-28 overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-20 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
  
        <div className="max-w-6xl mx-auto px-6 relative z-10">
  
          {/* ================= HEADING ================= */}
  
          <div className="mb-16">
            <p className="text-purple-400 font-medium tracking-widest uppercase text-sm">
              02 / Skills
            </p>
  
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Tools I use to{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                build.
              </span>
            </h2>
  
            <p className="text-slate-400 mt-5 max-w-2xl leading-relaxed">
              A growing toolkit built through projects, experimentation and
              hands-on development.
            </p>
          </div>
  
  
          {/* ================= SKILL CARDS ================= */}
  
          <div className="grid md:grid-cols-3 gap-6">
  
            {skillGroups.map((group) => (
  
              <div
                key={group.title}
                className="group relative rounded-3xl
                           bg-slate-900/60
                           backdrop-blur-xl
                           border border-white/10
                           p-7
                           hover:border-cyan-400/30
                           hover:-translate-y-2
                           transition-all duration-500"
              >
  
                {/* Card Glow */}
  
                <div
                  className="absolute inset-0 rounded-3xl
                             bg-gradient-to-br
                             from-cyan-500/5
                             to-purple-500/5
                             opacity-0
                             group-hover:opacity-100
                             transition-opacity duration-500"
                />
  
                <div className="relative z-10">
  
                  {/* Card Header */}
  
                  <div className="flex items-center justify-between mb-7">
  
                    <div className="flex items-center gap-3">
  
                      <div
                        className="w-11 h-11 rounded-xl
                                   bg-cyan-400/10
                                   border border-cyan-400/10
                                   flex items-center justify-center
                                   text-cyan-400 text-xl"
                      >
                        {group.icon}
                      </div>
  
                      <div>
                        <h3 className="font-semibold text-white">
                          {group.title}
                        </h3>
  
                        <p className="text-xs text-slate-500">
                          {group.skills.length} technologies
                        </p>
                      </div>
  
                    </div>
  
                    <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">
                      ↗
                    </span>
  
                  </div>
  
  
                  {/* Skills */}
  
                  <div className="space-y-3">
  
                    {group.skills.map((skill) => (
  
                      <div
                        key={skill.name}
                        className="flex items-center justify-between
                                   px-4 py-3
                                   rounded-xl
                                   bg-slate-950/60
                                   border border-white/5
                                   group-hover:border-white/10
                                   transition-colors"
                      >
  
                        <span className="text-sm text-slate-300">
                          {skill.name}
                        </span>
  
                        <span
                          className="text-[10px]
                                     uppercase
                                     tracking-wider
                                     text-slate-500"
                        >
                          {skill.level}
                        </span>
  
                      </div>
  
                    ))}
  
                  </div>
  
                </div>
  
              </div>
  
            ))}
  
          </div>
  
  
          {/* ================= BOTTOM TECH STRIP ================= */}
  
          <div
            className="mt-10
                       rounded-2xl
                       border border-white/10
                       bg-slate-900/40
                       backdrop-blur-md
                       px-6 py-5
                       flex flex-wrap
                       items-center
                       justify-center
                       gap-x-8 gap-y-4"
          >
  
            <span className="text-xs uppercase tracking-widest text-slate-600">
              Tech stack
            </span>
  
            <span className="text-slate-400 hover:text-cyan-400 transition-colors">
              React
            </span>
  
            <span className="text-slate-700">•</span>
  
            <span className="text-slate-400 hover:text-yellow-400 transition-colors">
              JavaScript
            </span>
  
            <span className="text-slate-700">•</span>
  
            <span className="text-slate-400 hover:text-sky-400 transition-colors">
              Tailwind
            </span>
  
            <span className="text-slate-700">•</span>
  
            <span className="text-slate-400 hover:text-purple-400 transition-colors">
              Vite
            </span>
  
            <span className="text-slate-700">•</span>
  
            <span className="text-slate-400 hover:text-white transition-colors">
              GitHub
            </span>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Skills;