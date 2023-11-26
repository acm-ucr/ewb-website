import whiteLogo from "../../public/assets/whiteLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/data/icons";
import { LINKS } from "@/data/links";

const Footer = () => {
  return (
    <div className="w-full bg-ewb-blue-200 border-t-[20px] border-t-ewb-green pt-32 flex justify-between relative">
      <div className="flex items-end m-3 gap-3 text-white font-bold text-xl w-1/2">
        <Image src={whiteLogo} alt="EWB Logo" />
        <p className="text-xs md:text-lg">EWB at UCR</p>
      </div>

      <div className="text-right text-white text-sm flex flex-col m-0 p-0 mx-4 w-1/2">
        <div className="flex flex-row ml-20 self-end">
          {LINKS.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              className="no-underline text-white hover:text-ewb-white mx-1 flex flex-col items-center hover:-translate-y-0.5 duration-300"
            >
              <icons className="text-2xl">{ICONS[social.text]}</icons>
            </Link>
          ))}
        </div>
        <div className="py-2">
          <div>900 University Ave</div>
          <div>Riverside, CA 92521</div>
          <div>United States</div>
          <div>ewb.ucriverside@gmail.com</div>
          <div>619-395-3534</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
