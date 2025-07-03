const About = () => {
    return (
        <div
            id="about"
            className="min-h-screen bg-background text-white py-12 sm:py-16 px-4 sm:px-6 border-b border-glow"
            data-aos="fade-up"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-glow mb-12 text-center">
                About Me
            </h2>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Avatar */}
                <div className="flex-shrink-0">
                    <div className="relative w-48 h-48 rounded-full before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-cyan-400 before:to-purple-500 before:blur-sm before:animate-glow">
                        <img
                            src="/profile.jpg"
                            alt="Mithunkarthik"
                            className="w-48 h-48 rounded-full object-cover relative z-10 border-2 border-glow"
                        />
                    </div>

                </div>

                {/* Bio Text */}
                <div className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed space-y-6">
                    <p>
                        I'm a passionate Full Stack Developer who loves building modern web apps with clean UI/UX and strong backend logic. I focus on performance, clarity, and creating real-world solutions using technologies like <span className="text-glow">React.js</span>, <span className="text-glow">Node.js</span>, <span className="text-glow">Django</span>, and <span className="text-glow">MongoDB</span>.
                    </p>
                    <p>
                        I completed my B.E. in <strong>Computer Science and Engineering</strong> (2020–2024) from Chettinad College of Engineering and Technology. During my academic journey, I’ve taken up internships and real-time projects that helped me bridge theory with practical implementation.
                    </p>
                    <p>
                        Outside of coding, I enjoy experimenting with design, learning new frameworks, and contributing to open-source projects. I'm currently open to full-time roles and internships in full-stack or frontend-focused positions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
