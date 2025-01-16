import { Link } from "react-router-dom";

import markIDesktop from "../../headphonesPage/product-xx59-headphones/desktop/image-product.jpg";
import markITablet from "../../headphonesPage/product-xx59-headphones/tablet/image-product.jpg";
import markIMobile from "../../headphonesPage/product-xx59-headphones/mobile/image-product.jpg";

import xDesktop from "../../headphonesPage/product-xx99-mark-one-headphones copy/desktop/image-product.jpg";
import xITablet from "../../headphonesPage/product-xx99-mark-one-headphones copy/tablet/image-product.jpg";
import xMobile from "../../headphonesPage/product-xx99-mark-one-headphones copy/mobile/image-product.jpg";

import speakerDesktop from "../product-zx9-speaker/desktop/image-product.jpg";
import speakerTablet from "../product-zx9-speaker/desktop/image-product.jpg";
import speakerMobile from "../product-zx9-speaker/desktop/image-product.jpg";

const products = [
  {
    name: "ZX7 SPEAKER",
    images: {
      desktop: speakerDesktop,
      tablet: speakerTablet,
      mobile: speakerMobile,
    },
    path: "/secondSpeaker",
  },
  {
    name: "XX99 MARK I",
    images: {
      desktop: xDesktop,
      tablet: xITablet,
      mobile: xMobile,
    },
    path: "/thirdMark", // Define a unique path for this product
  },
  {
    name: "XX59",
    images: {
      desktop: markIDesktop,
      tablet: markITablet,
      mobile: markIMobile,
    },
    path: "/fristMark",
  },
];

const SecondSpeakerAlso = () => {
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
            <Link to={product.path}>
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

export default SecondSpeakerAlso;
