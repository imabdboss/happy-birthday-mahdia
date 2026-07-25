import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Countdown({ onComplete }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 1) {
      const timer = setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1500);

      return () => clearTimeout(timer);
    }

    if (count === 1) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  return (
    <motion.section
      className="min-h-screen bg-background flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={count}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.3, opacity: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-8xl sm:text-9xl font-bold text-text"
        >
          {count}
        </motion.h1>
      </AnimatePresence>
    </motion.section>
  );
}

export default Countdown;
