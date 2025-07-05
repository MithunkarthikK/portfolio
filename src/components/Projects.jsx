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
    link: "https://github.com/MithunkarthikK/Tourist-Guide.git",
  },
  {
    title: "Foodie",
    tech: [
      { name: "React.js", icon: <FaReact /> },
    ],
    description:
      "A responsive online food ordering platform where users can browse restaurants, customize orders, and pay securely.",
    link: "https://github.com/MithunkarthikK/Foodie.git",
  },
  {
    title: "Mobile Number Tracker",
    tech: [
      { name: "Python", icon: <FaPython /> },
    ],
    description:
      "A tool that retrieves location and basic details from a given mobile number using Python packages.",
    link: "https://github.com/MithunkarthikK/Tracking-Phno-Details.git",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#0e0e10] min-h-screen py-16 px-6 text-white"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-neutral-900/90 backdrop-blur-lg border border-neutral-700 rounded-xl p-6 shadow-md hover:shadow-[0_0_15px_#3b82f6] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-sm text-white bg-[#1f1f23] px-3 py-1 rounded-full border border-[#3b82f6]"
                >
                  {tech.icon} {tech.name}
                </span>
              ))}
            </div>

            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            <div className="flex gap-4 text-sm">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                  rel="noopener noreferrer"
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
