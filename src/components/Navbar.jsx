import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-glow z-[60] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-md border-b border-blue-500/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Brand */}
          <h1 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 animate-pulse">
            GlowStack
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm text-white">
            <li><a href="#about" className="hover:text-glow transition">About</a></li>
            <li><a href="#skills" className="hover:text-glow transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-glow transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-glow transition">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#121212] border-t border-blue-500/20 px-6 pb-4">
            <ul className="space-y-4 text-white text-sm">
              <li><a href="#about" onClick={toggleMenu} className="block hover:text-glow">About</a></li>
              <li><a href="#skills" onClick={toggleMenu} className="block hover:text-glow">Skills</a></li>
              <li><a href="#projects" onClick={toggleMenu} className="block hover:text-glow">Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu} className="block hover:text-glow">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
