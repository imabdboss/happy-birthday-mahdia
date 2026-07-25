import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function BirthdayLetter({ onNext }) {
  return (
    <section
      className="
      min-h-screen
      bg-[#FBEFEF]
      flex
      items-center
      justify-center
      px-4
      py-6
      "
    >
      <div className="w-full max-w-[340px] mx-auto">
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
          rounded-[2rem]
          px-4
          py-5
          shadow-xl
          "
        >
          {/* Title */}

          <h1
            className="
            text-[22px]
            sm:text-3xl
            text-center
            font-heading
            font-bold
            text-[#332D35]
            "
          >
            A Special Note For You... 💌
          </h1>

          {/* Message */}

          <div
            className="
            mt-4
            font-letter
            text-base
            sm:text-[17px]
            leading-7
            text-[#332D35]
            text-left
            "
          >
            <p>
              <strong>My Dearest Mahdia,</strong>
            </p>

            <p className="mt-2.5">
              Today is your birthday, and I honestly couldn't ask for a better
              day to tell you how much you mean to me. 🥹
            </p>

            <p className="mt-2.5">
              It's been almost <strong>10 years</strong> since I fell in love
              with you, and almost <strong>7 years</strong> since I confessed my
              feelings to you. From that day until today, one thing has never
              changed <strong>my love for you.</strong> With every passing day,
              it has only grown deeper and stronger. 💞
            </p>

            <p className="mt-2.5">
              My biggest wish now is that Allah brings us together as soon as
              possible. 🤲 I want this long-distance chapter to end so we can
              finally begin a beautiful new phase of our lives together.
            </p>

            <p className="mt-2.5">
              Right now, we share our love through calls and chats, but I dream
              of the day when we won't need a screen between us anymore. I can't
              wait to hold your hand, make you smile, and create beautiful
              memories together. 🥰
            </p>

            <p className="mt-2.5">
              Just like your birthday is one of the most special days of my
              life, I pray that one more beautiful date is added to our story
              forever our <strong>Wedding Anniversary.</strong> 💍
            </p>

            <p className="mt-2.5">
              On your special day, I pray that Allah blesses you with happiness,
              good health, success, peace, and everything your heart truly
              desires. Ameen. ✨
            </p>

            <p className="mt-3 font-semibold">
              Happy Birthday once again, my love. 🎂❤️
            </p>

            <p className="mt-5 text-right">
              <strong>Forever Yours,</strong>
              <br />
              Abdulrehman
            </p>
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
          justify-center
          gap-2
          mx-auto
          shadow-md
          hover:shadow-lg
          transition-all
          "
        >
          One Last Surprise
          <Heart size={20} />
        </motion.button>
      </div>
    </section>
  );
}

export default BirthdayLetter;
