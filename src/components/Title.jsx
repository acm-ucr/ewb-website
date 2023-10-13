import React from "react";
import { COLORS } from "../data/colors";
const Title = ({ subTitle = "LEARN WHO WE ARE", title = "ABOUT US" }) => {
  const titleWords = title.split(" ");
  return (
    <div>
      <p
        className={
          COLORS.green.text + " font-semibold mb-0 flex justify-center"
        }
      >
        {subTitle}
      </p>
      <h2 className={" mt-0 font-bold"}>
        <span
          className={
            COLORS.blue.bg +
            " text-white underline underline-offset-[14px] decoration-[#80C393] decoration-8"
          }
        >
          {titleWords[0]}
        </span>
        <span className={COLORS.blue.text}>
          {" " + titleWords.slice(1).join(" ")}
        </span>
      </h2>
    </div>
  );
};

export default Title;
