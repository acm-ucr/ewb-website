import React from "react";
import CostaRica from "@/components/projects/CostaRica";
import Header from "@/components/projects/Header";
import header from "../../../../public/images/costaRica/CostaRicaHeader.webp";

const page = () => {
  return (
    <>
      <Header img={header.src} title="Costa Rica Project" />
      <CostaRica />
    </>
  );
};

export default page;
