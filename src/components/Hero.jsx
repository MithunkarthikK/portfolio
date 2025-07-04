const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0e0e10] text-white overflow-hidden"
      data-aos="fade-up"
    >
      {/* 🔵 Blue glow animation background */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 rounded-full blur-3xl opacity-20 animate-glow-move" />

      <div className="relative z-10">
        {/* 🔥 Glowing Brand Name */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 animate-pulse">
          GlowStack
        </h1>

        <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
          by Mithunkarthik
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
          Full Stack Developer building modern, secure & scalable web apps with{" "}
          <span className="text-blue-400">React</span>,{" "}
          <span className="text-blue-400">Node.js</span>,{" "}
          <span className="text-blue-400">Django</span>,{" "}
          <span className="text-blue-400">MongoDB</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/MithunkarthikK"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 font-semibold rounded border border-blue-500 text-white hover:bg-blue-500 hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mithunkarthikk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 font-semibold rounded border border-blue-500 text-white hover:bg-blue-500 hover:text-black transition"
          >
            LinkedIn
          </a>
          <a
            href="/k.k.mithunkarthik_resume.pdf"
            download
            className="px-6 py-2 font-semibold rounded border border-blue-500 text-white hover:bg-blue-500 hover:text-black transition"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
