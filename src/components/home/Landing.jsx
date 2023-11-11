import React from "react";
const Landing = () => {
  return (
    <div className="relative flex items-center justify-center h-1/6 w-3/6">
      <img
        src={"images/landing.webp"}
        alt="landing img"
        className="w-full object-cover aspect-[32/9] "
      />
      <div className=" start-20 absolute flex-row ">
        <div className="text-2xl text-white">Engineers Without Borders USA</div>
        <div className="text-base text-white">
          at University of California - Riverside
        </div>
      </div>
    </div>
  );
};

export default Landing;
