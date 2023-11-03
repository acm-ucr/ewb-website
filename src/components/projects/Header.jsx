import Title from "../Title";

const Header = ({ img, title }) => {
  return (
    <div>
      <img src={img} alt="Image" className="mb-2.5 w-full" />
      <Title subTitle="" title={title} />
    </div>
  );
};

export default Header;
