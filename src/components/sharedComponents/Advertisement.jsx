import adDekstop from "./shared/desktop/image-best-gear.jpg";
import adTablet from "./shared/tablet/image-best-gear.jpg";
import adMobile from "./shared/mobile/image-best-gear.jpg";

export const Advertisement = () => {
  return (
    <div className="lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] mx-auto flex items-center justify-center lg:my-[10rem] my-[5rem] ">
      <div className="lg:w-[1110px] lg:h-[588px] md:w-[689px] md:h-[633px] w-[327px] h-[698px]  flex lg:flex-row flex-col-reverse justify-between">
        <div className="lg:w-[570px]  lg:h-full md:h-[333px]  w-full flex lg:justify-start lg:items-center  items-end  justify-center">
          <div className="lg:w-[445px] lg:h-[295px] md:w-[573px] md:h-[270px] w-full h-[366px] bg-white flex flex-col justify-between lg:items-start ">
            <h1 className="md:text-[40px] md:leading-[44px] md:tracking-[1.43px] text-[28px] tracking-[1px]   text-black font-bold uppercase lg:text-left text-center ">
              Bringing you the <span className="text-[#D87D4A]"> best </span>
              <br className="lg:hidden md:block hidden " />
              audio gear
            </h1>
            <p className="text-[15px] leading-[25px] font-medium  text-gray-500 lg:text-left text-center  ">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
        <div>
          <img
            className="object-cover lg:block hidden rounded-[8px]"
            src={adDekstop}
            alt="adDekstop"
          />
          <img
            className="object-cover lg:hidden md:block hidden rounded-[8px]"
            src={adTablet}
            alt="adTablet"
          />
          <img
            className="object-cover md:hidden block rounded-[8px]"
            src={adMobile}
            alt="adMobile"
          />
        </div>
      </div>
    </div>
  );
};
