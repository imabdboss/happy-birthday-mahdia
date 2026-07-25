import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Video } from "lucide-react";

function Celebration({ onNext }) {
  useEffect(() => {
    // 🎵 Birthday Music
    const audio = new Audio("/birthday-song.mp3");
    audio.volume = 0.7;

    audio.play().catch(() => {});

    // 🎉 Full Screen Confetti

    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 8,
        spread: 100,
        startVelocity: 30,

        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    }, 200);

    return () => {
      clearInterval(interval);
      audio.pause();
    };
  }, []);

  return (
    <section
      className="
      min-h-screen
      bg-background
      flex
      items-center
      justify-center
      px-5
      overflow-hidden
      "
    >
      <div
        className="
        w-full
        max-w-md
        text-center
        "
      >
        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          text-[26px]
          sm:text-4xl
          font-heading
          font-bold
          text-text
          whitespace-nowrap
          "
        >
          Happy Birthday Mahdia! 🎉✨
        </motion.h1>

        {/* Photo Frame */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
          mt-8
          mx-auto
          w-64
          h-64
          bg-[#FFE2E2]
          border-4
          border-[#C5B3D3]
          rounded-[2rem]
          p-3
          shadow-xl
          "
        >
          <img
            src="/mahdia.jpeg"
            alt="Mahdia Birthday"
            className="
            w-full
            h-full
            object-cover
            rounded-3xl
            "
          />
        </motion.div>

        {/* Button */}

        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          onClick={onNext}
          className="
          mt-8
          bg-[#C5B3D3]
          text-[#332D35]
          px-8
          py-3
          rounded-full
          font-body
          font-bold
          flex
          items-center
          gap-2
          mx-auto
          shadow-md
          "
        >
          This Is For You
          <Video size={20} />
        </motion.button>
      </div>
    </section>
  );
}

export default Celebration;
