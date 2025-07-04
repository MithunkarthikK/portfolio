import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiDjango, SiGit } from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React.js", icon: <FaReact /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
  ],
  Backend: [
    { name: "Python", icon: <FaPython /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Java", icon: <FaJava /> },
  ],
  Database: [{ name: "MongoDB", icon: <SiMongodb /> }],
  "Version Control": [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <FaGithub /> },
  ],
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-[#0e0e10] min-h-screen py-16 px-6 text-white"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, list], index) => (
          <div
            key={index}
            className="relative bg-neutral-900/90 backdrop-blur-lg border border-neutral-700 rounded-xl p-6 shadow-md hover:shadow-[0_0_15px_#3b82f6] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {list.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-sm text-white bg-[#1f1f23] px-3 py-1 rounded-full border border-[#3b82f6]"
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
