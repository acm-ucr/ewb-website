import Title from "../Title";
import { FOCUS } from "@/data/focus";
import Focus from "./Focus";
import Picture from "../Picture";
import img1 from "../../../public/images/whyJoin.webp";
const WhyJoin = () => {
  return (
    <div className="w-10/12 md:w-2/3  lg:w-1/2 flex flex-col items-center gap-10">
      <div className="absolute w-1/3 aspect-square bg-ewb-blue-100/40 rounded-full -translate-y-14" />
      <Title subTitle="GET INVOLVED AND MAKE AN IMPACT" title="WHY JOIN EWB" />
      <div className="relative text-center w-full text-base lg:text-lg">
        Engineers Without Borders at UCR currently hosts several projects,
        professional development events, and club activities for members to
        actively participate in. We highly encourage all students to broaden
        their learning experience by participating in our organization
        activities. We hope that through these activities, students will grow as
        skilled professionals and leaders.
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        {FOCUS.map((focus, index) => (
          <Focus
            index={index}
            key={index}
            title={focus.title}
            description={focus.description}
            icon={focus.icon}
            link=""
          />
        ))}
      </div>
      <Picture picture={img1.src} />
    </div>
  );
};

export default WhyJoin;
