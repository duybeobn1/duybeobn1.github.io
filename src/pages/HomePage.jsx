import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const sections = [
    { id: "intro", label: t("nav.home") || "Intro", color: "pink" },
    { id: "certs", label: t("home.certifications") || "Certifications", color: "yellow" },
    { id: "projects", label: t("home.featuredProjects") || "Projects", color: "blue" },
    { id: "research", label: t("nav.research") || "Research", color: "pink" },
    { id: "cta", label: t("home.ctaTitle") || "Contact", color: "green" },
  ];
  const [active, setActive] = useState("intro");
  // Choose CV file based on active language: fr => French, otherwise English
  const cvHref = i18n.language === 'fr' ? '/cv/CV_Francais_v2.pdf' : '/cv/CV_Eng_v2.pdf';

  useEffect(() => {
    const els = sections.map(s => document.getElementById(s.id)).filter(Boolean);
    const obs = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible && visible.target && visible.target.id) setActive(visible.target.id);
    }, { threshold: [0.5, 0.75] });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative bg-minimal text-default min-h-screen overflow-x-hidden">
      {/* Hero section */}
      <section id="intro" className="h-screen flex flex-col justify-center items-center px-4 text-center pt-16">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center border border-line bg-[var(--blue)]">
            <span className="text-white text-2xl font-bold">AV</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="hl-bar hl-yellow">Anh Vu</span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-600 mt-4 max-w-4xl leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("home.subtitle")}
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-500 mt-6 max-w-3xl leading-relaxed font-normal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {t("home.description")}
        </motion.p>

        <motion.div
          className="mt-12 flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <Link to="/projects" className="link-circle">
            {t("home.viewWork")}
          </Link>
          <Link to="/contact" className="link-circle">
            {t("home.getInTouch")}
          </Link>
          <a href={cvHref} download className="link-circle">
            {t("home.downloadCV")}
          </a>
        </motion.div>
      </section>
      <section id="certs" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("home.certifications")}
          </motion.h3>

          <div className="text-lg text-gray-800 space-y-6 leading-relaxed">
            <p>
              <strong>Microsoft Azure AI Fundamentals</strong> (2025):
              Generative AI, NLP, Computer Vision, Document Intelligence, AI
              Overview
            </p>
            <p>
              <strong>Google Cloud & Generative AI</strong> (2023): LLMs, Vertex
              AI, Image Captioning, Attention, Responsible AI
            </p>
            <p>
              <strong>Meta Front-End Developer Specialization</strong>: Advanced
              React, UX/UI, JS, Capstone
            </p>
            <p>
              <strong>Google IT Support Specialization</strong>:
              Troubleshooting, Git/GitHub, OS, Networking, Security
            </p>
            <p>
              <strong>IBM Machine Learning with Python</strong>
            </p>
            <p>
              <strong>The Science of Gastronomy</strong> — The Hong Kong
              University of Science and Technology (Grade: 92%)
            </p>
            <p>
              <strong>Google Data Analytics</strong> — In Progress
            </p>
            <p>
              <strong>IBM AI Engineering Professional Certificate</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("home.featuredProjects")}
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { key: "visionTransformer", tech: ["PyTorch", "Vision Transformers", "Image Processing"] },
              { key: "cookingAssistant", tech: ["FastAPI", "Neo4j", "Gemini AI"] },
              { key: "foodMining", tech: ["Python", "Data Mining", "Machine Learning"] },
              { key: "reinforcementLearning", tech: ["Python", "Deep Q-Networks", "Multi-Agent Systems"] },
            ].map((project, i) => (
              <motion.div
                key={project.key}
                className="p-6 border-t border-line"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <h4 className="text-xl font-semibold mb-2">
                  <span className={`hl-bar ${['hl-pink','hl-yellow','hl-blue','hl-green'][i % 4]}`}>
                    {t(`home.projects.${project.key}.title`)}
                  </span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {t(`home.projects.${project.key}.description`)}
                </p>
                <div className="row-tech">{project.tech.join(' · ')}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/projects" className="link-circle inline-flex items-center">
              {t("home.viewAllProjects")}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Research */}
      <section id="research" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("home.featuredResearch")}
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: "keigo", tech: ["Python", "LLM Evaluation", "NLP"] },
              { key: "ica", tech: ["FastAPI", "Neo4j", "Gemini AI"] },
              { key: "foodBank", tech: ["Python", "Data Mining", "Clustering"] },
            ].map((item, i) => (
              <motion.div
                key={item.key}
                className="p-6 border-t border-line"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <h4 className="text-xl font-semibold mb-2">
                  <span className={`hl-bar ${['hl-pink','hl-yellow','hl-blue'][i % 3]}`}>
                    {t(`home.research.${item.key}.title`)}
                  </span>
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {t(`home.research.${item.key}.description`)}
                </p>
                <div className="row-tech">{item.tech.join(' · ')}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/research" className="link-circle inline-flex items-center">
              {t("home.viewAllResearch")}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Contact CTA */}
      <section id="cta" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("home.ctaTitle")}
          </motion.h3>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("home.ctaDescription")}
          </motion.p>

          <motion.div
            className="flex gap-6 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="link-circle">
              {t("home.startConversation")}
            </Link>
            <Link to="/about" className="link-circle">
              {t("home.learnMore")}
            </Link>
            <Link to="/passions" className="link-circle">
              {t("home.explorePassions") || "Explore My Passions"}
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Side section nav */}
      <nav className="side-nav right-4" aria-label="Section navigation">
        {sections.map(s => (
          <button key={s.id} onClick={() => scrollTo(s.id)} className={`side-nav-item ${active === s.id ? 'active' : ''}`} title={s.label} aria-label={`Go to ${s.label}`}>
            <span className={`side-diamond ${s.color}`}></span>
          </button>
        ))}
      </nav>
    </main>
  );
};

export default HomePage;
