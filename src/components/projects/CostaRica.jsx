import Subtitle from "../Subtitle";
import img1 from "../../../public/images/costaRica/CostaRica1.gif";
import img2 from "../../../public/images/costaRica/costaRica2.gif";

const CostaRica = () => {
  return (
    <div className="grid grid-cols-3 gap-10 my-16 justify-around w-10/12 md:w-9/12">
      <div className="col-span-3 md:col-span-2 pb-4">
        <Subtitle title="General Overview" />
        <div className="ml-2 mt-1">
          In collaboration with Claudia Chaves Villarreal, a Ph.D. Candidate and
          her organization Biogas Pococi, we are working to implement
          Biodigestor tanks and micro controlling systems. She has already
          implemented this system for 38 families! The Biodigestor provides
          clean fuel without the emission of harmful particulates that has had
          detrimental impacts on the health of rural inhabitants. The
          Biodigestor also provides a source of fertilizer for farmers to use.
        </div>
      </div>

      <img
        src={img1.src}
        alt="Costa Rica Image 1"
        className="col-span-3 md:col-span-1"
      />

      <div className="col-span-3 md:col-span-2 pb-4">
        <Subtitle
          title="Motivation"
          description="Rural communities are already disadvantaged socioeconomically"
        />
        <div className="ml-2 mt-1">
          <ul
            className="marker:text-ewb-blue-200 ml-4"
            style={{ listStyleType: "square" }}
          >
            <li>
              Include them in the building process by teaching them the basics
              of engineering
            </li>
            <li>Inspire them to peruse education</li>
            <li>Improve infrastructure of land and quality of life</li>
          </ul>
        </div>
      </div>

      <img
        src={img2.src}
        alt="Costa Rica Image 2"
        className="col-span-3 md:col-span-1"
      />

      <div className="col-span-3 pb-4">
        <Subtitle
          title="Educational Micro Controller Projects"
          description="Education is very hard to obtain affecting isolated rural communities the most"
        />
        <div className="ml-2 mt-1">
          <ul
            className="marker:text-ewb-blue-200 ml-4"
            style={{ listStyleType: "square" }}
          >
            <li>
              Providing some micro controllers and electronic parts allow for
              community members, from kids to adults, gain a valuable skill that
              improves their future opportunities
            </li>
            <li>
              Is beneficial for both the volunteer(you), to gain once a lifetime
              experience, and to the disadvantage community by improving their
              way of life
            </li>
            <li>
              A water treatment system will also be implemented, to learn more
              check out the
              <a
                href="water-quality-and-filtration"
                className="text-ewb-blue-200 font-bold hover:text-ewb-green"
              >
                water quality and filtration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostaRica;
