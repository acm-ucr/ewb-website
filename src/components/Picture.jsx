const Picture = ({ picture }) => {
  return (
    <div>
      <img
        className="shadow-[20px_-16px_0px_0px] shadow-ewb-green"
        src={picture}
        alt=""
      />
    </div>
  );
};
export default Picture;
