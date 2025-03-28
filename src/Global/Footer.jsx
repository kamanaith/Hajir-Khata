import React from "react";
import FooterLogoImage from "../assets/images/FooterLogoImage.png";
import Flag from "../assets/images/Flag_of_Nepal.svg";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <>
      <footer className="bg-[#15803D]">
        <div className="flex flex-col md:flex md:flex-row md:mx-24 md:pt-10 md:justify-between ">
          <div className="">
            <img src={FooterLogoImage} alt="FooterLogo" className="w-[70%] " />
            <p className="text-white text-left mx-2 ">
              Hajir - khata is dedicated to providing reliable payroll
              management solutions for businesses of all sizes
            </p>

            <div className="text-[10px] pl-2 gap-1 text-left  text-white">
              <a href="#" className="m-1">
                Terms{" "}
              </a>
              <a href="#" className="m-1">
                Privacy{" "}
              </a>
              <a href="#" className="m-1">
                Contact Us{" "}
              </a>
              <a href="#" className="m-1">
                {" "}
                About Us{" "}
              </a>
            </div>
          </div>
          <div className="text-white  m-2">
            <h1 className="text-white font-semibold mt-5  text-xl">
              Contact Us
            </h1>
            <p>
              E-mail:{" "}
              <Link to="/" className="text-md hover:text-[#d57632]">
                hajirkhata@gmail.com
              </Link>{" "}
            </p>
            <p>Phone:+977 9824386694</p>
            <p>Address: Kathmandu,Nepal | Itahari,Nepal</p>
          </div>
          <div className="text-white flex justify-center flex-col m-2">
            <div className="flex ">
              <img src={Flag} alt="NepalFlag" className="w-5 h-5 " />{" "}
              <h1 c>Made in Nepal</h1>
            </div>
            <div className="m-2">
              <h1 className="text-xl font-semibold">follow us</h1>
              <div className="flex  mt-2  gap-4">
                {" "}
                <Instagram />
                <Facebook />
                <Twitter />
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[0.5px] mt-5 mx-[100px]">
          <br />
        </div>
        <div className="mt-1 text-center p-5">
          <p className="text-[12px] text-white">
            2025 Huncha Digital PVT.LTD. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
