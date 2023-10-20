import { COLORS } from "@/data/colors";

const Event = ({ start, end, location, name, description, color }) => {
  const startDate = start.split("/");

  return (
    <div className=" bg-ewb-blue-100 w-3/5 inline-flex">
      <div
        className={`text-white text-center w-1/4 aspect-square p-1 ${COLORS[color].bg}`}
      >
        <p className="font-bold text-6xl break-all px-4 align-middle ">
          {startDate[0]} {startDate[1]}
        </p>
        <p className="font-normal text-2xl pl-1 text-center align-middle">
          {startDate[2]}-{end}
        </p>
      </div>

      <div className="px-3 w-3/4">
        <div
          className={`pt-3 text-ewb-blue-200 text-4xl font-bold ${COLORS[color].text}`}
        >
          {name}
        </div>
        <div className="text-ewb-black font-bold text-lg">{location}</div>
        <div className=" text-lg">{description}</div>
      </div>
    </div>
  );
};

export default Event;
