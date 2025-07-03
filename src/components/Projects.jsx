const projects = [
  {
    title: "Tourist Guide",
    tech: "HTML, CSS, JavaScript, Python (Django)",
    description: "A cultural travel guide app to explore famous locations with pre-planned routes and insights for tourists.",
    link: "#"
  },
  {
    title: "Foodie",
    tech: "React.js",
    description: "A responsive online food ordering platform where users can browse restaurants, customize orders, and pay securely.",
    link: "#"
  },
  {
    title: "Mobile Number Tracker",
    tech: "Python",
    description: "A tool that retrieves location and basic details from a given mobile number using Python packages.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-background text-white py-16 px-6"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-glow mb-12 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-background border border-glow rounded-2xl p-6 shadow-lg hover:shadow-glow transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-glow mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 italic mb-2">{project.tech}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="text-sm text-glow underline hover:text-cyan-300"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
