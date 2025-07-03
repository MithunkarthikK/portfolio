const Hero = () => {
    return (
        <div
            className="h-screen flex flex-col items-center justify-center text-center px-4"
            data-aos="fade-up"
        >
            <h1 className="text-5xl font-bold mb-4 text-glow animate-pulse">
                GlowStack
            </h1>
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
                by Mithunkarthik
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl">
                Full Stack Developer | React.js • Django • Python • Java
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    href="https://github.com/MithunkarthikK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-glow text-black font-semibold rounded hover:scale-105 transition duration-200 shadow-md">GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/mithunkarthikk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-glow text-black font-semibold rounded hover:scale-105 transition duration-200 shadow-md">LinkedIn
                </a>
                <a
                    href="/k.k.mithunkarthik_resume.pdf"
                    download
                    className="px-6 py-2 bg-glow text-black font-semibold rounded hover:scale-105 transition duration-200 shadow-md">Resume
                </a>
            </div>

        </div>
    );
};

export default Hero;
