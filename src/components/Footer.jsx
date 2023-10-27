import whiteLogo from "../../public/assets/whiteLogo.svg";
import Image from "next/image";
import { ICONS } from "@/data/icons";

const Footer = () => {
  return (
    <div className="w-full bg-ewb-green">
      <p className="leading-4"> &nbsp; </p>

      <div className="w-full bg-ewb-blue-200 border-t-8 border-ewb-green">
        <br />
        <br />
        <br />
        <br />
        <br />
        <table className="w-full">
          <tbody>
            <tr>
              <td className="w-1/2">
                <div className="mt-6 mx-6">
                  <div className="inline-flex">
                    <Image
                      src={whiteLogo}
                      alt="EWB Logo"
                      className="scale-125"
                    />
                    <div className="text-white pt-10 pl-4 font-bold text-xl">
                      EWB at UCR
                    </div>
                  </div>
                </div>
              </td>
              <td className="w-1/2 text-right text-white py-6 px-8 text-sm">
                <div className="inline-flex scale-125 px-1">
                  <div className="mx-2"> {ICONS["email"]} </div>{" "}
                  <div> {ICONS["facebook"]} </div>
                </div>
                <div>900 University Ave</div>
                <div>Riverside, CA 92521</div>
                <div>United States</div>
                <div>ewb.ucriverside@gmail.com</div>
                <div>619-395-3534</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
