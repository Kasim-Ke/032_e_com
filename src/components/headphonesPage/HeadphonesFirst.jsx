import { Link } from "react-router";

import markIIDesktop from "./product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

import markIITablet from "./product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";

import markIIPhone from "./product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";

const HeadphonesFirst = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[560px] md:w-[689px] md:h-[706px] w-[327px] h-[724px]  lg:flex-row my-[8rem] flex-col mx-auto flex items-center justify-between  ">
      <div className="  ">
        <img
          className="w-[540px] h-[560px] object-cover lg:block hidden  rounded-[8px]"
          src={markIIDesktop}
          alt="markIIDesktop"
        />
        <img
          className="w-full h-[352px] object-cover lg:hidden md:block hidden  rounded-[8px]"
          src={markIITablet}
          alt="markIITablet"
        />
        <img
          className="w-[327px] h-[352px] object-cover md:hidden block  rounded-[8px]"
          src={markIIPhone}
          alt="markIIPhone"
        />
      </div>
      <div className=" flex flex-col lg:items-start justify-between items-center  lg:w-[445px] md:w-[572px] md:h-[302px]  w-[328px] h-[340px]   ">
        <h3 className="text-[14px] tracking-[10px] text-[#D87D4A]">
          NEW PRODUCT
        </h3>
        <h1 className="font-bold lg:text-start md:text-[40px] md:leading-[44px] text-[28px]  tracking-[1px] md:tracking-[1.43px] uppercase text-center md:mx-5 lg:mx-0 ">
          XX99 Mark II Headphones
        </h1>
        <p className="text-[15px] opacity-50 lg:leading-[25px] lg:mr-1 lg:text-left text-center md:mx-4 lg:mx-0   ">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Link to="/markII">
          <button className="bg-[#D87D4A]  hover:bg-[#FBAF85] text-white">
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeadphonesFirst;
