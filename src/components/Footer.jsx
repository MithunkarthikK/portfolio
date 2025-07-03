const Footer = () => {
  return (
    <footer className="bg-background border-t border-glow py-6 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()} <span className="text-glow font-semibold">GlowStack</span> · Built by Mithunkarthik K
      </p>
    </footer>
  );
};

export default Footer;
