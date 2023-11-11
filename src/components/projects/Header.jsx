import Title from "../Title";

const Header = ({ img, title }) => {
  return (
    <>
      <img
        src={img}
        alt="Image"
        className="mb-5 w-full object-cover aspect-[16/5]"
      />
      <Title subTitle="" title={title} />
    </>
  );
};

export default Header;
