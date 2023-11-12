import AirQuality from "@/components/projects/ AirQuality";
import Header from "@/components/projects/Header";
import header from "../../../../public/images/airQualitySystem/AirQualitySystemHeader.webp";

const page = () => {
  return (
    <>
      <Header img={header.src} title="Air Quality System" />
      <AirQuality />
    </>
  );
};

export default page;
