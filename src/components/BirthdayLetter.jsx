import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function BirthdayLetter({ onNext }) {
  return (
    <section
      className="
      min-h-screen
      bg-background
      flex
      items-center
      justify-center
      px-4
      py-5
      "
    >
      <div className="w-full max-w-sm">
        {/* Letter Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          bg-[#FFE2E2]
          border-4
          border-[#C5B3D3]
          rounded-[1.7rem]
          px-4
          py-4
          shadow-xl
          "
        >
          {/* Title */}

          <h1
            className="
            text-xl
            sm:text-3xl
            text-center
            font-heading
            font-bold
            text-[#332D35]
            "
          >
            A Special Note For You...
          </h1>

          {/* Message */}

          <div
            className="
            mt-4
            font-letter
            text-[19px]
            sm:text-[22px]
            leading-relaxed
            text-[#332D35]
            "
          >
            <p>My dear Mahdia,</p>

            <p className="mt-3">
              Today is a very special day because the sweetest girl was born on
              this day.
            </p>

            <p className="mt-3">
              I hope your life is always filled with happiness, smiles, success
              and endless beautiful moments.
            </p>

            <p className="mt-3">
              Keep smiling always and keep shining like you do. ❤️
            </p>

            <p className="mt-3 text-right">Happy Birthday once again ❤️</p>
          </div>
        </motion.div>

        {/* Button */}

        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          onClick={onNext}
          className="
          mt-5
          bg-[#C5B3D3]
          text-[#332D35]
          px-7
          py-2.5
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
          Finish Surprise
          <Heart size={18} />
        </motion.button>
      </div>
    </section>
  );
}

export default BirthdayLetter;
