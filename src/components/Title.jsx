const Title = ({ subTitle, title }) => {
  return (
    <div>
      <p className="text-ewb-blue-200 text-4xl">{title}</p>
      <p>{subTitle}</p>
    </div>
  );
};

export default Title;
