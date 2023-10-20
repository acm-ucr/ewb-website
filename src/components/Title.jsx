import { COLORS } from "../data/colors";
const Title = ({ subTitle, title }) => {
  const titleWords = title.split(" ");
  return (
    <div className="flex flex-col justify-center items-center">
      <p className={COLORS.green.text + " font-semibold mb-0"}>{subTitle}</p>
      <p className="mt-0 font-bold text-3xl">
        <span
          className={
            COLORS.blue.bg +
            " text-white underline underline-offset-[14px] decoration-ewb-green decoration-8"
          }
        >
          {titleWords[0]}
        </span>
        <span className={COLORS.blue.text}>
          {" " + titleWords.slice(1).join(" ")}
        </span>
      </p>
    </div>
  );
};

export default Title;
