import React from "react";
import Subtitle from "../Subtitle";
const AirQuality = () => {
  return (
    <div className="grid grid-cols-3 gap-10 m-28">
      <div className="col-span-2 pb-4">
        <Subtitle title="General Overview"></Subtitle>
        <p className="ml-2 mt-1">
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
      <div>
        <img
          src="/images/airQualitySystem/AirQualitySystem1.webp"
          alt="Air Quality System 1"
        />
      </div>

      <div className="col-span-4 col-start-1 bg-white p-6 mb-6 ">
        <Subtitle title="Motivation"></Subtitle>
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
            Make an impact on someone's life by improving quality of life
            through smart sensors and ventilation technology
          </li>
          <li className="mb-2">
            Gain on hands experience on how to calibrate and program sensors
          </li>
        </ul>
      </div>
      <div>
        <img
          src="/images/airQualitySystem/AirQualitySystem2.webp"
          alt="Air Quality System 2"
        />
      </div>

      <div className="col-span-3 bg-white p-6 ">
        <Subtitle title="Micro Controller"></Subtitle>
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
      <div>
        <img
          src="/images/airQualitySystem/AirQualitySystem3.gif"
          alt="Air Quality System 3"
        />
      </div>
    </div>
  );
};

export default AirQuality;
