import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoadingPage = () => {
  const [progress, setProgress] = useState(12);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFinished(true);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 10) + 5;
        return next > 100 ? 100 : next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-minimal overflow-hidden">
      {/* Center content */}
      <div>
        {!finished ? (
          <motion.div
            className="text-5xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {progress}%
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.h2
              className="text-3xl font-extrabold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Vu Anh Duy
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                to="/home"
                className="btn-primary"
              >
                Visit Website
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Bottom-left loading text */}
      {!finished && (
        <div className="absolute bottom-4 left-4 text-[var(--txt-secondary)] font-medium text-sm">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
