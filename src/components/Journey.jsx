function Journey() {
    const journey = [
      {
        year: "2022",
        title: "Completed BCA",
        type: "Education",
        description:
          "Completed my Bachelor of Computer Applications and built a strong foundation in programming, web technologies and computer science.",
        icon: "🎓",
      },
      {
        year: "2024",
        title: "Completed MCA",
        type: "Education",
        description:
          "Completed my Master of Computer Applications and expanded my knowledge of software development and modern web technologies.",
        icon: "🎓",
      },
      {
        year: "2026",
        title: "Frontend Developer",
        type: "Teaching & Development",
        description:
          "Teaching React.js while building practical frontend projects and continuously strengthening my development skills.",
        icon: "⚛",
      },
    ];
  
    return (
      <section
        id="journey"
        className="relative py-28 overflow-hidden"
      >
        {/* Background Glow */}
  
        <div className="absolute top-0 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
  
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
  
        <div className="max-w-5xl mx-auto px-6 relative z-10">
  
          {/* ================= HEADING ================= */}
  
          <div className="mb-16">
  
            <p className="text-purple-400 font-medium tracking-widest uppercase text-sm">
              04 / Journey
            </p>
  
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Still{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                becoming.
              </span>
            </h2>
  
            <p className="text-slate-400 mt-5 max-w-2xl leading-relaxed">
              A small timeline of the path that brought me here — and the
              journey that continues.
            </p>
  
          </div>
  
  
          {/* ================= TIMELINE ================= */}
  
          <div className="relative">
  
            {/* Vertical Line */}
  
            <div
              className="absolute left-5 md:left-1/2
                         top-0 bottom-0
                         w-px
                         bg-gradient-to-b
                         from-cyan-400/40
                         via-purple-500/30
                         to-transparent
                         md:-translate-x-1/2"
            />
  
            <div className="space-y-12">
  
              {journey.map((item, index) => (
  
                <div
                  key={item.title}
                  className={`relative flex
                             md:items-center
                             ${
                               index % 2 === 0
                                 ? "md:flex-row"
                                 : "md:flex-row-reverse"
                             }`}
                >
  
                  {/* ================= DOT ================= */}
  
                  <div
                    className="absolute left-5 md:left-1/2
                               -translate-x-1/2
                               w-10 h-10
                               rounded-full
                               bg-slate-950
                               border border-cyan-400/30
                               flex items-center justify-center
                               text-lg
                               z-10
                               shadow-lg shadow-cyan-500/10"
                  >
                    {item.icon}
                  </div>
  
  
                  {/* ================= CONTENT ================= */}
  
                  <div
                    className={`w-full md:w-1/2
                               pl-16 md:pl-0
                               ${
                                 index % 2 === 0
                                   ? "md:pr-16"
                                   : "md:pl-16"
                               }`}
                  >
  
                    <div
                      className="group
                                 rounded-2xl
                                 bg-slate-900/60
                                 backdrop-blur-xl
                                 border border-white/10
                                 p-6
                                 hover:border-cyan-400/30
                                 hover:-translate-y-1
                                 transition-all duration-500"
                    >
  
                      <div className="flex items-center justify-between">
  
                        <span className="text-cyan-400 font-mono text-sm">
                          {item.year}
                        </span>
  
                        <span
                          className="text-[10px]
                                     uppercase
                                     tracking-widest
                                     text-slate-600"
                        >
                          {item.type}
                        </span>
  
                      </div>
  
                      <h3 className="text-xl font-semibold text-white mt-4">
                        {item.title}
                      </h3>
  
                      <p className="text-slate-400 text-sm leading-relaxed mt-3">
                        {item.description}
                      </p>
  
                    </div>
  
                  </div>
  
                </div>
  
              ))}
  
            </div>
  
          </div>
  
  
          {/* ================= CURRENTLY LEARNING ================= */}
  
          <div className="mt-20">
  
            <div
              className="relative
                         rounded-3xl
                         bg-slate-900/60
                         backdrop-blur-xl
                         border border-white/10
                         p-7 md:p-8
                         overflow-hidden
                         hover:border-purple-400/30
                         transition-all duration-500"
            >
  
              {/* Glow */}
  
              <div
                className="absolute -right-20 -top-20
                           w-64 h-64
                           bg-purple-500/10
                           rounded-full
                           blur-3xl"
              />
  
  
              <div className="relative z-10">
  
                {/* Header */}
  
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
  
                  <div>
  
                    <p className="text-xs uppercase tracking-widest text-purple-400">
                      Currently Learning
                    </p>
  
                    <h3 className="text-2xl font-bold text-white mt-2">
                      Meta Front-End Developer
                    </h3>
  
                    <p className="text-slate-400 mt-1">
                      Professional Certificate
                    </p>
  
                  </div>
  
  
                  {/* Status */}
  
                  <div
                    className="inline-flex items-center gap-2
                               self-start
                               px-3 py-1.5
                               rounded-full
                               bg-green-400/10
                               border border-green-400/10"
                  >
  
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
  
                    <span className="text-xs text-green-400">
                      In Progress
                    </span>
  
                  </div>
  
                </div>
  
  
                {/* Progress */}
  
                <div className="mt-8">
  
                  <div className="flex items-center justify-between mb-3">
  
                    <span className="text-sm text-slate-400">
                      Course progress
                    </span>
  
                    <span className="text-sm font-medium text-cyan-400">
                      3 / 9 courses
                    </span>
  
                  </div>
  
  
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
  
                    <div
                      className="h-full
                                 w-[33.33%]
                                 rounded-full
                                 bg-gradient-to-r
                                 from-cyan-400
                                 to-purple-500"
                    />
  
                  </div>
  
                </div>
  
  
                {/* Learning Tags */}
  
                <div className="flex flex-wrap gap-3 mt-7">
  
                  <span className="px-3 py-1.5 rounded-full bg-slate-950 border border-white/10 text-xs text-slate-400">
                    Front-End Development
                  </span>
  
                  <span className="px-3 py-1.5 rounded-full bg-slate-950 border border-white/10 text-xs text-slate-400">
                    React
                  </span>
  
                  <span className="px-3 py-1.5 rounded-full bg-slate-950 border border-white/10 text-xs text-slate-400">
                    JavaScript
                  </span>
  
                  <span className="px-3 py-1.5 rounded-full bg-slate-950 border border-white/10 text-xs text-slate-400">
                    UI Development
                  </span>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
  
          {/* ================= CURRENT STATUS ================= */}
  
          <div className="mt-12 flex justify-center">
  
            <div
              className="inline-flex items-center gap-3
                         px-5 py-3
                         rounded-full
                         bg-slate-900/70
                         border border-white/10
                         backdrop-blur-md"
            >
  
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
  
              <span className="text-sm text-slate-400">
                Currently learning & building
              </span>
  
              <span className="text-cyan-400">
                ⚡
              </span>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Journey;