import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useRef, useState } from "react";
import RecipeModal from "../components/RecipeModal";

const PassionsPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("cooking");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);

  const openRecipeModal = (recipeKey) => {
    setSelectedRecipe(recipeKey);
    setIsRecipeModalOpen(true);
  };

  const closeRecipeModal = () => {
    setIsRecipeModalOpen(false);
    setSelectedRecipe(null);
  };

  // Placeholder data - you can replace these with your actual images and content
  const loadCookingImages = () => {
    let modules = {};
    try {
      modules = {
        ...import.meta.glob('/src/**/images/cooking/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', { eager: true, as: 'url' }),
        ...import.meta.glob('/src/**/assets/cooking/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', { eager: true, as: 'url' }),
        ...import.meta.glob('/src/**/cooking/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP,GIF}', { eager: true, as: 'url' }),
      };
    } catch (e) {
      // ignore – will fallback to public paths
    }
    const urls = Object.values(modules || {});
    if (urls.length > 0) {
      return urls.map((src, idx) => ({ id: idx + 1, src, alt: 'Signature dish', title: `Dish ${idx + 1}` }));
    }
    // Fallback to public folder images
    const candidates = [
      '/images/cooking/trout_potato_beetsalad.jpeg',
      '/images/cooking/IMG_0533.JPG',
      '/images/cooking/IMG_0553.JPG',
      '/images/cooking/IMG_0562.JPG',
      '/images/cooking/IMG_0565.JPG',
      '/images/cooking/IMG_0569.JPG',
      '/images/cooking/IMG_1130.JPG',
      '/images/cooking/IMG_1138.JPG',
    ];
    return candidates.map((src, idx) => ({ id: idx + 1, src, alt: 'Signature dish', title: `Dish ${idx + 1}` }));
  };

  const cookingImages = useMemo(() => {
    const arr = loadCookingImages();
    // Shuffle once per mount for a more organic order
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  // Lion Dance media now uses YouTube embeds instead of local images
  const lionDanceMedia = [
    {
      id: 1,
      type: "youtube",
      youtubeId: "vyjFoTYKk50",
      start: 149,
      title: "Lion Dance World Championship 2023 - Malaysia"
    },
    {
      id: 2,
      type: "youtube",
      youtubeId: "fxaqCjmoxvM",
      start: 264,
      title: "Cultural Competition - Hong Kong 2024"
    }
  ];

  const musicContent = [
    {
      id: 1,
      instrument: "Piano",
      description: "Classical and contemporary pieces, with a focus on Vietnamese folk adaptations",
      experience: "8+ years"
    },
    {
      id: 2,
      instrument: "Traditional Vietnamese Instruments",
      description: "Dan bau (monochord) and dan tranh (zither) for cultural performances",
      experience: "5+ years"
    }
  ];

  const tabs = [
    { id: "cooking", name: t("passions.tabs.cooking") },
    { id: "liondance", name: t("passions.tabs.lionDance") },
    { id: "music", name: t("passions.tabs.music") }
  ];

  const renderCookingSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Culinary Philosophy - Marco Pierre White quotes (no icons) */}
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-pink">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          <span className="hl-bar hl-pink">Culinary Philosophy</span>
        </h3>
        <div className="space-y-4 text-gray-700">
          <blockquote className="italic leading-relaxed">“If you want to be a great chef, you have to work with great chefs.” - Marco Pierre White</blockquote>
          <blockquote className="italic leading-relaxed">“Mother Nature is the true artist; her simple produce, handled with respect, is perfection.” - Marco Pierre White</blockquote>
          <blockquote className="italic leading-relaxed">“Success is born out of arrogance, but arrogance is born out of success.” - Marco Pierre White</blockquote>
        </div>
      </motion.div>

      {/* Professional Experience */}
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-yellow">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {t("passions.cooking.experience.title")}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900">
                {t("passions.cooking.experience.consultant")}
              </h4>
              <p className="text-gray-600">
                A Bản Mountain Dew (Michelin Guide) & Dana Vegan House
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                {t("passions.cooking.experience.chef")}
              </h4>
              <p className="text-gray-600">
                Le Grand Réfectoire - Chef de partie (entrées et tapas)
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("passions.cooking.experience.education")}
            </h4>
            <p className="text-gray-600">
              Le Cordon Bleu · Hong Kong University - Science of Gastronomy · Institut Paul Bocuse
            </p>
          </div>
        </div>
      </motion.div>

      {/* Cooking Gallery - image-focused mosaic (no recipe overlays) */}
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-blue">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {t("passions.cooking.gallery.title")}
        </h3>
        {/* Masonry layout using CSS columns to remove gaps */}
        <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-3 gap-4 [column-fill:_balance]">
          {cookingImages.map((image, idx) => {
            const frames = ["collage-a", "collage-b", "collage-c", "collage-d", "collage-e", "collage-f"];
            const tapes = ["tape-yellow", "tape-blue", "tape-pink", "tape-green"];
            // Strong bias toward wider views: 3:2 and 16:9, with occasional 2:1 and 21:9
            const ratios = ["ar-3x2", "ar-16x9", "ar-3x2", "ar-2x1", "ar-3x2", "ar-16x9", "ar-21x9"]; 
            const frameClass = frames[idx % frames.length];
            const tapeClass = tapes[idx % tapes.length];
            const ratioClass = ratios[idx % ratios.length];
            return (
              <figure key={image.id} className={`mb-4 break-inside-avoid collage-card ${frameClass} ${tapeClass} group`}>
                <div className={`ratio-box ${ratioClass}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-[10px] transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x600/ddd/222?text=${encodeURIComponent(image.title)}`;
                    }}
                  />
                </div>
              </figure>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );

  const renderLionDanceSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Lion Dance Introduction */}
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-yellow">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="hl-bar hl-yellow">{t("passions.lionDance.intro.title")}</span>
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          {t("passions.lionDance.intro.definition")}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {t("passions.lionDance.intro.personal")}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("passions.lionDance.skills")}
            </h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Traditional Lion Head Movement</li>
              <li>• Acrobatic Choreography</li>
              <li>• Cultural Performance Direction</li>
              <li>• Team Coordination & Leadership</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              {t("passions.lionDance.performances")}
            </h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Chinese New Year Celebrations</li>
              <li>• Cultural Festivals</li>
              <li>• Community Events</li>
              <li>• Corporate Celebrations</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Performance Gallery */}
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-blue">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {t("passions.lionDance.gallery.title")}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {lionDanceMedia.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-3">
                <div className="ratio-box ar-16x9">
                  {item.type === "youtube" ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtubeId}?start=${item.start || 0}&rel=0&modestbranding=1`}
                      title={item.title}
                      className="w-full h-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : null}
                </div>
              </div>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  // SoundCloud widget integration
  const scIframeRef = useRef(null);
  const [musicTracks, setMusicTracks] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);
  useEffect(() => {
    const init = () => {
      try {
        if (!scIframeRef.current || !window.SC || !window.SC.Widget) return;
        const widget = window.SC.Widget(scIframeRef.current);
        widget.getSounds && widget.getSounds((sounds) => setMusicTracks(Array.isArray(sounds) ? sounds : []));
      } catch (e) {
        // silent
      }
    };
    if (!window.SC || !window.SC.Widget) {
      const s = document.createElement('script');
      s.src = 'https://w.soundcloud.com/player/api.js';
      s.async = true;
      s.onload = init;
      document.body.appendChild(s);
    } else {
      init();
    }
  }, []);

  const renderMusicSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <motion.div whileHover={{ y: -6 }} className="bg-minimal rounded-xl p-8 border border-line card-hover card-hover-blue">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          {t("passions.music.intro.title")}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          I'm a pianist / guitarist focusing on jazz and blues improvisation. I stopped playing actively, but my works are still there - always.
        </p>
        <p className="text-gray-600">
          Listen on SoundCloud:
          <a href="https://soundcloud.com/13092017" target="_blank" rel="noreferrer" className="ml-2 link-circle">soundcloud.com/13092017</a>
        </p>
        <div className="mt-6">
          <div className="w-full overflow-hidden rounded-lg border border-line">
            <iframe
              ref={scIframeRef}
              title="SoundCloud Player"
              className="w-full h-[420px] sm:h-[520px] md:h-[640px]"
              loading="lazy"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/13092017&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </div>
          {/* Larger, clean track titles fetched via Widget API (fallbacks to empty when unavailable) */}
          {musicTracks && musicTracks.length > 0 && (
            <div className="mt-4 space-y-2">
              {musicTracks.slice(0, visibleCount).map((trk) => (
                <a
                  key={trk.id}
                  href={trk.permalink_url}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg sm:text-xl font-semibold text-gray-900 hover:underline"
                >
                  {trk.title}
                </a>
              ))}
            </div>
          )}
          {musicTracks && musicTracks.length > visibleCount && (
            <div className="mt-3">
              <button
                onClick={() => setVisibleCount((c) => c + 20)}
                className="btn-pill"
              >
                Show more songs
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  const renderActiveSection = () => {
    switch (activeTab) {
      case "cooking":
        return renderCookingSection();
      case "liondance":
        return renderLionDanceSection();
      case "music":
        return renderMusicSection();
      default:
        return renderCookingSection();
    }
  };

  return (
    <main className="relative bg-minimal text-default min-h-screen overflow-x-hidden">
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="hl-bar hl-yellow">{t("passions.title")}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("passions.subtitle")}
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12 border-t border-b border-line py-4"
          >
          {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 border border-line click-press ${
                  activeTab === tab.id
                    ? "bg-[var(--yellow)]"
                    : "bg-minimal hover:bg-[rgba(218,227,243,0.3)]"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </motion.div>

          {/* Active Section Content */}
          <div className="min-h-[600px]">
            {renderActiveSection()}
          </div>
        </div>
      </section>
      
      {/* Recipe Modal */}
      <RecipeModal 
        isOpen={isRecipeModalOpen}
        onClose={closeRecipeModal}
        recipe={selectedRecipe}
      />
    </main>
  );
};

export default PassionsPage;
