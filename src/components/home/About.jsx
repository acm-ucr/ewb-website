import Title from "../../components/Title";
import Picture from "@/components/Picture";
import img1 from "../../../public/images/whyJoin.webp";

const About = () => {
  return (
    <div className="pt-12 flex flex-col items-center w-10/12">
      <Title subTitle="LEARN WHO WE ARE" title="ABOUT US" />
      <div className="text-center py-12 w-10/12 md:w-1/2">
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
