import Title from "../Title";
import Event from "../home/Event";

const EventDescriptions = ({ events }) => {
  const upcomingEvents = events.filter((event) => event.end > new Date());
  return (
    <div className="flex-col flex w-10/12 md:w-2/3 lg:w-1/2 items-center justify-center gap-3">
      <Title title="Upcoming Events" />
      <div className="flex-col flex w-full items-center justify-center gap-3 my-5">
        {upcomingEvents.length > 0 ? (
          upcomingEvents
            .slice(0, 3)
            .map((event, index) => (
              <Event
                key={index}
                start={event.start}
                end={event.end}
                location={event.location}
                name={event.name}
                descripton={event.description}
                color={event.eventColor}
              />
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
