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
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
    document.body.style.overflow = isCartOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const closeCart = () => {
    setIsCartOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative">
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeMenu} // Close menu overlay when clicked
        ></div>
      )}

      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeCart} // Close cart overlay when clicked
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
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/* Links */}
          <div className="font-bold w-[429px] h-[25px] uppercase text-white lg:flex justify-between hidden text-[13px]">
            <Link
              to="/headphones"
              className="hover:text-[#D87D4A]"
              onClick={closeMenu}
            >
              headphones
            </Link>
            <Link
              to="/speakers"
              className="hover:text-[#D87D4A]"
              onClick={closeMenu}
            >
              speakers
            </Link>
            <Link
              to="/earphones"
              className="hover:text-[#D87D4A]"
              onClick={closeMenu}
            >
              earphones
            </Link>
          </div>

          {/* Cart Icon */}
          <img
            className="cursor-pointer hover:scale-110 duration-300"
            src={cart}
            alt="cart"
            onClick={toggleCart}
          />
        </div>

        {/* Cart Overlay */}
        {isCartOpen && (
          <div className="fixed top-20 right-0 md:w-[400px] w-[300px] bg-white z-50 shadow-lg rounded-lg p-5">
            <h2 className="text-lg font-bold mb-4">CART(0)</h2>
            {/* Add cart items here */}
            <p className="text-sm text-gray-600">Your cart is empty.</p>
            <button
              className="mt-4 bg-[#D87D4A] text-white py-2 px-4 rounded"
              onClick={closeCart}
            >
              Close
            </button>
          </div>
        )}

        {/* Tablet and Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 md:w-[768px] md:h-[340px] w-[375px] h-[650px] bg-white flex items-center justify-center rounded-b-[8px] transition-transform duration-500 ease-in-out ${
              isMenuOpen ? "translate-y-[4rem]" : "-translate-y-full"
            }`}
          >
            <div className="md:w-[689px] md:h-[217px] w-[327px] h-[683px] flex md:flex-row flex-col items-center justify-evenly">
              {products.map((product, index) => (
                <Link
                  to={product.path}
                  key={index}
                  className="md:w-[223px] md:h-[217px] w-[327px] flex flex-col justify-end hover:scale-105 duration-300 z-20"
                  onClick={closeMenu}
                >
                  <div className="relative flex flex-col items-center justify-end bg-[#F1F1F1] w-full md:h-[165px] h-[135px] rounded-[8px]">
                    <img
                      className="absolute top-[-32%] object-cover md:w-[120px] md:h-[140px] w-[90px] h-[110px]"
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
