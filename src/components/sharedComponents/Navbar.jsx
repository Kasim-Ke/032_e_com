import { Link } from "react-router";

import logo from "./shared/desktop/logo.svg";
import cart from "./shared/desktop/icon-cart.svg";
import burger from "./shared/tablet/icon-hamburger.svg";

const Navbar = () => {
  return (
    <div className="absolute inset-0 lg:w-[1440px] md:w-[768px] w-[375px] h-[90px] mx-auto flex items-center justify-center z-10">
      <div className=" lg:w-[1110px] h-[28px] md:w-[689px] w-[327px] flex justify-between items-center">
        <img
          className="block  md:hidden  w-[16px] h-[15px] cursor-pointer "
          src={burger}
          alt="burger"
        />
        <div className="flex justify-between md:w-[200px] items-center   ">
          <img
            className="md:block  hidden lg:hidden w-[16px] h-[15px] cursor-pointer "
            src={burger}
            alt="burger"
          />
          <img src={logo} alt="logo" />
        </div>

        <div className="font-bold w-[429px] h-[25px] uppercase text-white lg:flex justify-between hidden text-[13px]">
          <Link
            to="/"
            className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105  "
          >
            home
          </Link>
          <Link
            to="/headphones"
            className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105  "
          >
            headphones
          </Link>
          <h5 className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105 ">
            speakers
          </h5>
          <h5 className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105 ">
            earphones
          </h5>
        </div>
        <img
          className="cursor-pointer hover:scale-110 duration-300 "
          src={cart}
          alt="cart"
        />
      </div>
    </div>
  );
};

export default Navbar;
