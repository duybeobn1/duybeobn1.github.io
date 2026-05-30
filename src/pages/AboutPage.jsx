import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 bg-minimal text-default">
      <div className="max-w-4xl mx-auto">
        <div className="section-premium text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="hl-bar hl-yellow">{t('about.title')}</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="section-premium grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {t('about.greeting')}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('about.description2')}
            </p>
            
          </motion.div>

          {/* Right column: Skills first, then Unique panel (both flow) */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <motion.div whileHover={{ x: 4 }} className="accent-row accent-blue">
              <h3 className="text-xl font-semibold mb-4"><span className="hl-bar hl-blue">{t('about.skills')}</span></h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    {t('about.frontend')}
                  </span>
                  <p className="text-gray-600">
                    React, Angular, JavaScript, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    {t('about.backend')}
                  </span>
                  <p className="text-gray-600">
                    Spring Boot, Node.js, Python, FastAPI
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">{t('about.tools')}</span>
                  <p className="text-gray-600">Git, Docker, PostgreSQL, AWS</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">
                    {t('about.aiData')}
                  </span>
                  <p className="text-gray-600">
                    Scikit-learn, NumPy, Pandas, TensorFlow, Vision Transformers
                    (ViT)
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Full-width Beyond Code as a grid span */}
        <motion.div
          className="md:col-span-2 mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div whileHover={{ x: 4 }} className="accent-row accent-yellow text-center">
            <div className="px-4 sm:px-8 lg:px-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t('about.beyondCode')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('about.personalInterests')}
              </p>
              <Link 
                to="/passions"
                className="link-circle inline-flex items-center font-medium transition-colors duration-200"
              >
                {t('about.discoverMore')}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
