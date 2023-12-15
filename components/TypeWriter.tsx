"use client"
import { useState } from "react";
import { Variants, motion } from "framer-motion";
import RedoAnimText from "./Testtyping";

console.log("Hello There!")

const cursorVariants: Variants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};
const TypeWriter = ({ Texts }: { Texts: string[] }) => {
  const [currentText, setCurrentText] = useState(Texts[0]);
  return (
    <>
      <h1
        style={{
          fontFamily: "monospace",
          overflow: "hidden",
        }}
        
      >
        <div className="w-full text-lg">

        <RedoAnimText />
        <motion.span variants={cursorVariants} animate="blinking">_</motion.span>
        </div>
      </h1>
    </>
  );
};

export default TypeWriter;
