const CustomEvent = ({ event }) => {
  return (
    <div className={`${event.color}  text-sm flex justify-start`}>
      <p className="whitespace-nowrap  m-0">
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
