function About() {
    return (
      <section
        id="about"
        className="relative py-28 overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
  
        <div className="max-w-6xl mx-auto px-6 relative z-10">
  
          {/* Section Heading */}
          <div className="mb-16">
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm">
              01 / About
            </p>
  
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Behind the{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                code.
              </span>
            </h2>
          </div>
  
  
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
  
            {/* ================= LEFT ================= */}
            <div>
  
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium">
                I'm a frontend developer who enjoys turning ideas into
                clean, interactive and user-friendly web experiences.
              </p>
  
              <p className="text-slate-400 leading-relaxed mt-6">
                I work primarily with React and JavaScript, while exploring
                modern UI technologies to build responsive and engaging
                interfaces. I enjoy understanding how things work,
                experimenting with new ideas and continuously improving
                my frontend skills.
              </p>
  
              <p className="text-slate-400 leading-relaxed mt-4">
                My goal is simple — create websites that not only work well,
                but also feel good to use.
              </p>
  
  
              {/* Approach */}
              <div className="mt-10">
  
                <p className="text-sm text-slate-500 uppercase tracking-widest mb-5">
                  My approach
                </p>
  
                <div className="flex flex-wrap items-center gap-3">
  
                  <span className="px-4 py-2 rounded-full bg-slate-900 border border-white/10 text-slate-300">
                    💡Design
                  </span>
  
                  <span className="text-slate-600">→</span>
  
                  <span className="px-4 py-2 rounded-full bg-slate-900 border border-white/10 text-slate-300">
                    ⚙️Build
                  </span>
  
                  <span className="text-slate-600">→</span>
  
                  <span className="px-4 py-2 rounded-full bg-slate-900 border border-white/10 text-slate-300">
                    ✨Refine
                  </span>
  
                  <span className="text-slate-600">→</span>
  
                  <span className="px-4 py-2 rounded-full bg-slate-900 border border-white/10 text-slate-300">
                    🚀Deploy
                  </span>
  
                </div>
  
              </div>
  
            </div>
  
  
            {/* ================= RIGHT ================= */}
            <div className="relative">
  
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl" />
  
              {/* Developer Card */}
              <div
                className="relative rounded-3xl
                           bg-slate-900/70
                           backdrop-blur-xl
                           border border-white/10
                           p-8
                           shadow-2xl
                           hover:border-cyan-400/30
                           transition-all duration-500"
              >
  
                {/* Window Header */}
                <div className="flex items-center justify-between mb-8">
  
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
  
                  <span className="text-xs text-slate-500 font-mono">
                    developer.profile
                  </span>
  
                </div>
  
  
                {/* Identity */}
                <div className="mb-8">
  
                  <p className="text-sm text-cyan-400 font-mono">
                    const developer =
                  </p>
  
                  <h3 className="text-3xl font-bold text-white mt-2">
                    Merin John
                  </h3>
  
                  <p className="text-slate-400 mt-1">
                    Frontend Developer
                  </p>
  
                </div>
  
  
                {/* Skills */}
                <div>
  
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
                    Technologies
                  </p>
  
                  <div className="flex flex-wrap gap-3">
  
                    <span className="px-3 py-2 rounded-lg bg-cyan-400/10 text-cyan-400 text-sm border border-cyan-400/10">
                      ⚛ React
                    </span>
  
                    <span className="px-3 py-2 rounded-lg bg-yellow-400/10 text-yellow-400 text-sm border border-yellow-400/10">
                      JS
                    </span>
  
                    <span className="px-3 py-2 rounded-lg bg-sky-400/10 text-sky-400 text-sm border border-sky-400/10">
                      Tailwind
                    </span>
  
                    <span className="px-3 py-2 rounded-lg bg-purple-400/10 text-purple-400 text-sm border border-purple-400/10">
                      Vite
                    </span>
  
                    <span className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm border border-white/10">
                      Git
                    </span>
  
                    <span className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm border border-white/10">
                      GitHub
                    </span>
  
                  </div>
  
                </div>
  
  
                {/* Status */}
                <div className="mt-8 pt-6 border-t border-white/10">
  
                  <div className="flex items-center gap-3">
  
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
  
                    <span className="text-sm text-slate-400">
                      Currently building
                    </span>
  
                  </div>
  
                  <p className="text-cyan-400 font-medium mt-2">
                    React experiences ⚡
                  </p>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default About;