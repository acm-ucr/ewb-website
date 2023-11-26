"use client";
import Link from "next/link";
import { ICONS } from "@/data/icons";
import { LINKS } from "@/data/links";

const Social = () => {
  return (
    <div className="flex flex-row relative">
      {LINKS.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          className="text-4xl no-underline text-ewb-blue-200 hover:text-ewb-blue-200 flex flex-col mx-4 items-center hover:-translate-y-0.5 duration-300"
        >
          {ICONS[social.text]}
          <p className="font-semibold uppercase text-lg">{social.text}</p>
        </Link>
      ))}
    </div>
  );
};

export default Social;
