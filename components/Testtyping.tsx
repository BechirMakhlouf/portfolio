import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function RedoAnimText() {
  const textIndex = useMotionValue(0);
  const texts = [
    "I'm a full stack developer!",
    "I am the best candidate for this job.",
    "I use Arch, btw.",
    "One must imagine sisyphus happy. - Albert Camus",
    "Walking the tightrope balance of project management.",
    "I find myself compelled to express my interest due to...",
    "My pen (or should I say, keyboard) is at work today because.",
    "Inspired by the alluring challenge in the job posting, I am writing.",
    "Stirred to my keyboard by the tantalising nature of the role."
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 3,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 2,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
  }, []);

  return <motion.span className="inline indent-8">{displayText}</motion.span>;
}
