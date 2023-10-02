import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
const ArrowLink = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="no-underline text-ewb-blue-200 hover:text-ewb-blue-200 flex items-center hover:-translate-y-0.5 duration-300"
    >
      {text} <BiRightArrowAlt />
    </Link>
  );
};

export default ArrowLink;
