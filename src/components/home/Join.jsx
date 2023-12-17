import Title from "../Title";
import Social from "./Social";
const Join = () => {
  return (
    <div className="w-10/12 md:w-2/3  lg:w-1/2 flex flex-col items-center gap-10 mb-20">
      <div className="absolute w-1/3 aspect-square bg-ewb-blue-100/40 rounded-full -translate-y-14" />
      <Title subTitle="GET INVOLVED" title="JOIN US" />
      <Social />
    </div>
  );
};

export default Join;
