const Subtitle = ({ title, descripton }) => {
  return (
    <div>
      <div className="flex items-center gap-1">
        <div className="bg-ewb-green h-5 w-1" />
        <div className="text-ewb-blue-200 text-2xl font-bold">{title}</div>
      </div>
      <div className="text-ewb-green font-semibold text-lg ml-2">
        {descripton}
      </div>
    </div>
  );
};

export default Subtitle;
