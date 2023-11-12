import Link from "next/link";
import { ICONS } from "@/data/icons";

const Board = ({ name, position, grade, major, links, pronouns, picture }) => {
  return (
    <div className="w-full bg-gray-200 my-4 shadow-[12px_-12px_0px_0px] shadow-ewb-green p-4">
      <div className="font-semibold text-ewb-blue-200 text-2xl">{name}</div>
      <div className="font-light text-lg">{position}</div>
      <div className="flex gap-2">
        {Object.entries(links).map(([icon, link], index) => (
          <Link
            key={index}
            href={link}
            className="text-2xl text-ewb-blue-200 hover:text-ewb-green"
          >
            {ICONS[icon]}
          </Link>
        ))}
      </div>
      <div className="font-light text-sm">
        {grade} {"\u2E31"} {major}
      </div>
      <div className="font-light text-lg">Pronous: {pronouns}</div>
    </div>
  );
};

export default Board;
