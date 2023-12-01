import EventDescription from "./EventDescription";
import Title from "../Title";

const EventDescriptions = ({ events }) => {
  const upcomingEvents = events.filter((event) => event.end > new Date());
  return (
    <div className="w-full flex-col flex">
      <Title title="Upcoming Events" />
      <div className="self-center w-9/12">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <EventDescription key={index} event={event} index={index} />
          ))
        ) : (
          <p className="text-lg w-full text-center font-bold text-black mt-5">
            no upcoming events
          </p>
        )}
      </div>
    </div>
  );
};

export default EventDescriptions;
