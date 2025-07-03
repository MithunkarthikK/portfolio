const Navbar = () => {
  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-glow">MithunKarthik</h1>
        <ul className="flex space-x-6 text-sm text-white">
          <li><a href="#about" className="hover:text-glow">About</a></li>
          <li><a href="#skills" className="hover:text-glow">Skills</a></li>
          <li><a href="#projects" className="hover:text-glow">Projects</a></li>
          <li><a href="#contact" className="hover:text-glow">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
