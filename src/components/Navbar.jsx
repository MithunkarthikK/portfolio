import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-glow">MithunKarthik</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm text-white">
          <li><a href="#about" className="hover:text-glow">About</a></li>
          <li><a href="#skills" className="hover:text-glow">Skills</a></li>
          <li><a href="#projects" className="hover:text-glow">Projects</a></li>
          <li><a href="#contact" className="hover:text-glow">Contact</a></li>
        </ul>

        {/* Hamburger Button (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-glow px-6 pb-4">
          <ul className="space-y-4 text-white text-sm">
            <li><a href="#about" onClick={toggleMenu} className="block hover:text-glow">About</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="block hover:text-glow">Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu} className="block hover:text-glow">Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="block hover:text-glow">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
