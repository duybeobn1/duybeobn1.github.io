// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LoadingPage from "./pages/LoadingPage";
import InkTrailCursor from "./components/Trail";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import NavBar from "./pages/NavBar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import PassionsPage from "./pages/PassionsPage";
import ContactPage from "./pages/ContactPage";
import ResearchPage from "./pages/ResearchPage";
import "./App.css";
function App() {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const location = useLocation();
  
  // Don't show navbar on loading page
  const showNavBar = location.pathname !== '/';

  useEffect(() => {
    const timer = setTimeout(() => setLoadingFinished(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 12, scale: 0.99 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.99 }
  };

  const pageTransition = {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1]
  };

  return (
    <div className="App bg-minimal min-h-screen text-default">
      <ScrollToTop />
      <InkTrailCursor />
      {showNavBar && <NavBar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <LoadingPage />
            </motion.div>
          } />
          <Route path="/home" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <HomePage />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <AboutPage />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <ProjectsPage />
            </motion.div>
          } />
          <Route path="/experience" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <ExperiencePage />
            </motion.div>
          } />
          <Route path="/passions" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <PassionsPage />
            </motion.div>
          } />
          <Route path="/research" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <ResearchPage />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              <ContactPage />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
      {showNavBar && <Footer />}
    </div>
  );
}

export default App;
