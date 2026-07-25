import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function CakeCutting({ onNext }) {
  return (
    <section
      className="
      min-h-screen
      bg-background
      flex
      items-center
      justify-center
      px-5
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
          Cake Cutting Moments 🎂🎥
        </motion.h1>

        {/* Video Card */}

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
            duration: 0.7,
            delay: 0.2,
          }}
          className="
          mt-8
          mx-auto
          w-full
          max-w-[260px]
          bg-[#FFE2E2]
          border-4
          border-[#C5B3D3]
          rounded-3xl
          p-3
          shadow-xl
          "
        >
          <video
            controls
            playsInline
            preload="metadata"
            className="
            w-full
            h-[460px]
            rounded-2xl
            object-contain
            bg-black
            "
          >
            <source src="/foryou.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
          Read My Letter
          <Mail size={20} />
        </motion.button>
      </div>
    </section>
  );
}

export default CakeCutting;
