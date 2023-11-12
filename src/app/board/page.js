import { BOARD } from "../../data/mockBoard";
import Board from "../../components/board/Board";
import Row from "react-bootstrap/Row";

const page = () => {
  return (
    <Row className="my-6  flex w-8/12 ">
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
    </Row>
  );
};

export default page;
