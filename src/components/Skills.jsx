const skills = [
  "Python", "Java", "JavaScript", "React.js",
  "Django", "HTML5", "CSS3", "SQL"
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-background text-white py-16 px-6 border-b border-glow"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-glow mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-5 py-2 bg-glow bg-opacity-10 border border-glow rounded-full text-glow font-semibold shadow-md hover:scale-105 transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
