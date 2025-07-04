const GlowStackLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-white">
      {/* Glowing SVG Rings */}
      <svg className="w-24 h-24 animate-spin-slow" viewBox="0 0 100 100" fill="none">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#00ffe7"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="62.8"
          strokeDashoffset="0"
          className="animate-glow-ring"
        />
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="47.1"
          strokeDashoffset="0"
          className="animate-glow-ring delay-[0.3s]"
        />
      </svg>

      {/* Glowing Brand Text */}
      <div className="mt-6 text-center text-light text-lg sm:text-xl font-semibold tracking-widest animate-glow-text">
        Loading <span className="text-1xl sm:text-2xl font-extrabold tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 animate-pulse">GlowStack ...</span>
      </div>
    </div>
  );
};

export default GlowStackLoader;
