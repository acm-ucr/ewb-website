import whiteLogo from "../../public/assets/whiteLogo.svg";
import Image from "next/image";
import { ICONS } from "@/data/icons";

const Footer = () => {
  return (
    <div className="w-full bg-ewb-blue-200 border-t-[20px] border-t-ewb-green pt-32 flex justify-between">
      <div className="inline-flex pl-6 pt-10 text-white font-bold text-xl">
        <Image src={whiteLogo} alt="EWB Logo" className="scale-125" />
        <p className="pt-16 pl-4">EWB at UCR</p>
      </div>

      <div className="px-1 text-right text-white m-3 text-sm">
        <div className="ml-3 scale-125 float-right">{ICONS["facebook"]}</div>
        <div className="scale-125 float-right"> {ICONS["email"]} </div>
        <p className="pt-4">900 University Ave</p>
        <p>Riverside, CA 92521</p>
        <p>United States</p>
        <p>ewb.ucriverside@gmail.com</p>
        <p>619-395-3534</p>
      </div>
    </div>
  );
};

export default Footer;
