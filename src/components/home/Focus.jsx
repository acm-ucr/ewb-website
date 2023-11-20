import ArrowLink from "../ArrowLink";

const Focus = ({ title, description, link, icon }) => {
  return (
    <div className="col-span-2 md:col-span-1 relative flex flex-col items-center bg-blue-100 p-2">
      <div className="flex justify-center text-3xl text-ewb-green my-2">
        {icon}
      </div>
      <p className="font-bold text-xl md:text-2xl text-center py-2">{title}</p>
      <p className="font-normal text-lg md:text-xl whitespace-normal text-center break-keep w-3/4 pt-2 pb-4">
        {description}
      </p>
      {link !== "" && <ArrowLink text="learn more" link={link} />}
    </div>
  );
};

export default Focus;
