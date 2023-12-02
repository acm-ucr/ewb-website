import { COLORS } from "@/data/colors";

const CustomEvent = ({ event }) => {
  return (
    <div className={`${COLORS[event.color].bg}  text-sm flex justify-start`}>
      <p className="whitespace-nowrap m-0">
        {!event.allDay &&
          new Date(event.start).toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          })}
        &nbsp;
        {event.summary}
      </p>
    </div>
  );
};

export default CustomEvent;
