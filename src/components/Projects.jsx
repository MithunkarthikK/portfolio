import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiDjango } from 'react-icons/si';

const projects = [
  {
    title: "SilentVotes",
    tech: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    description:
      "A secure, anonymous voting platform with user authentication, poll creation, and result charts.",
    link: "https://github.com/MithunkarthikK/silentvotes",
    demo: "https://silentvotes.vercel.app",
  },
  {
    title: "Tourist Guide",
    tech: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Django", icon: <SiDjango /> },
    ],
    description:
      "A cultural travel guide app to explore famous locations with pre-planned routes and insights for tourists.",
    link: "#",
  },
  {
    title: "Foodie",
    tech: [
      { name: "React.js", icon: <FaReact /> },
    ],
    description:
      "A responsive online food ordering platform where users can browse restaurants, customize orders, and pay securely.",
    link: "#",
  },
  {
    title: "Mobile Number Tracker",
    tech: [
      { name: "Python", icon: <FaPython /> },
    ],
    description:
      "A tool that retrieves location and basic details from a given mobile number using Python packages.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-background text-white py-16 px-6"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-glow mb-12 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-background border border-glow rounded-2xl p-6 shadow-lg hover:shadow-glow transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-glow mb-2">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-3 items-center">
              {project.tech.map((techItem, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 text-xs text-glow border border-glow rounded-full px-3 py-1 bg-glow/10"
                >
                  {techItem.icon} {techItem.name}
                </span>
              ))}
            </div>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-glow underline hover:text-cyan-300"
                >
                  Live Demo
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-glow underline hover:text-cyan-300"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
