// Color Passing In: blue -> blue, anything else -> green
// Date Start: Month/Day/Start Time
// Date End: End Time
// Include AM / PM on time
// Pass Month as ALL CAPS Three Letter Word

const Event = ({ start, end, location, name, descripton, color }) => {
  const startDate = start.split("/");

  let bgcolor = "";
  if (color === "blue") {
    bgcolor = "#1051D3";
  } else {
    bgcolor = "#80C393";
  }

  return (
    <div className=" bg-ewb-blue-100 w-4/6 inline-flex">
      <div
        className="text-white text-center max-w-fit w-1/4 pt-6 pb-1"
        style={{ backgroundColor: `${bgcolor}` }}
      >
        <h1 className="font-bold text-6xl break-all px-12 align-middle">
          {startDate[0]} {startDate[1]}
        </h1>
        <p className="font-normal text-2xl align-middle">
          {startDate[2]}-{end}
        </p>
      </div>

      <div className="px-3 w-3/4">
        <div
          className="pt-3 text-ewb-blue-200 text-[40px] font-bold leading-[48px]"
          style={{ color: `${bgcolor}` }}
        >
          {name}
        </div>
        <div className="leading-7 text-ewb-black font-bold text-[19px]">
          {location}
        </div>
        <div className="leading-7 text-[19px]">{descripton}</div>
      </div>
    </div>
  );
};

export default Event;
