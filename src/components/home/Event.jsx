import { COLORS } from "@/data/colors";
const getTimeString = (date) => {
  const dateArr = date.toLocaleTimeString().split(":");
  return `${dateArr[0]}:${dateArr[1]}${dateArr[2].split(" ")[1]}`;
};
const Event = ({ start, end, location, name, descripton, color }) => {
  return (
    <div className="bg-ewb-blue-100 flex w-full font-bold">
      <div
        className={`text-4xl text-white text-center w-1/6 aspect-square flex flex-col items-center justify-center ${COLORS[color].bg}`}
      >
        <div>{start.toString().split(" ")[1]}</div>
        <div>{start.getDate()}</div>
        <div className="font-normal text-lg">
          {getTimeString(start)}- {getTimeString(end)}
        </div>
      </div>
      <div className="p-3 w-5/6 text-ewb-black ">
        <div className={`text-2xl ${COLORS[color].text}`}>{name}</div>
        <div className="text-base">{location}</div>
        <div className="text-base font-normal">{descripton}</div>
      </div>
    </div>
  );
};

export default Event;
