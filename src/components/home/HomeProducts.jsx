import { Link } from "react-router-dom"; // Correct import

import hpDesktop from "./shared/desktop/image-category-thumbnail-headphones.png";
import spDesktop from "./shared/desktop/image-category-thumbnail-speakers.png";
import erDesktop from "./shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "./shared/desktop/icon-arrow-right.svg";

const products = [
  {
    name: "HEADPHONES",
    image: hpDesktop,
    alt: "Headphones",
    path: "/headphones", // Added path for navigation
  },
  {
    name: "SPEAKERS",
    image: spDesktop,
    alt: "Speakers",
    path: "/speakers", // Added path for navigation
  },
  {
    name: "EARPHONES",
    image: erDesktop,
    alt: "Earphones",
    path: "/earphones", // Added path for navigation
  },
];

function HomeProducts() {
  return (
    <div className="lg:w-[1440px] md:w-[768px] w-[375px] mx-auto my-[4rem] flex items-center justify-center">
      <div className="lg:w-[1110px] lg:h-[284px] md:w-[689px] md:h-[217px] w-[327px] h-[683px] flex md:flex-row flex-col items-center justify-between">
        {products.map((product, index) => (
          <Link
            to={product.path}
            key={index}
            className="lg:w-[350px] lg:h-[284px] md:w-[223px] md:h-[217px] w-[327px] flex flex-col justify-end hover:scale-105 duration-300 z-20"
          >
            <div className="relative flex flex-col items-center justify-end bg-[#F1F1F1] w-full lg:h-[204px] h-[165px] rounded-[8px]">
              <img
                className="absolute top-[-32%] object-cover lg:w-[200px] lg:h-[200px] w-[150px] h-[165px]"
                src={product.image}
                alt={product.alt}
              />
              <div className="w-full h-[58px] flex flex-col justify-between items-center uppercase font-bold mb-5">
                <h4 className="text-[18px] tracking-[1.30px]">
                  {product.name}
                </h4>
                <p className="w-[57px] h-[18px] flex justify-between items-center text-[13px] tracking-[1px] cursor-pointer hover:text-[#D87D4A] hover:scale-110 duration-300">
                  shop
                  <img className="w-[10px] h-[15px]" src={arrow} alt="arrow" />
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
