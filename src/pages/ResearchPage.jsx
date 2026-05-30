import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const pdfBase = '/Research Document';

const publications = [
  {
    id: 1,
    title: "Posture-guided image synthesis of a person",
    authors: "Vu Anh Duy, et al.",
    venue: "Master Project, Université Lyon 1",
    year: 2025,
    github: "https://github.com/duybeobn1/PostureHumanoid",
  },
  {
    id: 2,
    title: "KEIGO-SYNC: The Honorifics Trap - Investigating Grammatical Politeness and Sycophancy in Multilingual LLMs",
    authors: "Edgar Demeude, Vu Anh Duy, et al.",
    venue: "AI Safety Research Project, Université Lyon 1",
    year: 2025,
    featured: true,
    pdf: `${pdfBase}/KEIGO_paper.pdf`,
    github: "https://github.com/edgar-demeude/KEIGO-SYNC",
  },
  {
    id: 3,
    title: "Water Efficiency in African Data Centers",
    authors: "Edgar Demeude, Ghuilhem Dupuy, Vu Anh Duy, Vincent Joulain",
    venue: "DataViz Project, Université Lyon 1",
    year: 2026,
    link: "https://deankoontzg.github.io/DataViz_EVGA/",
  },
  {
    id: 4,
    title: "Graph ML – Link Prediction with GAE/VGAE",
    authors: "Vu Anh Duy",
    venue: "Research Project, Université Lyon 1",
    year: 2025,
    github: "https://github.com/duybeobn1/BIO-GNN",
  },
  {
    id: 5,
    title: "End-to-End Multi-Task Models for Argumentation (ABA+)",
    authors: "Vu Anh Duy",
    venue: "NLP Research Project, Université Lyon 1",
    year: 2025,
    pdf: `${pdfBase}/Argumentation Platform.pdf`,
    github: "https://github.com/duybeobn1/Dynamics_Argumentations",
  },
  {
    id: 6,
    title: "Mini Vision Transformer for Image Restoration",
    authors: "Vu Anh Duy",
    venue: "Deep Learning Research Project, Université Lyon 1",
    year: 2025,
    pdf: `${pdfBase}/VIT_2024`,
    github: "https://github.com/duybeobn1/Mini-Vision-Transformer",
  },
  {
    id: 7,
    title: "Food Mining – Intelligent Food Data Analysis",
    authors: "Vu Anh Duy, Thomas Aub, et al.",
    venue: "Data Mining Research Project, Université Lyon 1",
    year: 2025,
    github: "https://github.com/Thomas-aub/Food_Mining",
  },
  {
    id: 8,
    title: "Inventory Culinary Assistance - AI-Powered Culinary Platform",
    authors: "Vu Anh Duy",
    venue: "Personal Research Project",
    year: 2026,
    featured: true,
    pdf: `${pdfBase}/ICA.pdf`,
    github: "https://github.com/duybeobn1/cook_backend",
  },
  {
    id: 9,
    title: "NLP for Biomedical Text Classification (2025)",
    authors: "Vu Anh Duy",
    venue: "NLP Research Project, Université Lyon 1",
    year: 2025,
    pdf: `${pdfBase}/NLP 2025.pdf`,
    github: "https://github.com/duybeobn1/NLP_Biom",
  },
  {
    id: 10,
    title: "Food Bank Clustering – Spatial and Demographic Analysis",
    authors: "Vu Anh Duy",
    venue: "Data Mining Research Project, Université Lyon 1",
    year: 2025,
    featured: true,
    pdf: `${pdfBase}/Food Bank Clustering.pdf`,
    github: "https://github.com/Thomas-aub/Food_Mining",
  },
  {
    id: 11,
    title: "Mental Mate – AI-Powered Mental Health Companion",
    authors: "Vu Anh Duy",
    venue: "AI Application Project",
    year: 2025,
    pdf: `${pdfBase}/Mental Mate.pdf`,
  },
];

function ResearchPage() {
  const { t } = useTranslation();
  const descriptions = t('research.publications', { returnObjects: true });

  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 bg-minimal text-default">
      <div className="max-w-6xl mx-auto">
        <div className="section-premium text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="hl-bar hl-pink">{t('research.title')}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mt-4 mx-auto">
            {t('research.subtitle')}
          </p>
        </div>

        <div className="section-premium row-list">
          {publications.filter(pub => pub.pdf).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)).map((pub, idx) => {
              const isFeatured = pub.featured;
              const accents = ['hl-pink','hl-yellow','hl-blue','hl-green'];
              const accent = isFeatured ? 'hl-yellow' : accents[idx % accents.length];
              return (
                <motion.div
                  key={pub.id}
                  className={`row-item ${isFeatured ? 'bg-[rgba(255,242,204,0.38)] ring-1 ring-[var(--line)] rounded-xl px-3' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                <div className="row-title text-xl">
                  <span className={`hl-bar ${accent}`}>{pub.title}</span>
                  <div className="row-tech">
                    {pub.authors} &middot; {pub.venue} ({pub.year})
                  </div>
                </div>
                <div className="row-desc leading-relaxed">
                  {Array.isArray(descriptions) && descriptions[pub.id - 1] ? descriptions[pub.id - 1] : pub.description}
                </div>
                <div className="flex items-start gap-3 justify-end">
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      className="link-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </a>
                  )}
                  {pub.github && (
                    <a
                      href={pub.github}
                      className="link-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      className="link-circle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('research.viewPaper')}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ResearchPage;
