const Subtitle = ({ title, description }) => {
  return (
    <div>
      <div className="flex items-center gap-1">
        <div className="bg-ewb-green h-5 w-1" />
        <div className="text-ewb-blue-200 text-xl md:text-2xl font-bold">
          {title}
        </div>
      </div>
      <div className="text-ewb-green font-semibold text-sm md:text-lg ml-2">
        {description}
      </div>
    </div>
  );
};

export default Subtitle;
