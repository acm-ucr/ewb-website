import Tanzania from "@/components/projects/Tanzania";
import Header from "@/components/projects/Header";
import header from "../../../../public/images/tanzania/tanzaniaHeader.webp";

const page = () => {
  return (
    <>
      <Header img={header.src} title="Tanzania Project" />
      <Tanzania />
    </>
  );
};

export default page;
