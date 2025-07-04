import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 shadow-md border-b border-blue-500/30">
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 animate-pulse">
          GlowStack
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm text-white">
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-blue-400 transition duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] border-t border-blue-500/30 px-6 pb-4 animate-fade-in-down">
          <ul className="space-y-4 text-white text-sm">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={toggleMenu}
                  className="block hover:text-blue-400 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
