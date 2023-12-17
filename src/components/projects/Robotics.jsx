import Subtitle from "../Subtitle";
import img1 from "../../../public/images/robotics/Robotics1.gif";
const Robotics = () => {
  return (
    <div className="grid grid-cols-3 gap-10 my-16 justify-around w-10/12 md:w-9/12 text-base lg:text-lg">
      <div className="col-span-3 md:col-span-2 justify-center flex flex-col">
        <Subtitle title="General Overview" />
        <p className="mt-1 ml-4 text-justify">
          Our goal is to inspire a new generation of youth to peruse a STEM
          field by involving them in Robotics. Robotics acts as a platform where
          creativity and engineering meet. We are planning outreach programs to
          nearby preliminary schools. So, if you were ever interested in
          robotics, don&apos;t hesitate to join!
        </p>
      </div>
      <div className="col-span-3 md:col-span-1">
        <img src={img1.src} alt="Robotics 1 gif" />
      </div>

      <div className="col-span-3 justify-center flex flex-col">
        <Subtitle title="Motivation" />
        <ul
          className="marker:text-ewb-blue-200 ml-8 mt-2"
          style={{ listStyleType: "square" }}
        >
          <li className="mb-2">
            Anyone can join! Everything you will need to know will be taught by
            our Project Managers. Many of them are not even in the engineering
            field related to robotics.
          </li>
          <li className="mb-2">
            Many students in preliminary schools are not exposed to robotics.
            Whatever the reason might be, we want to show them that perusing a
            STEM field is possible.
          </li>
          <li className="mb-2">
            Gain knowledge of robotics engineering, something that can
            distinguish you from other resumes
          </li>
        </ul>
      </div>

      <div className="col-span-3 justify-center flex flex-col">
        <Subtitle title="Micro Controller" />
        <ul
          className="marker:text-ewb-blue-200 ml-8 mt-2"
          style={{ listStyleType: "square" }}
        >
          <li className="mb-2">
            By learning robotics, you are inherently learning how to work with a
            micro controller. A device that allows you to do so many things, as
            can be seen in the other pages of this website
          </li>
          <li className="mb-2">
            The use of a micro controller allows for a cheap and effective way
            to communicate with devices. It allows us to construct specialized
            systems
          </li>
          <li className="mb-2">
            Micro controllers allow for adaptations to be made to the system
            whenever needed. This provides flexibility that other systems do not
            have
          </li>
          <li className="mb-2">
            We can also create interfaces that make it easier for the user to
            interact with
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Robotics;
