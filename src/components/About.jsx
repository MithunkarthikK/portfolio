const About = () => {
  return (
    <div
      id="about"
      className="bg-[#0e0e10] min-h-screen py-16 px-6 text-white"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        About Me
      </h2>

      <div className="max-w-5xl mx-auto relative group">
        {/* Glow layer */}
        <div className="absolute -inset-1 rounded-3xl bg-[#3b82f6] blur-xl opacity-20 group-hover:opacity-50 transition-all duration-500 z-0"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 bg-neutral-900/90 backdrop-blur-lg border border-neutral-700 p-10 rounded-3xl shadow-md group-hover:shadow-[0_0_15px_#3b82f6] transition-all duration-300">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 rounded-full shadow-[0_0_20px_#3b82f6]">
              <img
                src="/profile.jpg"
                alt="Mithunkarthik"
                className="w-48 h-48 rounded-full object-cover border border-[#3b82f6]"
              />
            </div>
          </div>

          {/* Bio Text */}
          <div className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
            <p>
              I'm a passionate Full Stack Developer who loves building modern web apps with clean UI/UX and strong backend logic. I focus on performance, clarity, and creating real-world solutions using technologies like <span className="text-blue-400">React.js</span>, <span className="text-blue-400">Node.js</span>, <span className="text-blue-400">Django</span>, and <span className="text-blue-400">MongoDB</span>.
            </p>
            <p>
              I completed my B.E. in <strong className="text-white">Computer Science and Engineering</strong> (2020–2024) from Chettinad College of Engineering and Technology. During my academic journey, I’ve taken up internships and real-time projects that helped me bridge theory with practical implementation.
            </p>
            <p>
              Outside of coding, I enjoy experimenting with design, learning new frameworks, and contributing to open-source projects. I'm currently open to full-time roles and internships in full-stack or frontend-focused positions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
