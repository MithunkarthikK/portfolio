import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0e0e10] pt-10 pb-6 text-white overflow-hidden border-t border-[#3b82f6]">
      {/* Glow bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 blur-md opacity-70 animate-glow-move" />

      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-2xl sm:text-2xl font-extrabold tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 animate-pulse">Let’s Connect</h2>

        <p className="text-sm text-gray-400">
          Open to opportunities, collaborations, or a quick chat!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mt-4">
          <a
            href="https://github.com/MithunkarthikK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-glow transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mithunkarthikk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-glow transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kkmithunkarthik@gmail.com"
            className="text-white hover:text-glow transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-xs text-gray-600 pt-6 border-t border-[#1f1f23]">
          © {new Date().getFullYear()} GlowStack by Mithunkarthik — Built with 💙
        </p>
      </div>
    </footer>
  );
};

export default Footer;
