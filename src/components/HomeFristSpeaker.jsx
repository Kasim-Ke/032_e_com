import speakerDesktop from "../assets/home/desktop/image-speaker-zx9.png";

import speakerTablet from "../assets/home/tablet/image-speaker-zx9.png";

import speakerMobile from "../assets/home/mobile/image-speaker-zx9.png";

import ring from "../assets/home/desktop/pattern-circles.svg";

function HomeFristSpeaker() {
  return (
    <div className="relative lg:max-w-[1440px] md:max-w-[768px] max-w-[375px] mx-auto flex items-center justify-center my-[48px]">
      <img
        className=" absolute z-10 lg:left-[-50px] lg:bottom-[-300px] md:bottom-[150px] bottom-[250px] "
        src={ring}
        alt="ring"
      />
      <div className="   lg:w-[1110px] lg:h-[560px] md:w-[689px] md:h-[720px] w-[327px] h-[600px] bg-[#D87D4A] rounded-[8px] flex lg:items-end items-center justify-center">
        <div className="relative flex lg:justify-end justify-between items-center lg:flex-row flex-col lg:w-[895px] lg:h-[465px] md:w-[350px] md:h-[604px] w-[280px] h-[490px] ">
          <img
            className="absolute  left-3 w-[410px] h-[464px] z-20 object-cover lg:block hidden"
            src={speakerDesktop}
            alt="speakerDesktop"
          />
          <img
            className="object-cover  lg:hidden md:block hidden w-[197px] h-[237px] z-20"
            src={speakerTablet}
            alt="speakerTablet"
          />

          <img
            className="object-cover md:hidden block w-[172px] h-[207px] "
            src={speakerMobile}
            alt="speakerMobile"
          />
          <div className=" flex flex-col lg:items-start justify-between  items-center lg:w-[349px] md:h-[303px] md:w-[350px]  lg:left-[165px] lg:top-[225px] md:left-[194px] md:top-[216px] w-[280px] h-[251px] left-[23px] top-[198px] text-white  ">
            <h1 className="font-bold md:text-[56px] md:leading-[58px] text-[36px] leading-[40px] tracking-[1.29px] md:tracking-[2px] uppercase lg:text-left text-center">
              ZX9 <span className="block">SPEAKER</span>
            </h1>
            <p className="lg:leading-[25px] lg:mr-4 lg:text-left text-center ">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="bg-[#000000]  z-30  hover:bg-[#4C4C4C]">
              See Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFristSpeaker;
