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
      className="bg-[#0e0e10] min-h-screen py-16 px-6 text-white"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Work Experience
      </h2>

      <div className="grid max-w-4xl mx-auto">
        <div className="relative bg-neutral-900/90 backdrop-blur-lg border border-neutral-700 rounded-xl p-8 shadow-md hover:shadow-[0_0_15px_#3b82f6] transition-all duration-300">
          <div className="border-l-2 border-[#3b82f6] pl-6">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-2 relative">
                <div className="absolute w-3 h-3 bg-[#3b82f6] rounded-full -left-1.5 top-1.5 shadow-[0_0_8px_#3b82f6]" />
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-sm text-gray-400 mb-1">
                  {exp.company} · {exp.duration}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
