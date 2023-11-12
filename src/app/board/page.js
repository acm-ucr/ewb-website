import { BOARD } from "../../data/mockBoard";
import Board from "../../components/board/Board";

const page = () => {
  return (
    <div className="grid grid-cols-4 w-9/12 gap-8">
      {BOARD.map((item, index) => (
        <Board
          key={index}
          name={item.name}
          position={item.position}
          grade={item.grade}
          major={item.major}
          links={item.links}
          pronouns={item.pronouns}
          picture={item.picture}
        />
      ))}
    </div>
  );
};

export default page;
