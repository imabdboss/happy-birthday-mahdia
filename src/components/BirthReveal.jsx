import { motion } from "framer-motion";
import { Gift } from "lucide-react";

function BirthReveal({ onNext }) {
  return (
    <section
      className="
      min-h-screen
      w-full
      bg-[#FBEFEF]
      flex
      items-center
      justify-center
      px-6
      "
    >
      <div className="w-full max-w-sm mx-auto text-center">
        {/* Dance Video */}

        <motion.video
          autoPlay
          loop
          muted
          playsInline
          src="/dancing.mp4"
          className="
          mx-auto
          w-40
          sm:w-48
          rounded-2xl
          mix-blend-multiply
          "
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
          }}
        />

        {/* Title */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
          mt-6
          font-heading
          text-2xl
          sm:text-3xl
          leading-snug
          text-[#332D35]
          "
        >
          24 years ago on
          <br />
          <span className="text-primary font-semibold">26th July 2002</span>
          <br />
          the sweetest girl
          <br />
          <span className="text-pink-500 font-bold">Mahdia </span>
          was born! 🥳
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          className="
          mt-3
          text-base
          text-[#332D35]/70
          leading-relaxed
          "
        >
          Yes, it's YOU! 💖
          <br />A little surprise awaits...
        </motion.p>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={onNext}
          className="
          mt-7
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-primary
          px-6
          py-2.5
          text-sm
          sm:text-base
          font-semibold
          text-black
          shadow-md
          transition-all
          hover:shadow-lg
          "
        >
          <Gift size={18} />
          Start the Surprise 🎁
        </motion.button>
      </div>
    </section>
  );
}

export default BirthReveal;
