import Subtitle from "../Subtitle";

const Tanzania = () => {
  return (
    <div className="grid grid-cols-3 gap-10 my-16 justify-around w-10/12 md:w-9/12">
      <div className="col-span-3 md:col-span-2 pl-4">
        <Subtitle title="General Overview" />
        <div className="ml-2 mt-1">
          In collaboration with a Civil Developer in Tanzania and the
          professional chapter of E.W.B in L.A. We are looking to install a
          micro controlled solar water pump system for a school, of 400+, in
          Tanzania. Currently students have to make themselves down a
          treacherous path of around 300 meters. This takes time out of their
          studies and puts their health and safety at risk!
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 pl-4">
        <Subtitle title="Motivation" />
        <div className="ml-2 mt-1">
          <ul
            className="marker:text-ewb-blue-200 ml-4"
            style={{ listStyleType: "square" }}
          >
            <li>
              Make an impact on underprivileged students by supplying them with
              technology to overcome physical barriers to an education
            </li>
            <li>
              Inspire them to continue their education through mentoring
              programs
            </li>
          </ul>
        </div>
      </div>
      <img
        className="col-span-3 md:col-span-1 pt-2 md:pt-0 mx-auto"
        src="/images/tanzania/tanzania1.gif"
        alt="image"
      />
      <div className="col-span-3 md:col-span-2 pl-4">
        <Subtitle title="Micro Controlled Solar Water Pump System" />
        <div className="ml-2 mt-1">
          <ul
            className="marker:text-ewb-blue-200 ml-4"
            style={{ listStyleType: "square" }}
          >
            <li>Install solar panels to provide power for water pump</li>
            <li>Install water pump and all the required tubing</li>
            <li>
              Install two communication Micro Controller to monitor power supply
              and water control
            </li>
            <li>
              Provide tutorials/ learning exercises on water controlled pump for
              maintenance
            </li>
          </ul>
        </div>
      </div>
      <img
        className="col-span-3 md:col-span-1 pt-2 md:pt-0 mx-auto"
        src="\images\tanzania\tanzania2.webp"
        alt="image"
      />
      <div className="col-span-3 md:col-span-2 pl-4">
        <Subtitle
          title="Educational Micro Controller Projects"
          description="Education is very hard to obtain affecting isolated rural communities the most."
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
              Please see{" "}
              <a
                href="costa-rica"
                className="text-ewb-blue-200 font-bold underline hover:text-ewb-green"
              >
                Costa Rica
              </a>{" "}
              page for examples on educational Micro Controller Projects
            </li>
            <li>
              A water treatment system will also be implemented, to learn more
              check out the{" "}
              <a
                href="water-quality-and-filtration"
                className="text-ewb-blue-200 underline font-bold hover:text-ewb-green"
              >
                water quality and filtration
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img
        className="col-span-3 md:col-span-1 pt-2 md:pt-0 mx-auto"
        src="\images\tanzania\tanzania3.gif"
        alt="image"
      />
    </div>
  );
};

export default Tanzania;
