/* eslint-disable new-cap */
import Image from "next/image";
import Col from "react-bootstrap/Col";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Board = ({ name, position, grade, major, links, pronouns, picture }) => {
  return (
    <Col className="flex items-center justify-center">
      <div className="w-[270px] h-[450px] bg-gray-200 flex items-start justify-center my-3 shadow-[12px_-12px_0px_0px] shadow-ewb-green">
        <Image src={picture} className=" w-10/12 object-cover my-4" />
        <div className="font-medium text-ewb-blue-200  -translate-x-6 absolute my-[246px] text-3xl ">
          {name}
        </div>
        <div className="font-light mr-[131px] absolute mt-[280px] text-2xl">
          {position}
        </div>
        <Link
          href="https://www.google.com"
          rel="noreferrer"
          target="_blank"
          title="LinkedIn"
          className="absolute mr-56 w-1 h-1"
        >
          <div>
            <FaLinkedinIn className="my-80 text-4xl text-ewb-blue-200 hover:text-blue-400 " />
          </div>
        </Link>
        <Link
          href="https://www.google.com"
          rel="noreferrer"
          target="_blank"
          title="Email"
          className="absolute w-1 h-1 mr-32"
        >
          <div>
            <MdEmail className=" my-[322px]  text-4xl text-ewb-blue-200 hover:text-blue-400 " />
          </div>
        </Link>
        <div className="font-light items-start w-[230px] justify-start absolute mt-[360px] text-lg">
          {grade} {"\u2E31"} {major}
        </div>
        <div className="font-light items-start w-[230px] justify-start absolute mt-[388px] text-lg">
          Pronous: {pronouns}
        </div>
      </div>
    </Col>
  );
};

export default Board;
