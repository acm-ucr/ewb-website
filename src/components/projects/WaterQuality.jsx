import Subtitle from "../Subtitle";
import img1 from "../../../public/images/WaterQualityAndFiltration/WaterQualityAndFiltration1.gif";
import img2 from "../../../public/images/WaterQualityAndFiltration/WaterQualityAndFiltration2.gif";

const WaterQuality = () => {
  return (
    <div className="grid grid-cols-3 gap-10 my-16 justify-around w-10/12 md:w-9/12">
      <div className="col-span-3 md:col-span-2 justify-center flex flex-col">
        <Subtitle title="General Overview" />
        <p className="mt-1 text-justify">
          Water is one of the most imperative substances to life. With an ever
          increasing population, there will need to be more sources of water to
          be treated and tested. This however is not so easy in developing
          countries, as time and resources may be scarce. That is why a need for
          a water quality and filtration system that is affordable and easily
          implemented is needed.
        </p>
      </div>
      <div className="col-span-3 md:col-span-1">
        <iframe
          width="100%"
          height="230"
          src="https://www.youtube.com/embed/BCHhwxvQqxg?si=24cjxFngXhooUjca"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div className="col-span-3 md:col-span-2 justify-center flex flex-col">
        <Subtitle title="Motivation" description="Water Quality System" />
        <ul
          className="marker:text-ewb-blue-200 ml-4"
          style={{ listStyleType: "square" }}
        >
          <li className="mb-2">
            A system that is able to detect harmful substances such as Nitrates,
            Ammonia, Algae, Conductivity. pH, Turbidity will help prevent
            detrimental intake of hazardous substances in water
          </li>
          <li className="mb-2">
            Will greatly improve the quality of life of rural isolated
            communities where clean drinking water is hard to get
          </li>
        </ul>
      </div>
      <img
        src={img1.src}
        alt="Water Quality And Filtration Gif 1"
        className="col-span-3 md:col-span-1"
      />
      <div className="col-span-3 md:col-span-2 justify-center flex flex-col">
        <Subtitle title="Water Filtration System" />
        <ul
          className="marker:text-ewb-blue-200 ml-4"
          style={{ listStyleType: "square" }}
        >
          <li className="mb-2 font-bold">Activated Carbon</li>
          <li className="ml-6">
            Made from mixing charcoal and table salt in an aqueous solution. The
            activation of carbon takes approximately 24 hours. This material is
            cheap and effective in removing any particulates in the water.
          </li>
          <li className="mb-2 font-bold">UV-System</li>
          <li className="ml-6">
            In order to remove harmful pathogens, a UV System will be developed.
            This will kill any bacteria by destroying the DNA structure
            preventing further proliferation in the water
          </li>
        </ul>
      </div>
      <img src={img2.src} className="col-span-3 md:col-span-1" />
      <div className="col-span-3 md:col-span-2 justify-center flex flex-col">
        <Subtitle
          title="Educational Micro controller projects"
          description="Education is very hard to obtain affecting isolated communities the most"
        />

        <ul
          className="marker:text-ewb-blue-200 ml-4"
          style={{ listStyleType: "square" }}
        >
          <li className="mb-2">
            To learn more about where we are planning to implement our system
            check out{" "}
            <a
              href="tanzania"
              className="text-ewb-blue-200 font-bold hover:text-ewb-green"
            >
              Tanzania
            </a>{" "}
            and{" "}
            <a
              href="costa-rica"
              className="text-ewb-blue-200 font-bold hover:text-ewb-green"
            >
              Costa Rica
            </a>
          </li>
          <li className="mb-2">
            Removes any possible human error in filtering water. Gives a clear
            analysis on water being treated
          </li>
          <li className="mb-2">
            Using a UV system to calculate time needed for water to be exposed
            for maximum power efficiency. By calculating volume of water and
            level of contamination from feedback from other sensors.
          </li>
          <li className="mb-2">
            An automated system is needed to monitor the life of the filter. By
            measuring these parameters, one can confidently know when to replace
            the filter.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WaterQuality;
