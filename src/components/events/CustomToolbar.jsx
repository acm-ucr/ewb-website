import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const monthNames = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center w-full py-3 flex-row">
      <AiOutlineArrowLeft
        onClick={() => {
          console.log("hi");
          event.onNavigate("PREV");
        }}
        className="hover:cursor-pointer text-3xl text-ewb-blue-200 font-bold mx-3"
      />
      <p className="m-0 text-3xl text-ewb-blue-200 font-bold">
        {monthNames[event.date.getMonth()]}
      </p>
      <p className="m-0 text-3xl text-ewb-blue-200 font-bold">
        {event.date.getFullYear()}
      </p>
      <AiOutlineArrowRight
        onClick={() => event.onNavigate("NEXT")}
        className="hover:cursor-pointer text-3xl text-ewb-blue-200 font-bold mx-3"
      />
    </div>
  );
};

export default CustomToolbar;
