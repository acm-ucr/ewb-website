"use client";
import { COLORS } from "../data/colors";
import { motion } from "framer-motion";

const Title = ({ subTitle, title }) => {
  const titleWords = title.split(" ");
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.1,
      }}
      className="relative flex flex-col justify-center items-center z-20"
    >
      <p className={COLORS.green.text + " font-semibold mb-0"}>{subTitle}</p>
      <p className="mt-0 font-bold text-2xl md:text-4xl">
        <span
          className={
            COLORS.blue.bg +
            " text-white underline underline-offset-[14px] decoration-ewb-green decoration-8 px-1 mr-1"
          }
        >
          {titleWords[0]}
        </span>
        <span className={COLORS.blue.text}>
          {titleWords.slice(1).join(" ")}
        </span>
      </p>
    </motion.div>
  );
};

export default Title;
