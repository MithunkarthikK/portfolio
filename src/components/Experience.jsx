// File: src/components/Experience.jsx
const experiences = [
  {
    company: "Sam Core Solutions",
    role: "Internship",
    duration: "May 2023 – Jul 2023",
    description:
      "Gained valuable experience working within a specific industry, applying learned concepts directly into relevant work situations.",
  },
  {
    company: "Ingage Technology",
    role: "Junior Trainer (Intern)",
    duration: "May 2022 – Jul 2022",
    description:
      "Built strong relationships with trainees through active listening skills which resulted in increased trust levels during coaching sessions. Managed administrative tasks such as tracking attendance, updating records, and organizing training materials.",
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="bg-background text-white py-16 px-6 border-b border-glow"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-glow mb-12 text-center">
        Work Experience
      </h2>

      <div className="relative border-l border-glow max-w-4xl mx-auto pl-6">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-10 ml-2 relative">
            <div className="absolute w-3 h-3 bg-glow rounded-full -left-1.5 top-1.5 animate-pulse" />
            <h3 className="text-lg font-semibold text-glow">{exp.role}</h3>
            <p className="text-sm text-gray-400">{exp.company} · {exp.duration}</p>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
