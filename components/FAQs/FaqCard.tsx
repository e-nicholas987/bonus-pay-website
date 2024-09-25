"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface FAQ {
  question: string;
  answer: ReactNode;
}

export default function FaqCard({ question, answer }: FAQ) {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <div className="mx-auto w-full max-w-[34.75rem]">
      <button
        className="flex w-full max-w-[34.75rem] items-center justify-between rounded-[0.875rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)0%,rgba(171,171,171,0.06)100%)] p-5 font-light tracking-[-0.011rem] text-[#EBEBEB]"
        type="button"
        onClick={() => setIsToggled(!isToggled)}
      >
        <span className="text-left">{question}</span>
        <AnimatePresence mode="wait">
          {isToggled ? (
            <motion.span
              key="minus-icon"
              className="inline-block shrink-0 text-[#8F8F8F]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiMinus />
            </motion.span>
          ) : (
            <motion.span
              key="plus-icon"
              className="inline-block shrink-0 text-[#8F8F8F]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiPlus />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <div className="py-2.5">
        <AnimatePresence>
          {isToggled && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                opacity: { duration: 0.2 },
                height: { duration: 0.3 },
              }}
              className="text-grey2 px-2.5 tracking-[-0.011rem]"
            >
              {answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
