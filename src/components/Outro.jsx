import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

function Outro() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const particles = Array.from({ length: 18 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 3,
    }));

    setHearts(particles);

    // ❤️ DDLJ Music
    const audio = new Audio("/ddlj.mp3");
    audio.volume = 0.2;
    audio.loop = true;

    audio.play().catch(() => {});

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleReplay = () => {
    window.location.reload();
  };

  return (
    <section
      className="
      min-h-screen
      w-full
      bg-[#FBEFEF]
      flex
      items-center
      justify-center
      px-5
      overflow-hidden
      relative
      "
    >
      {/* Watch Again Button */}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        onClick={handleReplay}
        className="
        absolute
        top-4
        right-4
        z-30
        flex
        items-center
        gap-1.5
        bg-[#FFE2E2]
        border-2
        border-[#C5B3D3]
        rounded-full
        px-3
        py-1.5
        shadow-md
        text-[#332D35]
        text-sm
        font-body
        font-medium
        hover:bg-[#F9D6E3]
        transition-all
        "
      >
        <RotateCcw size={16} strokeWidth={2.5} />
        Watch Again
      </motion.button>

      {/* Floating Hearts */}

      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "100vh",
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${heart.left}%`,
          }}
          className="
          absolute
          text-xl
          sm:text-2xl
          "
        >
          ❤️
        </motion.div>
      ))}

      {/* Content */}

      <div
        className="
        relative
        z-10
        text-center
        w-full
        max-w-md
        "
      >
        {/* Kiss Image Frame */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          w-72
          h-72
          mx-auto
          rounded-3xl
          overflow-hidden
          border-4
          border-[#C5B3D3]
          bg-[#FFE2E2]
          shadow-xl
          "
        >
          <img
            src="/kiss.jpeg"
            alt="kiss"
            className="
            w-full
            h-full
            object-cover
            "
          />
        </motion.div>

        {/* Love Text */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="
          mt-8
          text-3xl
          sm:text-4xl
          font-heading
          font-bold
          text-[#332D35]
          "
        >
          I LOVE YOU SO MUCH! 😘
        </motion.h2>
      </div>
    </section>
  );
}

export default Outro;
