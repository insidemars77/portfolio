export default function Portfolio() {
  const projects = [
    {
      title: "Student Management System",
      desc: "A full-stack dashboard for managing students, attendance, and records.",
      tech: "React • Node.js • MongoDB",
    },
    {
      title: "AI Trip Planner",
      desc: "Smart travel planner with location recommendations and modern UI.",
      tech: "React • Tailwind • APIs",
    },
    {
      title: "Game Prototype",
      desc: "A cinematic story-based game concept with immersive visuals.",
      tech: "Unity • C#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-400/10 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 border-b border-orange-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-widest text-orange-500">
            MARS.
          </h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#about" className="hover:text-orange-400 transition">
              About
            </a>
            <a href="#projects" className="hover:text-orange-400 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-orange-400 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-orange-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-4xl text-center z-10">
          <p className="text-orange-400 tracking-[0.4em] uppercase mb-4 text-sm">
            Portfolio Website
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6">
            SHRAVAN
            <span className="text-orange-500">.</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            BSc IT Student • Web Developer • Storyteller • Creative Thinker
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-2xl font-semibold shadow-lg shadow-orange-500/30">
              View Projects
            </button>

            <button className="px-8 py-4 border border-orange-500 hover:bg-orange-500/10 transition rounded-2xl font-semibold">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Building experiences,
              <br />
              not just websites.
            </h2>
          </div>

          <div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I am a BSc IT student passionate about web development,
              storytelling, drawing, and building immersive digital
              experiences. I love creating modern cinematic interfaces with a
              strong visual identity.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently exploring full-stack development, UI/UX design, and
              creative projects that combine technology with emotion.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-24 relative z-10"
      >
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind",
            "Node.js",
            "MongoDB",
            "GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border border-orange-500/20 rounded-3xl p-8 text-center hover:-translate-y-2 hover:border-orange-500 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-orange-400">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24 relative z-10"
      >
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-zinc-900/80 border border-orange-500/20 rounded-3xl overflow-hidden hover:border-orange-500 transition duration-300 hover:-translate-y-2"
            >
              <div className="h-52 bg-gradient-to-br from-orange-500/20 to-black"></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <p className="text-orange-400 text-sm mb-6">
                  {project.tech}
                </p>

                <button className="px-5 py-3 bg-orange-500 hover:bg-orange-600 transition rounded-xl font-medium">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-orange-500 mb-6">
            Stay Legendary.
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            "God's plan." ✨💙✨
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24 text-center relative z-10"
      >
        <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let's Build Something Great.
        </h2>

        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Open for internships, collaborations, freelance projects, and
          creative opportunities.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:yourmail@gmail.com"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl transition font-semibold"
          >
            Email Me
          </a>

          <a
            href="https://github.com"
            className="px-8 py-4 border border-orange-500 hover:bg-orange-500/10 rounded-2xl transition font-semibold"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-500/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Shravan Patole — Built with React & Tailwind
      </footer>
    </div>
  );
}
