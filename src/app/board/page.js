import { BOARD } from "../../data/mockBoard";
import Board from "../../components/board/Board";
import Title from "@/components/Title";

const page = () => {
  return (
    <div className="relative w-full flex flex-col items-center mt-14">
      <div className="absolute w-1/2 aspect-square bg-ewb-blue-100/40 rounded-full -translate-y-14" />
      <Title title="MEET THE TEAM" />
      <div className="relative grid grid-cols-4 w-9/12 gap-8 mt-14">
        {BOARD.map((item, index) => (
          <Board
            key={index}
            name={item.name}
            position={item.position}
            grade={item.grade}
            major={item.major}
            links={item.links}
            pronouns={item.pronouns}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
