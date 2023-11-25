import landing from "../../../public/images/landing.webp";

const Landing = () => {
  return (
    <div className="relative flex items-center justify-center w-full">
      <img
        src={landing.src}
        alt="landing img"
        className="w-full object-cover aspect-[16/9] md:aspect-[16/5] "
      />
      <div className="left-[5%] md:left-[10%] absolute border-l-4 border-ewb-green pl-2">
        <div className="text-2xl md:text-4xl text-white">
          Engineers Without Borders USA
        </div>
        <div className="text-lg md:text-2xl font-thin text-white">
          at University of California - Riverside
        </div>
      </div>
    </div>
  );
};

export default Landing;
