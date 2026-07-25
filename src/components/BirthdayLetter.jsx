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
      py-8
      "
    >
      <div className="w-full max-w-md">
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
          px-5
          sm:px-6
          py-6
          shadow-xl
          "
        >
          {/* Title */}

          <h1
            className="
            text-2xl
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
            mt-5
            font-letter
            text-[16px]
            sm:text-[18px]
            leading-8
            text-[#332D35]
            text-left
            "
          >
            <p>
              <strong>My Dearest Mahdia,</strong>
            </p>

            <p className="mt-4">
              Today is your birthday, and I honestly couldn't ask for a better
              day to tell you how much you mean to me. 🥹
            </p>

            <p className="mt-4">
              It's been almost <strong>10 years</strong> since I fell in love
              with you, and almost <strong>7 years</strong> since I confessed my
              feelings to you. From that day until today, one thing has never
              changed, <strong>my love for you.</strong> In fact, with every
              passing day, it has only grown deeper and stronger. 💞
            </p>

            <p className="mt-4">
              My biggest wish now is that <strong>Allah</strong> brings us
              together as soon as possible. 🤲 I want this long-distance chapter
              to end so we can finally begin a beautiful new phase of our lives
              together.
            </p>

            <p className="mt-4">
              Right now, we share our love through calls and chats, but I dream
              of the day when we don't need a screen between us anymore. I can't
              wait to sit beside you, hold your hand, make you smile, and create
              countless beautiful memories together. 🥰
            </p>

            <p className="mt-4">
              Just like your birthday is one of the most special days of my
              life, I pray that another beautiful date is added to our story
              forever, our <strong>Wedding Anniversary.</strong> 💍
            </p>

            <p className="mt-4">
              On your special day, I pray that Allah blesses you with endless
              happiness, good health, success, peace, and everything your heart
              truly desires. Ameen. ✨
            </p>

            <p className="mt-5 font-semibold">
              Happy Birthday once again, my love. 🎂❤️
            </p>

            <p className="mt-8 text-right font-semibold">
              <strong>Forever Yours,</strong>
              <br />
              Abdulrehman.
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
          mt-6
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
          Finish Surprise
          <Heart size={20} />
        </motion.button>
      </div>
    </section>
  );
}

export default BirthdayLetter;
