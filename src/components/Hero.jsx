const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-glow animate-pulse">
        MITHUNKARTHIK K
      </h1>
      <p className="text-xl text-gray-300 max-w-xl">
        Full Stack Developer | React.js • Django • Python • JavaScript
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="https://github.com/MithunkarthikK"
          target="_blank"
          className="text-glow underline hover:text-cyan-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mithunkarthikk"
          target="_blank"
          className="text-glow underline hover:text-cyan-400"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Hero;
