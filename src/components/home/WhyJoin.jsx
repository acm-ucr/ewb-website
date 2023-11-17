import Title from "../Title";
import { FOCUS } from "@/data/focus";
import Focus from "./Focus";
import Picture from "../Picture";
const WhyJoin = () => {
  return (
    <div className="py-16 w-11/12 flex flex-col items-center">
      <div className="absolute w-1/3 aspect-square bg-ewb-blue-100/40 rounded-full -translate-y-14" />
      <Title
        className="z-10"
        subTitle="GET INVOLVED AND MAKE AN IMPACT!"
        title="WHY JOIN EWB"
      />
      <div className="relative text-center pt-12 w-1/2">
        Engineers Without Borders at UCR currently hosts several projects,
        professional development events, and club activities for members to
        actively participate in. We highly encourage all students to broaden
        their learning experience by participating in our organization
        activities. We hope that through these activities, students will grow as
        skilled professionals and leaders.
      </div>
      <div className="grid grid-cols-2 gap-4 my-12 w-2/4">
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
      <Picture picture="/images/CostaRica/CostaRica1.gif" />
    </div>
  );
};

export default WhyJoin;
