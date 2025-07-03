const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="w-24 h-24 border-4 border-glow border-t-transparent rounded-full animate-spin blur-[1px]"></div>
      <p className="mt-6 text-glow text-lg animate-pulse tracking-widest">
        Loading GlowStack...
      </p>
    </div>
  );
};

export default Loader;
