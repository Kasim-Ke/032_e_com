import speakerDektop from "../assets/home/desktop/image-speaker-zx7.jpg";

import speakerTablet from "../assets/home/tablet/image-speaker-zx7.jpg";

import speakerMobile from "../assets/home/mobile/image-speaker-zx7.jpg";

import earDektop from "../assets/home/desktop/image-earphones-yx1.jpg";
import earTablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import earMobile from "../assets/home/mobile/image-earphones-yx1.jpg";

const HomeSecondSpeaker = () => {
  return (
    <div className="lg:max-w-[1440px]  md:max-w-[768px] max-w-[375px] mx-auto flex items-center justify-center my-[48px] flex-col ">
      <div className=" relative lg:w-[1110px] lg:h-[688px] md:w-[689px] md:h-[672px] w-[327px] h-[768px] rounded-[8px] flex items-start flex-col  justify-between z-40">
        <img
          className="object-cover lg:block hidden rounded-[8px]"
          src={speakerDektop}
          alt="speakerDektop"
        />
        <img
          className="object-cover lg:hidden md:block hidden rounded-[8px]"
          src={speakerTablet}
          alt="speakerTablet"
        />
        <img
          className="object-cover md:hidden block rounded-[8px]"
          src={speakerMobile}
          alt="speakerMobile"
        />
        <div className="absolute top-[100px] lg:left-[100px] w-[204px] h-[118px] md:left-[80px] left-[20px]   flex flex-col justify-between ">
          <h1 className="font-bold text-[28px] tracking-[2px]">ZX7 SPEAKER</h1>
          <button className="w-[160px] h-[48px] border-[2px] border-[#000] hover:bg-[#000]   hover:text-white">
            See Product
          </button>
        </div>

        <div className="lg:w-[1110px] lg:h-[320px] md:w-[689px] md:h-[320px] w-[327px] h-[424px] md:flex-row flex-col flex justify-between z-40">
          <div className="lg:w-[540px] md:h-[320px] md:w-[340px] w-[327px] h-[200px] rounded-[8px]  ">
            <img
              className="object-cover lg:block hidden rounded-[8px] "
              src={earDektop}
              alt="speakerDektop"
            />
            <img
              className="object-cover lg:hidden md:block hidden rounded-[8px]"
              src={earTablet}
              alt="speakerTablet"
            />
            <img
              className="object-cover md:hidden block rounded-[8px]"
              src={earMobile}
              alt="speakerMobile"
            />
          </div>
          <div className=" relative lg:w-[540px] md:h-[320px] md:w-[340px] w-[327px] h-[200px]  rounded-[8px] bg-[#F1F1F1] ">
            <div className="absolute md:top-[100px] lg:left-[100px] w-[247px] h-[118px] md:left-[50px] left-[20px] top-[30px]   flex flex-col justify-between ">
              <h1 className="font-bold text-[28px] tracking-[2px]">
                YX1 EARPHONES
              </h1>
              <button className="w-[160px] h-[48px] border-[2px] border-[#000] hover:bg-[#000]   hover:text-white">
                See Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSecondSpeaker;
