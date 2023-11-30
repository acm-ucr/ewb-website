import WaterQuality from "@/components/projects/WaterQuality";
import Header from "@/components/projects/Header";
import header from "../../../../public/images/WaterQualityAndFiltration/WaterQualityAndFiltrationHeader.webp";

const page = () => {
  return (
    <>
      <Header img={header.src} title="Water Quality and Filtration" />
      <WaterQuality />
    </>
  );
};

export default page;
