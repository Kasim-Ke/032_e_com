import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import burger from "../assets/shared/tablet/icon-hamburger.svg";

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
          <h5 className="cursor-pointer hover:text-[#D87D4A] duration-300 ">
            home
          </h5>
          <h5 className="cursor-pointer hover:text-[#D87D4A] duration-300 ">
            headphones
          </h5>
          <h5 className="cursor-pointer hover:text-[#D87D4A] duration-300 ">
            speakers
          </h5>
          <h5 className="cursor-pointer hover:text-[#D87D4A] duration-300 ">
            earphones
          </h5>
        </div>
        <img className="cursor-pointer " src={cart} alt="cart" />
      </div>
    </div>
  );
};

export default Navbar;
