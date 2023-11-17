import Subtitle from "../Subtitle";

const WaterQuality = () => {
  return (
    <div className="grid grid-cols-3 gap-10 m-28">
      <div className="col-span-2 pb-4">
        <Subtitle title="General Overview" />
        <p className="ml-2 mt-1 ">
          Water is one of the most imperative substances to life. With an ever
          increasing population, there will need to be more sources of water to
          be treated and tested. This however is not so easy in developing
          countries, as time and resources may be scarce. That is why a need for
          a water quality and filtration system that is affordable and easily
          implemented is needed.
        </p>
      </div>
      <iframe
        width="400"
        height="230"
        src="https://www.youtube.com/embed/BCHhwxvQqxg?si=24cjxFngXhooUjca"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
      <div className="col-span-2 pb-4">
        <Subtitle title="Motivation" descripton="Water Quality System" />
        <p className="ml-2 mt-1">
          <ul
            className="marker:text-ewb-blue-200 ml-4"
            style={{ listStyleType: "square" }}
          >
            <li>
              A system that is able to detect harmful substances such as
              Nitrates, Ammonia, Algae, Conductivity. pH, Turbidity will help
              prevent detrimental intake of hazardous substances in water
            </li>
            <li>
              Will greatly improve the quality of life of rural isolated
              communities where clean drinking water is hard to get
            </li>
          </ul>
        </p>
      </div>
      <img
        src="/images/WaterQualityAndFiltration/WaterQualityAndFiltration1.gif"
        alt="Water Quality And Filtration Gif 1"
      />
      <div className="col-span-2 pb-4">
        <Subtitle title="Water Filtration System" />
        <p className="ml-2 mt-1 ">
          <ul
            className="marker:text-ewb-blue-200 ml-4"
            style={{ listStyleType: "square" }}
          >
            <li className="font-bold">Activated Carbon</li>
            <li className="ml-6">
              Made from mixing charcoal and table salt in an aqueous solution.
              The activation of carbon takes approximately 24 hours. This
              material is cheap and effective in removing any particulates in
              the water.
            </li>
            <li className="font-bold">UV-System</li>
            <li className="ml-6">
              In order to remove harmful pathogens, a UV System will be
              developed. This will kill any bacteria by destroying the DNA
              structure preventing further proliferation in the water
            </li>
          </ul>
        </p>
      </div>
      <img src="/images/WaterQualityAndFiltration/WaterQualityAndFiltration2.gif" />
      <div className="col-span-3 pb-4">
        <Subtitle
          title="Educational Micro controller projects"
          descripton="Education is very hard to obtain affecting isolated communities the most"
        />
        <p className="ml-2 mt-1">
          <ul
            className="marker:text-ewb-blue-200 ml-4"
            style={{ listStyleType: "square" }}
          >
            <li>
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
            <li>
              Removes any possible human error in filtering water. Gives a clear
              analysis on water being treated
            </li>
            <li>
              Using a UV system to calculate time needed for water to be exposed
              for maximum power efficiency. By calculating volume of water and
              level of contamination from feedback from other sensors.
            </li>
            <li>
              An automated system is needed to monitor the life of the filter.
              By measuring these parameters, one can confidently know when to
              replace the filter.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default WaterQuality;
