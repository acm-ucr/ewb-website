import whiteLogo from "../../public/assets/whiteLogo.svg";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/data/icons";
import { LINKS } from "@/data/links";

const Footer = () => {
  return (
    <div className="w-full bg-ewb-blue-200 border-t-[20px] border-t-ewb-green pt-32 flex justify-between">
      <div className="inline-flex pl-6 pt-10 text-white font-bold text-xl">
        <Image src={whiteLogo} alt="EWB Logo" className="scale-125" />
        <p className="pl-4 pt-20">EWB at UCR</p>
      </div>

      <div className="text-right text-white text-sm flex flex-col m-0 p-0">
        <div className="flex flex-row scale-75 ml-20">
          {LINKS.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              className="no-underline text-white hover:text-ewb-white mx-1 flex flex-col items-center hover:-translate-y-0.5 duration-300"
            >
              <icons className="text-4xl">{ICONS[social.text]}</icons>
              <div className="font-semibold uppercase">{social.text}</div>
            </Link>
          ))}
        </div>
        <div className="mx-4 pb-3">
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
