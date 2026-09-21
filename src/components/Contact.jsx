function Contact() {
    return (
      <section
        id="contact"
        className="relative py-28 overflow-hidden"
      >
        {/* ================= BACKGROUND GLOW ================= */}
  
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2
                     w-96 h-96
                     bg-cyan-500/10
                     rounded-full
                     blur-3xl"
        />
  
        <div
          className="absolute bottom-0 -right-40
                     w-80 h-80
                     bg-purple-500/10
                     rounded-full
                     blur-3xl"
        />
  
  
        <div className="max-w-6xl mx-auto px-6 relative z-10">
  
          {/* ================= HEADING ================= */}
  
          <div className="text-center mb-12">
  
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm">
              06 / Contact
            </p>
  
            <h2 className="text-4xl md:text-6xl font-bold mt-4">
              Let's build something{" "}
              <span
                className="bg-gradient-to-r
                           from-cyan-400
                           to-purple-500
                           bg-clip-text
                           text-transparent"
              >
                meaningful.
              </span>
            </h2>
  
            <p className="text-slate-400 max-w-2xl mx-auto mt-5 leading-relaxed">
              Have an idea, opportunity or project in mind?
              I'd love to hear about it.
            </p>
  
          </div>
  
  
          {/* ================= CONTACT CARD ================= */}
  
          <div
            className="relative
                       max-w-4xl
                       mx-auto
                       rounded-3xl
                       bg-slate-900/60
                       backdrop-blur-xl
                       border border-white/10
                       overflow-hidden"
          >
  
            {/* Top Gradient Line */}
  
            <div
              className="absolute top-0 left-0 right-0 h-px
                         bg-gradient-to-r
                         from-transparent
                         via-cyan-400
                         to-transparent"
            />
  
  
            <div className="grid md:grid-cols-2">
  
              {/* ================================================= */}
              {/* LEFT SIDE */}
              {/* ================================================= */}
  
              <div className="p-7 md:p-9">
  
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  Get in touch
                </p>
  
                <h3 className="text-2xl font-bold text-white mt-3">
                  Let's start a conversation.
                </h3>
  
                <p className="text-slate-400 leading-relaxed mt-4">
                  Whether it's a frontend opportunity, collaboration,
                  freelance project or simply a conversation about web
                  development — feel free to reach out.
                </p>
  
  
                {/* ================= SOCIAL ICONS ================= */}
  
                <div className="flex items-center gap-4 mt-7">
  
                  {/* Email */}
  
                  <a
                    href="mailto:merinjohnv@gmail.com"
                    aria-label="Email"
                    title="Email"
                    className="w-12 h-12
                               rounded-xl
                               bg-cyan-400/10
                               border border-cyan-400/10
                               flex items-center justify-center
                               text-cyan-400
                               hover:bg-cyan-400/20
                               hover:border-cyan-400/30
                               hover:-translate-y-1
                               transition-all duration-300"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-none stroke-current"
                      strokeWidth="1.8"
                    >
                      <path
                        d="M4 6h16v12H4z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
  
                      <path
                        d="m4 7 8 6 8-6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
  
  
                  {/* LinkedIn */}
  
                  <a
                    href="https://www.linkedin.com/in/merinjohnv/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="w-12 h-12
                               rounded-xl
                               bg-purple-400/10
                               border border-purple-400/10
                               flex items-center justify-center
                               text-purple-400
                               hover:bg-purple-400/20
                               hover:border-purple-400/30
                               hover:-translate-y-1
                               transition-all duration-300"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5.25 10h2.5v8.75h-2.5V10Zm4 0h2.4v1.2h.03c.33-.63 1.15-1.45 2.55-1.45 2.73 0 3.23 1.8 3.23 4.15v4.85h-2.5v-4.3c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.28v4.37h-2.5V10Z" />
                    </svg>
                  </a>
  
  
                  {/* GitHub */}
  
                  <a
                    href="https://github.com/Merinjohnv"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="w-12 h-12
                               rounded-xl
                               bg-slate-800
                               border border-white/10
                               flex items-center justify-center
                               text-slate-300
                               hover:bg-slate-700
                               hover:text-white
                               hover:border-white/20
                               hover:-translate-y-1
                               transition-all duration-300"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.18 9.18 0 0 1 12 7.9c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                    </svg>
                  </a>
  
                </div>
  
              </div>
  
  
              {/* ================================================= */}
              {/* RIGHT SIDE */}
              {/* ================================================= */}
  
              <div
                className="bg-slate-950/40
                           border-t md:border-t-0
                           md:border-l
                           border-white/10
                           p-7 md:p-9"
              >
  
                {/* ================= CODE WINDOW ================= */}
  
                <div>
  
                  <div className="flex items-center justify-between mb-5">
  
                    <div className="flex gap-2">
  
                      <span className="w-3 h-3 rounded-full bg-red-400/70" />
  
                      <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
  
                      <span className="w-3 h-3 rounded-full bg-green-400/70" />
  
                    </div>
  
                    <span className="text-xs text-slate-600 font-mono">
                      contact.js
                    </span>
  
                  </div>
  
  
                  <div className="font-mono text-sm leading-7">
  
                    <p>
                      <span className="text-purple-400">
                        const
                      </span>{" "}
                      <span className="text-cyan-400">
                        developer
                      </span>{" "}
                      = {"{"}
                    </p>
  
                    <p className="pl-5">
                      <span className="text-slate-500">
                        name:
                      </span>{" "}
                      <span className="text-green-400">
                        "Merin John"
                      </span>
                      ,
                    </p>
  
                    <p className="pl-5">
                      <span className="text-slate-500">
                        role:
                      </span>{" "}
                      <span className="text-green-400">
                        "Frontend Developer"
                      </span>
                      ,
                    </p>
  
                    <p className="pl-5">
                      <span className="text-slate-500">
                        focus:
                      </span>{" "}
                      <span className="text-green-400">
                        "React"
                      </span>
                      ,
                    </p>
  
                    <p className="pl-5">
                      <span className="text-slate-500">
                        status:
                      </span>{" "}
                      <span className="text-green-400">
                        "open to opportunities"
                      </span>
                    </p>
  
                    <p>{"}"}</p>
  
                  </div>
  
                </div>
  
  
                {/* ================= CTA ================= */}
  
                <div className="mt-8">
  
                  <p className="text-sm text-slate-500">
                    Have something in mind?
                  </p>
  
                  <a
                    href="mailto:merinjohnv@gmail.com"
                    className="inline-flex items-center gap-2
                               mt-3
                               text-lg
                               font-semibold
                               text-cyan-400
                               hover:text-white
                               transition-colors"
                  >
                    Start a conversation
                    <span>→</span>
                  </a>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
  
          {/* ================= AVAILABILITY ================= */}
  
          <div className="flex justify-center mt-8">
  
            <div
              className="inline-flex items-center gap-3
                         px-5 py-3
                         rounded-full
                         bg-slate-900/60
                         border border-white/10
                         backdrop-blur-md"
            >
  
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
  
              <span className="text-sm text-slate-400">
                Open to frontend opportunities
              </span>
  
            </div>
  
          </div>
  
  
          {/* ================= FOOTER ================= */}
  
          <div
            className="mt-10
                       pt-8
                       border-t border-white/10
                       flex flex-col md:flex-row
                       items-center
                       justify-between
                       gap-4"
          >
  
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Merin John
            </p>
  
            <p className="text-sm text-slate-600">
              Built with React ⚛ & Tailwind CSS
            </p>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default Contact;