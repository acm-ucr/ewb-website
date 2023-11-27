import Title from "@/components/Title";
import Picture from "@/components/Picture";
import Subtitle from "@/components/Subtitle";
import logo from "../../../public/assets/fullLogo.webp";
import img1 from "../../../public/images/AboutPic1.webp";
import img2 from "../../../public/images/AboutPic2.webp";

const page = () => {
  return (
    <div className="py-20 w-10/12 md:w-2/3  lg:w-1/2 flex flex-col items-center gap-3">
      <div className="absolute w-1/3 aspect-square bg-ewb-blue-100/40 rounded-full -translate-y-14" />
      <Title subTitle="LEARN WHO WE ARE" title="ABOUT US" />
      <img
        className="w-full relative"
        src={logo.src}
        alt="Engineers Without Borders Logo"
      />
      <div className="text-justify py-4">
        Founded in 2007, the University of California, Riverside Chapter of
        Engineers Without Borders is part of the Inland Empire Chapter (EWB-IE,
        along with Cal Poly Pomona and the Inland Empire professional chapter).
        We are dedicated to serving the UCR campus, the City of Riverside, and
        any community across the world that needs our technical expertise.
      </div>
      <Picture picture={img1.src} />
      <Subtitle title="OVERVIEW" beginning={true} />
      <div className="text-justify items-center py-4">
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
      <Picture picture={img2.src} />
    </div>
  );
};

export default page;
