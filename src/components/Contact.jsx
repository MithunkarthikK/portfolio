const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-background text-white py-12 sm:py-16 px-4 sm:px-6 border-t border-glow"
      data-aos="fade-up"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-glow mb-12 text-center">
        Contact Me
      </h2>

      <form className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block mb-1 text-sm text-gray-400">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 text-sm sm:text-base bg-transparent border border-glow rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-glow"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-400">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 text-sm sm:text-base bg-transparent border border-glow rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-glow"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-400">Message</label>
          <textarea
            className="w-full px-4 py-2 text-sm sm:text-base bg-transparent border border-glow rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-glow"
            placeholder="Write your message..."
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-glow text-black font-semibold rounded hover:scale-105 transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
