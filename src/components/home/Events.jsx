import { EVENTS } from "@/data/mockEvents";
import Event from "./Event";
import Title from "../Title";

const Events = () => {
  return (
    <div className="w-7/12 flex flex-col items-center justify-center gap-4">
      <Title subTitle="CHECK OUT WHAT IS NEW" title="UPCOMING EVENTS" />
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
