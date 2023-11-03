import ArrowLink from "../ArrowLink";

const Focus = ({ title, description, link, icon }) => {
  return (
    <div className="flex flex-col items-center bg-blue-100 w-1/5">
      <div className="flex justify-center text-3xl text-ewb-green my-2">
        {icon}
      </div>
      <p className="font-bold text-2xl">{title}</p>
      <p className="font-normal text-xl whitespace-normal text-center break-keep w-3/4">
        {description}
      </p>
      <ArrowLink text="learn more" link={link} />
    </div>
  );
};

export default Focus;
