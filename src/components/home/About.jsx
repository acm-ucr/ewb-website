import React from "react";
import Title from "../Title";
import Subtitle from "../Subtitle";
const About = () => {
  return (
    <div className="p-56 mx-96 flex flex-col items-center">
      <div className="text-center">
        <Title subTitle="LEARN WHO WE ARE" title="ABOUT US"></Title>
      </div>

      <img
        className="my-4 flex justify-center mx-auto"
        src={"assets/fullLogo.webp"}
        alt="Engineers Without Borders Logo"
      />
      <div className="text-justify  col-span-3 items-center">
        Founded in 2007, the University of California, Riverside Chapter of
        Engineers Without Borders is part of the Inland Empire Chapter (EWB-IE,
        along with Cal Poly Pomona and the Inland Empire professional chapter).
        We are dedicated to serving the UCR campus, the City of Riverside, and
        any community across the world that needs our technical expertise.
      </div>
      <img
        className="my-4 flex justify-center"
        src={"images/AboutPic1.webp"}
        alt="Community of Riverside"
      />
      <div className="w-full text-left my-3">
        <Subtitle title="OVERVIEW"></Subtitle>
      </div>
      <div className="text-justify items-center">
        The student members in the Engineers Without Borders Student Chapter at
        the University of California, Riverside recognize that we are privileged
        to live in the U.S. where higher education and healthier living
        conditions are more accessible than in many other parts of the world.
        Students within our discipline are taught that their jobs will
        constantly require team effort and they will work with all disciplines.
        Our organization&apos;s name, leaders, and activities show that we do
        not focus on a specific engineering major but encourage all people
        regardless of gender identity, religion, and background.
      </div>
      <img
        className="my-24 flex justify-center "
        src={"images/AboutPic2.webp"}
      />
    </div>
  );
};

export default About;
