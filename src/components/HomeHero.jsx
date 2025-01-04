import heroDektop from "../assets/home/desktop/image-hero.jpg";
import heroTablet from "../assets/home/tablet/image-header.jpg";

import heroMobile from "../assets/home/mobile/image-header.jpg";

const HomeHero = () => {
  return (
    <div className=" relative lg:max-w-[1440px] md:max-w-[768px] w-full mx-auto flex items-center justify-center  ">
      <div className="relative mx-auto ">
        <hr className="absolute lg:w-[1110px] md:w-[689px] lg:left-[165px] top-[90px] md:left-[39px]  w-full border-t border-[#979797] opacity-20" />

        <img
          className="object-cover lg:block hidden"
          src={heroDektop}
          alt="heroDektop"
        />
        <img
          className="object-cover lg:hidden md:block hidden"
          src={heroTablet}
          alt="heroTablet"
        />
        <img
          className="object-cover md:hidden block"
          src={heroMobile}
          alt="heroMobile"
        />
        <div className="absolute flex flex-col lg:items-start justify-between items-center  lg:w-[398px] md:h-[346px] md:w-[379px]  lg:left-[165px] lg:top-[225px] md:left-[194px] md:top-[216px] w-[328px] h-[290px] left-[23px] top-[198px] text-white  ">
          <h3 className="text-[14px] tracking-[10px] lg:px-3 text-gray-500">
            NEW PRODUCT
          </h3>
          <h1 className="font-bold md:text-[56px] md:leading-[58px] text-[36px] leading-[40px] tracking-[1.29px] md:tracking-[2px] uppercase text-center">
            XX99 Mark II Headphones
          </h1>
          <p className="lg:leading-[25px] lg:mx-2 lg:text-left text-center ">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-[#D87D4A]  hover:bg-[#FBAF85]">
            See Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
