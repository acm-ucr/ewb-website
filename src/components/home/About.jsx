import fullLogo from "../../public/assets/fullLogo.webp";
import AboutPic1 from "../../public/images/AboutPic1.webp";
import AboutPic2 from "../../public/images/AboutPic2.webp";
import Title from "../Title";
import Subtitle from "../Subtitle";
const About = () => {
  return (
    <div className="flex place-items-center ">
      <Title subTitle="LEARN WHO WE ARE" title="ABOUT US" />
      <img
        className="my-4 flex justify-center items-center"
        src={fullLogo.src}
        alt="Engineers Without Borders Logo"
      />
      <div className="text-center w-1/2">
        Founded in 2007, the University of California, Riverside Chapter of
        Engineers Without Borders is part of the Inland Empire Chapter (EWB-IE,
        along with Cal Poly Pomona and the Inland Empire professional chapter).
        We are dedicated to serving the UCR campus, the City of Riverside, and
        any community across the world that needs our technical expertise.
      </div>
      <img
        className="my-4 flex justify-center items-center"
        src={AboutPic1.src}
        alt="Community of Riverside"
      />
      <Subtitle title="OVERVIEW" />
      <div className="text-center w-1/2">
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
        className="my-24 flex justify-center items-center "
        src={AboutPic2.src}
      />
    </div>
  );
};
export default About;
