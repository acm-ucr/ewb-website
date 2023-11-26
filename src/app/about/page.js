import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import logo from "../../../public/assets/fullLogo.webp";
import img1 from "../../../public/images/AboutPic1.webp";
import img2 from "../../../public/images/AboutPic2.webp";

const page = () => {
  return (
    <div className="py-20 w-10/12 md:w-2/3  lg:w-1/2 flex flex-col items-center gap-3">
      <Title subTitle="LEARN WHO WE ARE" title="ABOUT US" />
      <img
        className="w-full"
        src={logo.src}
        alt="Engineers Without Borders Logo"
      />
      <div className="text-justify">
        Founded in 2007, the University of California, Riverside Chapter of
        Engineers Without Borders is part of the Inland Empire Chapter (EWB-IE,
        along with Cal Poly Pomona and the Inland Empire professional chapter).
        We are dedicated to serving the UCR campus, the City of Riverside, and
        any community across the world that needs our technical expertise.
      </div>
      <img
        className="my-2 w-full"
        src={img1.src}
        alt="Community of Riverside"
      />
      <Subtitle title="OVERVIEW" beginning={true} />
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
      <img className="my-2 w-full" src={img2.src} />
    </div>
  );
};

export default page;
