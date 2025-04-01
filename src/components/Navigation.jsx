"use client";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";

import blueLogo from "../../public/assets/blueLogo.svg";
import { navigation } from "../data/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const isItemActive = (item) => {
    if (item.link && pathname === item.link) return true;
    if (item.sub.length > 0) {
      return item.sub.some((sub) =>
        pathname.startsWith("/projects" + sub.link)
      );
    }
    return false;
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full m-0 md:h-[8vh] p-0 flex px-3 !bg-white justify-between items-center"
    >
      <Navbar.Brand className="p-0 min-h-full text-ewb-blue-200 font-bold hover:text-ewb-green duration-150">
        <Link href="/" className="items-center flex min-h-full">
          <Image src={blueLogo} alt="EWB Logo" className="h-full p-2" />
          EWB at UCR
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        className="list-unstyled !text-transparent border-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className="text-ewb-blue-200 text-xl" />
      </Navbar.Toggle>

      <Navbar.Collapse className="md:justify-end justify-center h-full items-center">
        <Nav className="no-underline text-lg flex items-center gap-2 mr-4 h-full">
          {navigation.map((item, index) => (
            <div key={index}>
              {item.sub.length > 0 ? (
                <NavDropdown
                  show={show}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                  onClick={() => setShow(!show)}
                  className="[&>*]:!border-0 [&>*]:!p-0 [&>*]:!m-0 [&>*]:!bg-transparent"
                  title={
                    <span
                      className={`hover:cursor-pointer rounded-full mb-0 py-1 px-4 no-underline !text-black text-lg whitespace-nowrap !font-normal hover:!text-blue-600 duration-300 ${
                        isItemActive(item) &&
                        "!bg-ewb-blue-200 rounded-full !text-white hover:!text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  }
                >
                  {item.sub.map((country, subIndex) => (
                    <NavDropdown.Item
                      key={subIndex}
                      className="text-white hover:!bg-ewb-green !bg-ewb-blue-200 first:!mt-5"
                      href={`/projects${country.link}`}
                    >
                      {country.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  as={Link}
                  href={item.link}
                  className={`hover:cursor-pointer rounded-full mb-0 py-0 px-4 no-underline !text-black text-lg whitespace-nowrap !font-normal hover:!text-blue-600 duration-300 ${
                    isItemActive(item) &&
                    "!bg-ewb-blue-200 rounded-full !text-white hover:!text-white"
                  }`}
                >
                  {item.name}
                </Nav.Link>
              )}
            </div>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
