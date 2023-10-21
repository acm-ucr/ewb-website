import Link from "next/link";
import { ICONS } from "@/data/icons";
import { LINKS } from "@/data/links";

const Social = ({ icon = ICONS, link = LINKS }) => {
  return (
    <div className="flex flex-row">
      {LINKS.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className="no-underline text-ewb-blue-200 hover:text-ewb-blue-200 flex flex-col mx-4 items-center hover:-translate-y-0.5 duration-300"
        >
          <icons className="text-4xl">{ICONS[social.text]}</icons>
          <p className="font-semibold uppercase">{social.text}</p>
        </Link>
      ))}
    </div>
  );
};

export default Social;
