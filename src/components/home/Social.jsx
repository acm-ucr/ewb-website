import Link from "next/link";

import { BsEnvelope, BsFacebook } from "react-icons/bs";
import { LINKS } from "@/data/links";

const Social = ({ link = LINKS }) => {
  return (
    <div className="flex flex-row">
      <Link
        href={link[0].link}
        className="no-underline text-ewb-blue-200 hover:text-ewb-blue-200 flex flex-col mx-4 items-center hover:-translate-y-0.5 duration-300"
      >
        <BsEnvelope className="text-4xl" />
        <p className="font-semibold">EMAIL</p>
      </Link>
      <Link
        target="_blank"
        href={link[1].link}
        className="no-underline text-ewb-blue-200 hover:text-ewb-blue-200 flex flex-col mx-4 items-center hover:-translate-y-0.5 duration-300"
      >
        <BsFacebook className="text-4xl" />
        <p className="font-semibold">FACEBOOK</p>
      </Link>
    </div>
  );
};

export default Social;
