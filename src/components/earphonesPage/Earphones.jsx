import { Link } from "react-router";

import earDesktop from "./product-yx1-earphones/desktop/image-category-page-preview.jpg";

import eartablet from "./product-yx1-earphones/tablet/image-category-page-preview.jpg";

import speakerPhone from "./product-yx1-earphones/mobile/image-category-page-preview.jpg";

const Earphones = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[560px] md:w-[689px] md:h-[706px] w-[327px] h-[724px]  lg:flex-row my-[8rem] flex-col mx-auto flex items-center justify-between  ">
      <div>
        <img
          className="w-[540px] h-[560px] object-cover lg:block hidden  rounded-[8px]"
          src={earDesktop}
          alt="earDesktop"
        />
        <img
          className="w-full h-[352px] object-cover lg:hidden md:block hidden  rounded-[8px]"
          src={eartablet}
          alt="eartablet"
        />
        <img
          className="w-[327px] h-[352px] object-cover md:hidden block  rounded-[8px]"
          src={speakerPhone}
          alt="speakerPhone"
        />
      </div>
      <div className=" flex flex-col lg:items-start justify-between items-center  lg:w-[445px] md:w-[572px] md:h-[343px]  w-[328px] h-[340px]   ">
        <h3 className="text-[14px] tracking-[10px] text-[#D87D4A]">
          NEW PRODUCT
        </h3>
        <h1 className="font-bold lg:text-start md:text-[40px] md:leading-[44px] text-[28px]  tracking-[1px] md:tracking-[1.43px] uppercase text-center md:mx- lg:mx-0 ">
          YX1 WIRELESS <span className="block">EARPHONES</span>
        </h1>
        <p className="text-[15px] opacity-50 lg:leading-[25px] lg:mr-1 lg:text-left text-center md:mx-4 lg:mx-0   ">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <Link to="/earphonesPage">
          <button className="bg-[#D87D4A]  hover:bg-[#FBAF85] text-white">
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Earphones;
