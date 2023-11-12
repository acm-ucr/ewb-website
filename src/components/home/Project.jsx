"use client";
import ArrowLink from "../ArrowLink.jsx";
import { motion } from "framer-motion";
const transition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};
const Project = ({ name, description, link, index }) => {
  return (
    <motion.div
      transition={{ ...transition, delay: ((index % 2) + 1) * 0.2 }}
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="bg-ewb-blue-100 w-full h-full md:last:translate-x-1/2 flex flex-col justify-between p-4 items-center"
    >
      <div className="text-ewb-blue-200 text-lg md:text-2xl font-bold underline underline-offset-8 decoration-ewb-green text-center">
        {name}
      </div>
      <div className="py-6 px-4 text-center text-xs md:text-base">
        {description}
      </div>
      <ArrowLink text="learn more" link={link} />
    </motion.div>
  );
};

export default Project;
