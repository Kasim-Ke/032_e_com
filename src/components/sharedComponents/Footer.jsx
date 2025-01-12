import { Link } from "react-router";

import logo from "./shared/desktop/logo.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="lg:w-[1440px] lg:h-[365px] md:w-[768px] md:h-[400px] w-[375px] h-[654px] bg-[#101010] mx-auto flex items-center justify-center">
      <div className="lg:w-[1110px] lg:h-[242px] md:w-[689px] md:h-[294px] w-[327px] h-[564px]  flex flex-col justify-between ">
        <div className="lg:w-[1110px] lg:h-[61px] md:w-[429px] md:h-[82px] w-[143px] h-[212px] flex lg:flex-row flex-col justify-between md:items-start mx-auto md:mx-0 items-center  uppercase font-bold text-[13px] tracking-[2px] text-white">
          <img src={logo} alt="logo" />
          <div className="w-[400px] flex justify-between items-center md:flex-row flex-col md:h-[25px] h-[148px]">
            <Link
              to="/"
              className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105"
            >
              home
            </Link>
            <Link
              to="headphones"
              className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105"
            >
              headphones
            </Link>
            <Link
              to="speakers"
              className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105"
            >
              speakers
            </Link>
            <Link
              to="earphones"
              className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105"
            >
              earphones
            </Link>
          </div>
        </div>
        <div className="lg:w-[1110px] flex lg:flex-row flex-col items-center justify-between">
          <div className="lg:w-[540px] lg:h-[181px] flex justify-between  flex-col leading-[25px] text-[15px] md:text-left text-center font-medium  text-gray-500">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="hidden lg:block">
              Copyright 2025. All Rights Reserved
            </p>
          </div>
          <div className="lg:flex space-x-4 hidden ">
            <FaFacebookF
              className="text-white hover:text-[#D87D4A] cursor-pointer transition duration-300"
              size={25}
            />
            <FaXTwitter
              className="text-white hover:text-[#D87D4A] cursor-pointer transition duration-300"
              size={25}
            />
            <FaInstagram
              className="text-white hover:text-[#D87D4A] cursor-pointer transition duration-300"
              size={25}
            />
          </div>
          <div className="  md:h-[105px] md:w-full w-[300px] h-[94px] text-[15px] flex-col md:flex-row flex lg:hidden leading-[25px] justify-between md:items-end items-center font-bold  text-gray-500 mt-[47px] md:mt-0">
            <p className="">Copyright 2025. All Rights Reserved</p>
            <div className="flex space-x-4  ">
              <FaFacebookF
                className="text-white hover:text-[#D87D4A] cursor-pointer transition duration-300"
                size={25}
              />
              <FaXTwitter
                className="text-white hover:text-[#D87D4A] cursor-pointer transition duration-300"
                size={25}
              />
              <FaInstagram
                className="text-white hover:text-[#D87D4A] cursor-pointer transition duration-300"
                size={25}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
