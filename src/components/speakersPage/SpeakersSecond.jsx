import { Link } from "react-router-dom";

import speakerDesktop from "./product-zx7-speaker/desktop/image-product.jpg";

import speakerblet from "./product-zx7-speaker/desktop/image-product.jpg";

import speakerPhone from "./product-zx7-speaker/desktop/image-product.jpg";

const SpeakersSecond = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[560px] md:w-[689px] md:h-[706px] w-[327px] h-[724px]  lg:flex-row my-[8rem] flex-col-reverse mx-auto flex items-center justify-between  ">
      <div className=" flex flex-col lg:items-start justify-between items-center  lg:w-[445px] lg:h-[308px] md:w-[572px] md:h-[302px]  w-[328px] h-[340px]    ">
        <h1 className="font-bold lg:text-start md:text-[40px] md:leading-[44px] text-[28px]  tracking-[1px] md:tracking-[1.43px] uppercase text-center md:mx-5 lg:mx-0 ">
          XX99 Mark I Headphones
        </h1>
        <p className="text-[15px] opacity-50 lg:leading-[25px] lg:text-left text-center md:mx-10 lg:mx-0 lg:mr-5  ">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <Link to="/secondSpeaker">
          <button className="bg-[#D87D4A]  hover:bg-[#FBAF85] text-white">
            See Product
          </button>
        </Link>
      </div>
      <div>
        <img
          className="w-[540px] h-[560px] object-cover lg:block hidden  rounded-[8px]"
          src={speakerDesktop}
          alt="speakerDesktop"
        />
        <img
          className="w-full h-[352px] object-cover lg:hidden md:block hidden  rounded-[8px]"
          src={speakerblet}
          alt="speakerblet"
        />
        <img
          className="w-[327px] h-[352px] object-cover md:hidden block  rounded-[8px]"
          src={speakerPhone}
          alt="speakerPhone"
        />
      </div>
    </div>
  );
};

export default SpeakersSecond;
