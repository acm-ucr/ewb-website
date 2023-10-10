import ArrowLink from "../ArrowLink.jsx";

const Project = ({ name, description, link }) => {
  return (
    <div className="bg-ewb-blue-100 w-1/4">
      <div className="text-ewb-blue-200 text-4xl font-bold underline underline-offset-8 decoration-emerald-500 text-center pt-4">
        {name}
      </div>
      <div className="pt-6 pb-6 px-14 text-center text-lg">{description}</div>
      <div className="flex items-center justify-center text-blue-800 font-bold pb-2 text-xl">
        <ArrowLink text="learn more" link="{link}" />
      </div>
    </div>
  );
};

export default Project;
