import Title from "../../components/Title";
import Picture from "@/components/Picture";
import img1 from "../../../public/images/About.webp";

const About = () => {
  return (
    <div className="w-10/12 md:w-1/2 flex flex-col items-center gap-10">
      <div className="absolute w-1/3 aspect-square bg-ewb-blue-100/40 rounded-full -translate-y-14" />
      <Title subTitle="LEARN WHO WE ARE" title="ABOUT US" />
      <div className="relative text-center w-full">
        Engineers Without Borders is a non-profit humanitarian organization
        established to partner with developing communities worldwide in order to
        improve their quality of life. This partnership involves the
        implementation of sustainable engineering projects, while involving and
        training internationally responsible engineers and engineering students.
      </div>
      <Picture picture={img1.src} />
    </div>
  );
};

export default About;
