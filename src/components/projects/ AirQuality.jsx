import Subtitle from "../Subtitle";
import img1 from "../../../public/images/airQualitySystem/AirQualitySystem1.webp";
import img2 from "../../../public/images/airQualitySystem/AirQualitySystem2.webp";
import img3 from "../../../public/images/airQualitySystem/AirQualitySystem3.gif";

const AirQuality = () => {
  return (
    <div className="grid grid-cols-3 gap-10 my-16 justify-around w-10/12 md:w-9/12">
      <div className="col-span-3 md:col-span-2 justify-center flex flex-col">
        <Subtitle title="General Overview" />
        <p className="mt-1 text-justify">
          Air quality has overtime deteriorated due to developing countries
          industrialization. This has in turn put the health of population in
          risk of respiratory disorders, cardiovascular diseases and
          asthma/allergy. This project focuses on creating a micro controlled
          gas sensor system aimed at alerting the user when dangerous levels of
          pollutants are in the air. We are also developing an automated air
          filtration system to decrease exposure from harmful particulates in
          the air.
        </p>
      </div>
      <img
        src={img1.src}
        alt="Air Quality System 1"
        className="col-span-3 md:col-span-1"
      />
      <div className="col-span-3 md:col-span-2 justify-center flex flex-col">
        <Subtitle title="Motivation" />
        <ul
          className="marker:text-ewb-blue-200 ml-4"
          style={{ listStyleType: "square" }}
        >
          <li className="mb-2">
            Air quality poses a threat to people all over the world, by
            developing this system; we present a solution that would otherwise
            be unobtainable to developing communities.
          </li>
          <li className="mb-2">
            Make an impact on someone&apos;s life by improving quality of life
            through smart sensors and ventilation technology
          </li>
          <li className="mb-2">
            Gain on hands experience on how to calibrate and program sensors
          </li>
        </ul>
      </div>
      <img
        src={img2.src}
        alt="Air Quality System 2"
        className="col-span-3 md:col-span-1"
      />

      <div className="col-span-3 md:col-span-2 justify-center flex flex-col">
        <Subtitle title="Micro Controller" />
        <ul
          className="marker:text-ewb-blue-200 ml-4"
          style={{ listStyleType: "square" }}
        >
          <li className="mb-2">
            Gas sensor system will be able to detect a series of contaminants in
            the are including Ozone, Carbon Monoxide, Methane, and CO2.
          </li>
          <li className="mb-2">
            Ventilation system will be controlled by gas sensing micro
            controller to maximize power and filter life.
          </li>
          <li className="mb-2">
            Gas Sensing unit will be able to alert user and recommend proper
            procedure to avoid unnecessary exposure to harmful particulates
          </li>
        </ul>
      </div>
      <img
        src={img3.src}
        alt="Air Quality System 3"
        className="col-span-3 md:col-span-1"
      />
    </div>
  );
};

export default AirQuality;
