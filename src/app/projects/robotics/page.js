import Robotics from "@/components/projects/Robotics";
import header from "../../../../public/images/robotics/RoboticsHeader.webp";
import Header from "@/components/projects/Header";

const page = () => {
  return (
    <>
      <Header img={header.src} title="Robotics" />
      <Robotics />
    </>
  );
};

export default page;
