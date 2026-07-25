import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function CakeSwipe({ onComplete }) {
  const [dragX, setDragX] = useState(0);
  const [success, setSuccess] = useState(false);

  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  const handlePointerDown = (e) => {
    isDragging.current = true;

    startX.current = e.clientX;
    currentX.current = 0;

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const distance = e.clientX - startX.current;

    if (distance > 0) {
      const move = Math.min(distance, 210);

      currentX.current = move;
      setDragX(move);
    }
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;

    isDragging.current = false;

    if (currentX.current > 100) {
      setDragX(210);
      setSuccess(true);

      setTimeout(() => {
        onComplete();
      }, 400);
    } else {
      setDragX(0);
      currentX.current = 0;
    }
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
      select-none
      "
    >
      <div className="w-full max-w-sm mx-auto text-center">
        {/* Heading */}

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
            duration: 0.8,
          }}
          className="
          text-xl
          sm:text-2xl
          font-heading
          font-semibold
          leading-tight
          text-[#332D35]
          "
        >
          Make a wish, <span className="text-[#EC4899]">Manuuu...</span> it's
          time to cut your special cake 🎂❤️
        </motion.h1>

        {/* Cake Video */}

        <motion.video
          src="/cake.mp4"
          autoPlay
          loop
          muted
          playsInline
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
          className="
          mt-8
          w-56
          h-56
          mx-auto
          object-cover
          mix-blend-multiply
          "
        />

        {/* Swipe Bar */}

        <AnimatePresence>
          {!success && (
            <motion.div
              initial={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
            relative
            mt-8
            h-11
            w-64
            mx-auto
            rounded-full
            bg-[#FFE2E2]
            border
            border-[#F5CBCB]
            overflow-hidden
            flex
            items-center
            "
            >
              {/* Text */}

              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="
              absolute
              w-full
              text-center
              text-[10px]
              font-bold
              tracking-wide
              text-[#332D35]
              "
              >
                SWIPE TO CUT CAKE
              </motion.span>

              {/* Cake Button */}

              <motion.div
                animate={{
                  x: dragX,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={{
                  touchAction: "none",
                  zIndex: 20,
                }}
                className="
              ml-1
              h-9
              w-9
              rounded-full
              bg-[#C5B3D3]
              flex
              items-center
              justify-center
              text-xs
              cursor-grab
              active:cursor-grabbing
              shadow-md
              select-none
              "
              >
                🎂
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default CakeSwipe;
