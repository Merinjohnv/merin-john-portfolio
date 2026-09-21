import { useEffect, useState } from "react";

function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ================= LEFT ================= */}
          <div
            className={`transition-all duration-1000 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-cyan-400 font-medium mb-4 tracking-wide">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Merin
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                John
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mt-5">
              Frontend Developer
            </h2>

            <p className="text-slate-400 max-w-xl mt-6 text-lg leading-relaxed">
              I build modern, responsive and interactive web experiences using
              React, JavaScript and modern UI technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full
                           bg-gradient-to-r from-cyan-500 to-cyan-900
                           text-white font-medium
                           hover:scale-105
                           transition-transform duration-300
                           shadow-lg shadow-cyan-500/20"
              >
                View My Work →
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full
                           border border-slate-700
                           text-slate-300
                           hover:border-cyan-400
                           hover:text-cyan-400
                           transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-10">
              {/* GitHub */}
              <a
                href="https://github.com/Merinjohnv"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11
               flex items-center justify-center
               rounded-full
               border border-slate-700
               text-slate-400
               hover:text-white
               hover:border-slate-500
               hover:bg-slate-800
               hover:-translate-y-1
               transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.18 9.18 0 0 1 12 7.9c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/merinjohnv/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11
               flex items-center justify-center
               rounded-full
               border border-slate-700
               text-slate-400
               hover:text-cyan-400
               hover:border-cyan-400/50
               hover:bg-cyan-400/10
               hover:-translate-y-1
               transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5.25 10h2.5v8.75h-2.5V10Zm4 0h2.4v1.2h.03c.33-.63 1.15-1.45 2.55-1.45 2.73 0 3.23 1.8 3.23 4.15v4.85h-2.5v-4.3c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.28v4.37h-2.5V10Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
              {/* Main Glow */}
              <div
                className="absolute inset-10
                           bg-gradient-to-r
                           from-cyan-500
                           to-purple-600
                           blur-3xl
                           opacity-20
                           rounded-full"
              />

              {/* Profile Circle */}
              <div className="absolute inset-10 rounded-full">
                {/* Profile Ring */}
                <div
                  className="absolute inset-0 rounded-full
             border-[3px]
             border-cyan-400/40"
                />

                {/* Rotating Orbit */}
                <div className="absolute inset-[-2px] rounded-full profile-orbit">
                  {/* Cyan Dot */}
                  <div
                    className="absolute
               -top-1.5 left-1/2
               -translate-x-1/2
               w-3 h-3
               rounded-full
               bg-cyan-400
               shadow-[0_0_12px_4px_rgba(34,211,238,0.7)]"
                  />
                </div>

                {/* Profile Image */}
                <div className="absolute inset-[5px] rounded-full bg-slate-950 p-2">
                  <img
                    src="/profile.jpg"
                    alt="Merin John"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* ================= FLOATING BADGES ================= */}

              {/* React */}
              <div
                className="absolute top-6 right-8
                           px-4 py-2
                           rounded-xl
                           bg-slate-900/80
                           backdrop-blur-md
                           border border-white/10
                           text-cyan-400
                           text-sm font-medium
                           shadow-xl
                           animate-bounce"
              >
                ⚛ React
              </div>

              {/* JavaScript */}
              <div
                className="absolute bottom-20 right-0
                           px-4 py-2
                           rounded-xl
                           bg-slate-900/80
                           backdrop-blur-md
                           border border-white/10
                           text-yellow-400
                           text-sm font-medium
                           shadow-xl
                           animate-bounce"
              >
                JS
              </div>

              {/* Tailwind */}
              <div
                className="absolute bottom-20 -left-6
                           px-4 py-2
                           rounded-xl
                           bg-slate-900/80
                           backdrop-blur-md
                           border border-white/10
                           text-sky-400
                           text-sm font-medium
                           shadow-xl
                           animate-bounce"
              >
                Tailwind
              </div>

              {/* Code Card */}
              <div
                className="absolute top-24 -left-15
                           hidden lg:block
                           w-44
                           p-4
                           rounded-xl
                           bg-slate-900/90
                           backdrop-blur-md
                           border border-white/10
                           shadow-2xl"
              >
                <div className="flex gap-1 mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                </div>

                <p className="text-xs text-slate-500">portfolio.jsx</p>

                <p className="text-xs text-purple-400 mt-2">
                  const
                  <span className="text-cyan-400"> developer </span>=
                </p>

                <p className="text-xs text-green-400 ml-3">"Merin";</p>
              </div>

              {/* Bottom Badge */}
              <div
                className="absolute bottom-0 left-12
                           px-5 py-3
                           rounded-2xl
                           bg-slate-900/90
                           backdrop-blur-lg
                           border border-white/10
                           shadow-xl"
              >
                <p className="text-xs text-slate-500">Currently building</p>

                <p className="text-sm font-semibold text-cyan-400 animate-pulse">
                  React Experiences⚡
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
