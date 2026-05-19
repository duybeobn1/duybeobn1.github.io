import { useTranslation } from 'react-i18next';

function ExperiencePage() {
  const { t } = useTranslation();
  const rawExperiences = t("experience.items", { returnObjects: true });
  const experiences = Array.isArray(rawExperiences) ? rawExperiences : [];

  const education = [
    {
      id: 1,
      institution: "Université Claude Bernard Lyon 1",
      degree: "Master Informatique — Spécialisation IA et Data Science",
      duration: "2023 – 2026 (M2)",
      description:
        "Key courses: Supervised Learning, Image Analysis, Game Theory, Multi-Agent Systems, AI Techniques. Developed hands-on skills in machine learning, computer vision, distributed systems, and data-driven web apps.",
    },
    {
      id: 2,
      institution: "INSA Lyon",
      degree: "Engineering Preparation and Materials Science (BSc level)",
      duration: "2019 – 2022",
      description:
        "Two-year preparatory cycle focused on Mathematics, Physics, and Computer Science fundamentals. Third-year specialized in Materials Science — studied engineering materials, properties, processes, and simulation tools. Awarded the Saint-Gobain merit scholarship for academic excellence and research contributions during the 3rd year.",
    },
    {
      id: 3,
      institution: "Lycée d’excellence en sciences naturelles (Hanoi, Vietnam)",
      degree: "High School Diploma — Science Track",
      duration: "2016 – 2019",
      description:
        "Graduated with a strong focus on advanced Mathematics, Physics, and Chemistry.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-minimal text-default">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('experience.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {t('experience.workExperience')}
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {index < experiences.length - 1 && (
                  <div className="absolute left-4 top-16 w-0.5 h-16 bg-[var(--line)]"></div>
                )}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[var(--yellow)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-minimal p-6 rounded-lg shadow-md text-left border border-line">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <span className="text-sm text-gray-900 font-medium">
                        {exp.duration}
                      </span>
                    </div>
                    <h4 className="text-lg text-gray-700 mb-3">
                      {exp.company}
                      {exp.employmentType ? ` · ${exp.employmentType}` : ""}
                    </h4>
                    {exp.location && (
                      <p className="text-sm text-gray-500 mb-3">
                        {exp.location}
                      </p>
                    )}
                    <p className="text-gray-600 mb-3 leading-relaxed text-left">
                      {exp.description}
                    </p>
                    {Array.isArray(exp.responsibilities) &&
                      exp.responsibilities.length > 0 && (
                        <ul className="list-disc list-inside text-gray-600 mb-4 leading-relaxed space-y-1 text-left">
                          {exp.responsibilities.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(exp.technologies) &&
                        exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {t('experience.education')}
          </h2>
          <div className="space-y-8 relative">
            {/* Timeline vertical line */}
            <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-[var(--line)]"></div>

            {education.map((edu) => (
              <div key={edu.id} className="flex items-start space-x-4 relative">
                {/* Timeline dot */}
                <div className="w-8 h-8 bg-[var(--blue)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                {/* Content */}
                <div className="bg-minimal p-6 rounded-lg shadow-md flex-1 border border-line">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-gray-900 font-medium">
                      {edu.duration}
                    </span>
                  </div>
                  <h4 className="text-lg text-gray-700 mb-3">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Autres expériences */}
        <section className="py-24 px-6 bg-minimal">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              {t('experience.otherExperiences')}
            </h2>
            <div className="space-y-8 relative">
              {/* Timeline vertical line */}
              <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-[var(--line)]"></div>
              <div className="flex items-start space-x-4 relative">
                <div className="w-8 h-8 bg-[var(--pink)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-minimal p-6 rounded-lg shadow-md flex-1 border border-line">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Internship and formation in gastronomie
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Le Cordon Bleu, Hong Kong University, Institut Paul Bocuse.
                  </p>
                </div>
              </div>
              {/* Consultant culinaire */}
              <div className="flex items-start space-x-4 relative">
                <div className="w-8 h-8 bg-[var(--yellow)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-minimal p-6 rounded-lg shadow-md flex-1 border border-line">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Consultant culinaire
                  </h3>
                  <span className="text-sm text-gray-900 font-medium">
                    2023 – Now
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Menu consultant for restaurant A Bản Mountain Dew (Guide
                    Michelin) et Dana Vegan House in Vietnam.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 relative">
                <div className="w-8 h-8 bg-[var(--green)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-minimal p-6 rounded-lg shadow-md flex-1 border border-line">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Commis de cuisine at Bentomania
                  </h3>
                  <span className="text-sm text-gray-900 font-medium">
                    2021 – 2022
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    “Meal preparation and inventory management.”
                  </p>
                </div>
              </div>
              {/* Commis de cuisine */}
              <div className="flex items-start space-x-4 relative">
                <div className="w-8 h-8 bg-[var(--blue)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-minimal p-6 rounded-lg shadow-md flex-1 border border-line">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Commis de cuisine at Chez Banoi
                  </h3>
                  <span className="text-sm text-gray-900 font-medium">
                    2024 – 2025
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    “Meal preparation and inventory management.”
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 relative">
                <div className="w-8 h-8 bg-[var(--pink)] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="bg-minimal p-6 rounded-lg shadow-md flex-1 border border-line">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Le Grand Refectoire
                  </h3>
                  <span className="text-sm text-gray-900 font-medium">
                    2025
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    “Chef de partie (entree and tapas)”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExperiencePage;
