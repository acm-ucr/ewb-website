"use client";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import blueLogo from "../../public/assets/blueLogo.svg";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "../data/navigation";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full md:h-[8vh] flex pb-10 font-playfair !bg-white justify-between items-center"
    >
      <Link href="/" className="items-center ml-3">
        <Image src={blueLogo} />
      </Link>

      <Navbar.Collapse className="items-center mr-12 md:justify-end justify-center">
        <Nav className="mb-2 w-12/12 no-underline text-2xl flex items-center">
          {navigation.map((item, index) => (
            <div key={index}>
              {item.sub.length > 0 ? (
                <NavDropdown
                  onClick={() => setSelected(item.name)}
                  title={
                    <span
                      className={`hover:cursor-pointer rounded-full mb-0 py-1 px-4 no-underline !text-black text-2xl whitespace-nowrap !font-normal hover:!text-blue-600 duration-300 ${
                        selected === "PROJECTS" &&
                        "!bg-ewb-blue-200 rounded-full text-white hover:!text-white" // To remove blue hover i set new hover to white
                      }`}
                    >
                      {item.name}
                    </span>
                  }
                >
                  <NavDropdown.Item
                    className="text-white hover:!bg-ewb-green !bg-ewb-blue-200"
                    href="#"
                  >
                    Costa Rica
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-white hover:!bg-ewb-green !bg-ewb-blue-200"
                    href="#"
                  >
                    Tanzania
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-white hover:!bg-ewb-green !bg-ewb-blue-200"
                    href="#"
                  >
                    Water Quality and Filtration
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-white hover:!bg-ewb-green !bg-ewb-blue-200"
                    href="#"
                  >
                    Robotics
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="text-white hover:!bg-ewb-green !bg-ewb-blue-200"
                    href="#"
                  >
                    Air Quality System
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link
                  as={Link}
                  key={index}
                  href={item.link}
                  onClick={() => setSelected(item.name)} // Blue border when selected became squared immediately after selecting something else so applied rounded-full
                  className={`hover:cursor-pointer rounded-full mb-0 py-1 px-4 no-underline !text-black text-2xl whitespace-nowrap !font-normal hover:!text-blue-600 duration-300 ${
                    selected === item.name &&
                    "!bg-ewb-blue-200 rounded-full text-white hover:!text-white" // To remove blue hover i set new hover to white
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
