"use client";
import { COLORS } from "@/data/colors";
import { motion } from "framer-motion";
const getTimeString = (date) => {
  const dateArr = date.toLocaleTimeString().split(":");
  return `${dateArr[0]}:${dateArr[1]}${dateArr[2].split(" ")[1]}`;
};
const Event = ({ start, location, name, descripton, color }) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.2,
      }}
      className="relative bg-ewb-blue-100 flex flex-col md:flex-row w-full font-bold"
    >
      <div
        className={`text-base md:text-4xl text-center w-full md:w-1/3 lg:w-1/4 md:aspect-square hidden md:flex flex-col items-center justify-center py-2 ${COLORS[color].bg}`}
      >
        <div>{start.toString().split(" ")[1]}</div>
        <div>{start.getDate()}</div>
        <div className="font-normal text-sm md:text-lg">
          {getTimeString(start)}
        </div>
      </div>
      <div className="block md:hidden w-full h-2 bg-ewb-green" />
      <div className="p-3 w-5/6 text-ewb-black ">
        <div className={`text-lg md:text-2xl ${COLORS[color].text}`}>
          {name}
        </div>
        <div className="md:hidden text-base flex items-center justify-start py-2 gap-2">
          <div>{start.toString().split(" ")[1]}</div>
          <div>{start.getDate()}</div>
          <div className="font-normal text-sm md:text-lg">
            {getTimeString(start)}
          </div>
        </div>
        <div className="text-xs md:text-base">{location}</div>
        <div className="text-sm md:text-base font-normal">{descripton}</div>
      </div>
    </motion.div>
  );
};

export default Event;
