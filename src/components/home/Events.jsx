import { EVENTS } from "@/data/mockEvents";
import Event from "./Event";
import Title from "../Title";

const Events = () => {
  return (
    <div className="w-10/12 md:w-2/3  lg:w-1/2 flex flex-col items-center gap-10">
      <div className="absolute w-1/3 aspect-square bg-ewb-blue-100/40 rounded-full -translate-y-14" />
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
