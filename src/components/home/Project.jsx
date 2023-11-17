"use client";
import ArrowLink from "../ArrowLink.jsx";

const Project = ({ name, description, link, index }) => {
  return (
    <div className="bg-ewb-blue-100 w-full h-full md:last:translate-x-1/2 flex flex-col justify-between p-4 items-center">
      <div className="text-ewb-blue-200 text-lg md:text-2xl font-bold underline underline-offset-8 decoration-ewb-green text-center">
        {name}
      </div>
      <div className="py-6 px-4 text-center text-xs md:text-base">
        {description}
      </div>
      <ArrowLink text="learn more" link={link} />
    </div>
  );
};

export default Project;
