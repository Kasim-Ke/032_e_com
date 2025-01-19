import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import { useCart } from "../CartContext";

import logo from "./shared/desktop/logo.svg";
import cartIcon from "./shared/desktop/icon-cart.svg";
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

  const { cart, addToCart, removeFromCart, getTotalItems, getTotalPrice } =
    useCart();

  const cartRef = useRef(null); // Ref to detect clicks outside the cart

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleDecrement = (item) => {
    // Decrease quantity, remove item if quantity is 0
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: -1 }); // Reduce quantity by 1
    } else {
      removeFromCart(item.id); // Remove item if quantity is 0
    }
  };

  const incrementQuantity = (item) => {
    addToCart({ ...item, quantity: 1 }); // Increase quantity by 1
  };

  const removeAllItems = () => {
    cart.forEach((item) => removeFromCart(item.id)); // Remove all items from cart
  };

  // Close cart when clicking outside the cart
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false); // Close the cart if click is outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {/* Background Overlay when Menu is Open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Navbar */}
      <div className="absolute inset-0 lg:w-[1440px] md:w-[768px] w-[375px] h-[90px] mx-auto flex items-center justify-center z-20">
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
            <Link to="/headphones" className="hover:text-[#D87D4A]">
              headphones
            </Link>
            <Link to="/speakers" className="hover:text-[#D87D4A]">
              speakers
            </Link>
            <Link to="/earphones" className="hover:text-[#D87D4A]">
              earphones
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <img
              className="cursor-pointer hover:scale-110 duration-300"
              src={cartIcon}
              alt="cart"
              onClick={toggleCart}
            />
            {getTotalItems() > 0 && (
              <span className="absolute top-[-15px] right-[-15px] bg-[#D87D4A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Tablet and Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 md:w-[768px] md:h-[340px] w-[375px] h-[650px] bg-white flex items-center justify-center rounded-b-[8px] transition-transform duration-500 ease-in-out z-50 ${
            isMenuOpen ? "translate-y-[4rem]" : "-translate-y-full"
          }`}
        >
          <div className="md:w-[689px] md:h-[217px] w-[327px] h-[683px] flex md:flex-row flex-col items-center justify-evenly">
            {products.map((product, index) => (
              <Link
                to={product.path}
                key={index}
                className="md:w-[223px] md:h-[217px] w-[327px] flex flex-col justify-end hover:scale-105 duration-300 z-20"
                onClick={toggleMenu}
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

      {/* Cart Dropdown */}
      {isCartOpen && (
        <>
          {/* Cart Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleCart}
          ></div>

          <div
            ref={cartRef}
            className="absolute top-[100px] md:right-[20%] mx-[6%] md:w-[377px] w-[327px] bg-white shadow-lg rounded-lg p-4 z-50"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Cart ({getTotalItems()})</h2>
              <button
                className="text-sm text-[#D87D4A] underline hover:opacity-80"
                onClick={removeAllItems} // Remove all items
              >
                Remove all
              </button>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="md:w-[313px] h-[64px] w-[271] flex items-center justify-between border-b pb-2"
                >
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded"
                  />

                  {/* Item Details */}
                  <div className="flex-1 mx-4">
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-sm opacity-50">€{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="w-[96px] h-[32px] bg-[#F1F1F1] flex items-center justify-between">
                    <button
                      className="hover:text-[#D87D4A] font-bold w-[40px] h-full flex items-center justify-center cursor-pointer"
                      onClick={() => handleDecrement(item)} // Call handleDecrement with item
                    >
                      -
                    </button>
                    <p className="font-bold">{item.quantity}</p>
                    <button
                      className="hover:text-[#D87D4A] font-bold h-full flex items-center justify-center w-[40px]"
                      onClick={() => incrementQuantity(item)} // Call incrementQuantity with item
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Section */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm font-bold text-gray-600">TOTAL</p>
              <p className="text-lg font-bold">€{getTotalPrice()}</p>
            </div>

            {/* Checkout Button */}
            <button
              className="mt-4 w-full py-2 bg-[#D87D4A] text-white font-bold rounded hover:bg-[#e08a5d]"
              onClick={() => console.log("Proceed to checkout")}
            >
              CHECKOUT
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
