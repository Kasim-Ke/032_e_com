import { Link } from "react-router";
import { useState } from "react";

import logo from "./shared/desktop/logo.svg";
import cart from "./shared/desktop/icon-cart.svg";
import burger from "./shared/tablet/icon-hamburger.svg";

import hpDesktop from "./shared/desktop/image-category-thumbnail-headphones.png";
import spDesktop from "./shared/desktop/image-category-thumbnail-speakers.png";
import erDesktop from "./shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "./shared/desktop/icon-arrow-right.svg";

const products = [
  {
    name: "HEADPHONES",
    image: hpDesktop,
    alt: "Headphones",
    path: "/headphones",
  },
  {
    name: "SPEAKERS",
    image: spDesktop,
    alt: "Speakers",
    path: "/speakers",
  },
  {
    name: "EARPHONES",
    image: erDesktop,
    alt: "Earphones",
    path: "/earphones",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative">
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeMenu} // Close overlay when clicked
        ></div>
      )}

      {/* Navbar */}
      <div className="absolute inset-0 lg:w-[1440px] md:w-[768px] w-[375px] h-[90px] mx-auto flex items-center justify-center z-50">
        <div className="lg:w-[1110px] h-[28px] md:w-[689px] w-[327px] flex justify-between items-center">
          {/* Hamburger Icon */}
          <img
            className="block md:hidden w-[16px] h-[15px] cursor-pointer"
            src={burger}
            alt="burger"
            onClick={toggleMenu}
          />

          {/* Logo */}
          <div className="flex justify-between md:w-[200px] items-center">
            <img
              className="md:block hidden lg:hidden w-[16px] h-[15px] cursor-pointer"
              src={burger}
              alt="burger"
              onClick={toggleMenu}
            />
            <img src={logo} alt="logo" />
          </div>

          {/* Links */}
          <div className="font-bold w-[429px] h-[25px] uppercase text-white lg:flex justify-between hidden text-[13px]">
            <Link
              to="/headphones"
              className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105"
              onClick={closeMenu} // Close the menu when link is clicked
            >
              headphones
            </Link>
            <Link
              to="/speakers"
              className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105"
              onClick={closeMenu} // Close the menu when link is clicked
            >
              speakers
            </Link>
            <Link
              to="/earphones"
              className="cursor-pointer hover:text-[#D87D4A] duration-300 hover:scale-105"
              onClick={closeMenu} // Close the menu when link is clicked
            >
              earphones
            </Link>
          </div>

          {/* Cart Icon */}
          <img
            className="cursor-pointer hover:scale-110 duration-300"
            src={cart}
            alt="cart"
          />
        </div>

        {/* Tablet and Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 md:w-[768px] md:h-[340px] w-[375px] h-[850px] bg-white flex items-center justify-center rounded-b-[8px] transition-transform duration-500 ease-in-out ${
              isMenuOpen ? "translate-y-[4rem]" : "-translate-y-full"
            }`}
          >
            <div className="lg:w-[1110px] lg:h-[284px] md:w-[689px] md:h-[217px] w-[327px] h-[683px] flex md:flex-row flex-col items-center justify-between">
              {products.map((product, index) => (
                <Link
                  to={product.path}
                  key={index}
                  className="lg:h-[284px] md:w-[223px] md:h-[217px] w-[327px] flex flex-col justify-end hover:scale-105 duration-300 z-20"
                  onClick={closeMenu} // Close menu when product is clicked
                >
                  <div className="relative flex flex-col items-center justify-end bg-[#F1F1F1] w-full lg:h-[204px] h-[165px] rounded-[8px]">
                    <img
                      className="absolute top-[-32%] object-cover lg:w-[200px] lg:h-[200px] w-[125px] h-[145px]"
                      src={product.image}
                      alt={product.alt}
                    />
                    <div className="w-full h-[58px] flex flex-col justify-between items-center uppercase font-bold mb-5">
                      <h4 className="text-[18px] tracking-[1.30px]">
                        {product.name}
                      </h4>
                      <p className="w-[57px] h-[18px] flex justify-between items-center text-[13px] tracking-[1px] cursor-pointer hover:text-[#D87D4A] hover:scale-110 duration-300">
                        shop
                        <img
                          className="w-[10px] h-[15px]"
                          src={arrow}
                          alt="arrow"
                        />
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
