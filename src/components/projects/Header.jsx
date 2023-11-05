import Title from "../Title";

const Header = ({ img, title }) => {
  return (
    <div className="w-full">
      <img src={img} alt="Image" className="mb-3 w-full object-cover" />
      <Title subTitle="" title={title} />
    </div>
  );
};

export default Header;
