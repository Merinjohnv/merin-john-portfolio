function Projects() {
    const projects = [
      {
        title: "DevSpace",
        description:
          "A modern responsive blog platform built with React.js, featuring article search, category filtering, dynamic routing, bookmarks, post creation and LocalStorage-based persistence.",
        image: "/projects/devspace.png",
        tech: ["React", "JavaScript", "Tailwind CSS", "React Router", "LocalStorage"],
        live: "https://merin-devspace.vercel.app/",
        github: "https://github.com/Merinjohnv/devspace",
        number: "01",
        accent: "cyan",
      },
      {
        title: "Weather Dashboard",
        description:
          "A responsive weather application that provides current weather information and a 5-day forecast with a clean, interactive interface.",
        image: "/projects/weather.png",
        tech: ["React", "Tailwind CSS", "Vite", "OpenWeatherMap"],
        live: "https://weather-dashboard.vercel.app/",
        github: "https://github.com/Merinjohnv/weather-dashboard",
        number: "02",
        accent: "cyan",
      },
      {
        title: "To-Do List",
        description:
          "A modern task management application with a responsive dark interface and local storage support for persistent tasks.",
        image: "/projects/todo.png",
        tech: ["React", "Tailwind CSS", "LocalStorage"],
        live: "https://merin-todolistapp.vercel.app/",
        github: "https://github.com/Merinjohnv",
        number: "03",
        accent: "purple",
      },
      {
        title: "Movie Search",
        description:
          "A movie discovery application using the OMDb API with search functionality, debouncing and a responsive interface.",
        image: "/projects/movie.png",
        tech: ["React", "OMDb API", "CSS", "JavaScript"],
        live: "https://merinjohnv.github.io/movie-search-react/",
        github: "https://github.com/Merinjohnv",
        number: "04",
        accent: "pink",
      },
    ];
  
    return (
      <section
        id="projects"
        className="relative py-28 overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
  
        <div className="max-w-6xl mx-auto px-6 relative z-10">
  
          {/* ================= HEADING ================= */}
  
          <div className="mb-16">
  
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm">
              03 / Projects
            </p>
  
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Things I've{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                built.
              </span>
            </h2>
  
            <p className="text-slate-400 mt-5 max-w-2xl leading-relaxed">
              A selection of projects where I experiment, learn and turn
              ideas into working web experiences.
            </p>
  
          </div>
  
  
          {/* ================= PROJECTS ================= */}
  
          <div className="space-y-10">
  
            {projects.map((project, index) => (
  
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl
                           bg-slate-900/60
                           backdrop-blur-xl
                           border border-white/10
                           hover:border-cyan-400/30
                           transition-all duration-500`}
              >
  
                <div
                  className={`grid md:grid-cols-2
                             ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
  
                  {/* ================= IMAGE ================= */}
  
                  <div className="relative min-h-[280px] md:min-h-[360px] overflow-hidden">
  
                    {/* Image */}
  
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover
                                 group-hover:scale-105
                                 transition-transform duration-700"
                    />
  
                    {/* Overlay */}
  
                    <div
                      className="absolute inset-0
                                 bg-gradient-to-t
                                 from-slate-950
                                 via-slate-950/20
                                 to-transparent"
                    />
  
                    {/* Project Number */}
  
                    <span
                      className="absolute top-6 left-6
                                 text-5xl font-bold
                                 text-white/10"
                    >
                      {project.number}
                    </span>
  
                  </div>
  
  
                  {/* ================= CONTENT ================= */}
  
                  <div className="p-8 md:p-10 flex flex-col justify-center">
  
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                      Featured Project
                    </p>
  
                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>
  
                    <p className="text-slate-400 leading-relaxed mt-5">
                      {project.description}
                    </p>
  
  
                    {/* Tech Stack */}
  
                    <div className="flex flex-wrap gap-2 mt-6">
  
                      {project.tech.map((tech) => (
  
                        <span
                          key={tech}
                          className="px-3 py-1.5
                                     rounded-full
                                     bg-slate-950
                                     border border-white/10
                                     text-xs text-slate-400
                                     group-hover:text-cyan-400
                                     transition-colors"
                        >
                          {tech}
                        </span>
  
                      ))}
  
                    </div>
  
  
                    {/* Links */}
  
                    <div className="flex items-center gap-6 mt-8">
  
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium
                                   text-cyan-400
                                   hover:text-cyan-300
                                   transition-colors"
                      >
                        Live Demo ↗
                      </a>
  
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium
                                   text-slate-400
                                   hover:text-white
                                   transition-colors"
                      >
                        GitHub ↗
                      </a>
  
                    </div>
  
                  </div>
  
                </div>
  
              </div>
  
            ))}
  
          </div>
  
  
          {/* ================= FOOTER ================= */}
  
          <div className="flex justify-center mt-14">
  
            <a
              href="https://github.com/Merinjohnv"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full
                         border border-white/10
                         text-slate-300
                         hover:border-cyan-400
                         hover:text-cyan-400
                         transition-all duration-300"
            >
              Explore more on GitHub →
            </a>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Projects;