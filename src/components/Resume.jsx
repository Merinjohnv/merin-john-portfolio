function Resume() {
  const highlights = [
    {
      number: "01",
      title: "Frontend Development",
      text: "Building responsive and interactive web experiences with React and JavaScript.",
    },
    {
      number: "02",
      title: "React Development",
      text: "Hands-on experience with components, hooks, state management and modern React patterns.",
    },
    {
      number: "03",
      title: "Continuous Learning",
      text: "Currently pursuing the Meta Front-End Developer Professional Certificate.",
    },
  ];

  return (
    <section id="resume" className="relative py-28 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-20 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ================= HEADING ================= */}

        <div className="mb-14">
          <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm">
            05 / Resume
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            A little more{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              about my work.
            </span>
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl leading-relaxed">
            Explore my experience, education, skills and projects in a concise
            format.
          </p>
        </div>

        {/* ================= MAIN CARD ================= */}

        <div
          className="relative
                       rounded-3xl
                       bg-slate-900/60
                       backdrop-blur-xl
                       border border-white/10
                       overflow-hidden"
        >
          {/* Top Gradient */}

          <div
            className="absolute top-0 left-0 right-0 h-px
                         bg-gradient-to-r
                         from-transparent
                         via-cyan-400
                         to-transparent"
          />

          <div className="p-7 md:p-10">
            {/* Header */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-cyan-400 font-mono text-sm">
                  developer.profile
                </p>

                <h3 className="text-3xl font-bold text-white mt-2">
                  Merin John
                </h3>

                <p className="text-slate-400 mt-1">Frontend Developer</p>
              </div>

              {/* Resume Button */}

              <a
                href="/Merin-John-Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2
                             px-6 py-3
                             rounded-full
                             bg-gradient-to-r
                             from-cyan-600
                             to-cyan-800
                             text-white
                             font-medium
                             hover:scale-105
                             transition-transform duration-300
                             shadow-lg
                             shadow-cyan-500/20"
              >
                Download Resume
                <span>↓</span>
              </a>
            </div>

            {/* Divider */}

            <div className="h-px bg-white/10 my-10" />

            {/* Highlights */}

            <div className="grid md:grid-cols-3 gap-5">
              {highlights.map((item) => (
                <div
                  key={item.number}
                  className="group
                               rounded-2xl
                               bg-slate-950/60
                               border border-white/5
                               p-6
                               hover:border-cyan-400/20
                               hover:-translate-y-1
                               transition-all duration-500"
                >
                  <span className="text-xs font-mono text-slate-600">
                    {item.number}
                  </span>

                  <h4 className="text-lg font-semibold text-white mt-4">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-400 leading-relaxed mt-3">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Info */}

            <div
              className="mt-8
             rounded-2xl
             bg-gradient-to-r
             from-cyan-400/5
             to-purple-500/5
             border border-white/5
             p-4 sm:p-5"
            >
              <div className="grid grid-cols-3">
                {/* Education */}
                <div className="px-2 sm:px-6 sm:pl-0">
                  <p className="text-[10px] sm:text-xs text-slate-600 uppercase tracking-widest">
                    Education
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    BCA • MCA
                  </p>
                </div>

                {/* Focus */}
                <div
                  className="px-2 sm:px-6
                 border-l border-white/10"
                >
                  <p className="text-[10px] sm:text-xs text-slate-600 uppercase tracking-widest">
                    Focus
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    React • Frontend
                  </p>
                </div>

                {/* Based In */}
                <div
                  className="px-2 sm:px-6
                 border-l border-white/10"
                >
                  <p className="text-[10px] sm:text-xs text-slate-600 uppercase tracking-widest">
                    Based in
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
