import { Link } from "react-router";

import markIIDesktop from "./product-xx99-mark-two-headphones/desktop/image-product.jpg";
import markIITablet from "./product-xx99-mark-two-headphones/tablet/image-product.jpg";
import markIIMobile from "./product-xx99-mark-two-headphones/mobile/image-product.jpg";

import xDesktop from "./product-xx59-headphones/desktop/image-product.jpg";
import xITablet from "./product-xx59-headphones/tablet/image-product.jpg";
import xMobile from "./product-xx59-headphones/mobile/image-product.jpg";

import speakerDesktop from "./product-zx9-speaker/desktop/image-product.jpg";
import speakerTablet from "./product-zx9-speaker/tablet/image-product.jpg";
import speakerMobile from "./product-zx9-speaker/mobile/image-product.jpg";

const products = [
  {
    name: "XX99 MARK I",
    images: {
      desktop: markIIDesktop,
      tablet: markIITablet,
      mobile: markIIMobile,
      path: "/markII",
    },
  },
  {
    name: "XX59 ",
    images: {
      desktop: xDesktop,
      tablet: xITablet,
      mobile: xMobile,
      path: "/thirdMark",
    },
  },
  {
    name: "ZX9 SPEAKER",
    images: {
      desktop: speakerDesktop,
      tablet: speakerTablet,
      mobile: speakerMobile,
      path: "/firtsSpeaker",
    },
  },
];

const FristMarkAlso = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[571px] md:w-[691px] md:h-[563px] w-[327px] h-[983px] flex flex-col justify-between items-center mx-auto my-[6rem] ">
      <h3 className="uppercase font-bold md:text-[32px] md:leading-[36px] tracking-[1.14px] text-[24px] leading-[36px] md:tracking-[0.86px]">
        You may also like
      </h3>
      <div className="md:h-[471px] w-full h-[907px] flex md:flex-row flex-col items-center justify-between ">
        {products.map((product, index) => (
          <div
            key={index}
            className="lg:w-[350px] lg:h-[471px] md:w-[223px] md:h-[471px] w-[327px] h-[265px] flex flex-col justify-between items-center"
          >
            <img
              className="w-[350px] h-[318px] object-cover lg:block hidden rounded-[8px]"
              src={product.images.desktop}
              alt={`${product.name} desktop`}
            />
            <img
              className="w-[223px] h-[318px] object-cover lg:hidden md:block hidden rounded-[8px]"
              src={product.images.tablet}
              alt={`${product.name} tablet`}
            />
            <img
              className="w-[327px] h-[120px] object-cover md:hidden block rounded-[8px]"
              src={product.images.mobile}
              alt={`${product.name} mobile`}
            />
            <h3 className="text-[24px] tracking-[1.71px] font-bold">
              {product.name}
            </h3>
            <Link to={product.images.path}>
              <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold">
                See Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FristMarkAlso;
