import { EVENTS } from "@/data/mockEvents";
import Event from "./Event";

const Events = () => {
  return (
    <div className="w-7/12 flex flex-col items-center justify-center gap-4">
      {EVENTS.map((event, index) => (
        <Event
          key={index}
          start={event.start}
          end={event.end}
          location={event.location}
          name={event.name}
          descripton={event.description}
          color={event.color}
        />
      ))}
    </div>
  );
};

export default Events;
