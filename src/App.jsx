import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "./components/Countdown";
import Loading from "./components/Loading";
import BirthReveal from "./components/BirthReveal";
import CakeSwipe from "./components/CakeSwipe";
import Celebration from "./components/Celebration";
import CakeCutting from "./components/CakeCutting";
import BirthdayLetter from "./components/BirthdayLetter";
import Outro from "./components/Outro";

function App() {
  const [step, setStep] = useState(0);

  return (
    <AnimatePresence mode="wait">
      {step === 0 && (
        <motion.div
          key="countdown"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          <Countdown onComplete={() => setStep(1)} />
        </motion.div>
      )}

      {step === 1 && (
        <motion.div
          key="loading"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen"
        >
          <Loading onComplete={() => setStep(2)} />
        </motion.div>
      )}

      {step === 2 && <BirthReveal onNext={() => setStep(3)} />}

      {step === 3 && <CakeSwipe onComplete={() => setStep(4)} />}

      {step === 4 && <Celebration onNext={() => setStep(5)} />}

      {step === 5 && <CakeCutting onNext={() => setStep(6)} />}

      {step === 6 && <BirthdayLetter onNext={() => setStep(7)} />}

      {step === 7 && <Outro />}
    </AnimatePresence>
  );
}

export default App;
