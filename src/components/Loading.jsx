import { useEffect } from "react";
import { motion } from "framer-motion";

function Loading({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      {/* Background Glow */}
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-pink-200 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* SVG Heart */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-32 h-32 sm:w-40 sm:h-40"
          animate={{
            scale: [1, 1.08, 1],
            filter: [
              "drop-shadow(0 0 6px rgba(255,105,180,.35))",
              "drop-shadow(0 0 20px rgba(255,105,180,.7))",
              "drop-shadow(0 0 6px rgba(255,105,180,.35))",
            ],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <defs>
            <linearGradient
              id="heartGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff7eb3" />
              <stop offset="100%" stopColor="#ff4d6d" />
            </linearGradient>
          </defs>

          <path
            fill="url(#heartGradient)"
            d="M471.7 73.8c-54.5-46.4-136-38.3-186.4 13.7L256 117.3l-29.3-29.8C176.3 35.5 94.8 27.4 40.3 73.8-22.2 127-13.8 223.8 43 272.2l175.4 168.2c21.8 20.9 53.4 20.9 75.2 0L469 272.2c56.8-48.4 65.2-145.2 2.7-198.4z"
          />
        </motion.svg>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mt-8 font-heading text-2xl sm:text-3xl text-text text-center"
        >
          Loading your birthday surprise...
        </motion.h2>

        <p className="mt-3 text-[#332D35]/80 text-center">
          Preparing something special just for you...
        </p>

        {/* Loading Line */}
        <div className="mt-8 h-2 w-56 overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 4.2,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Loading;
