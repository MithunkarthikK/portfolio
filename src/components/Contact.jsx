const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-[#0e0e10] min-h-screen py-16 px-6 text-white"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto relative group">
        {/* 🔵 Blue Glow Background */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 blur-md opacity-20 group-hover:opacity-60 transition duration-500" />

        <div className="relative z-10 bg-neutral-900/90 backdrop-blur-lg text-white border border-neutral-700 rounded-3xl p-10 shadow-md group-hover:shadow-[0_0_20px_#3b82f6] transition-all duration-300">
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-blue-300">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-md bg-[#1f1f23] border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-blue-300">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-md bg-[#1f1f23] border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-blue-300">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-md bg-[#1f1f23] border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 transition rounded-md font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
