import markIDesktop from "./product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";

import markIablet from "./product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";

import markIPhone from "./product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";

const HeadphonesSecond = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[560px] md:w-[689px] md:h-[706px] w-[327px] h-[724px]  lg:flex-row my-[8rem] flex-col-reverse mx-auto flex items-center justify-between  ">
      <div className=" flex flex-col lg:items-start justify-between items-center  lg:w-[445px] lg:h-[308px] md:w-[572px] md:h-[302px]  w-[328px] h-[340px]     ">
        <h1 className="font-bold lg:text-start md:text-[40px] md:leading-[44px] text-[28px]  tracking-[1px] md:tracking-[1.43px] uppercase text-center md:mx-5 lg:mx-0 ">
          XX99 Mark I Headphones
        </h1>
        <p className="text-[15px] opacity-50 lg:leading-[25px] lg:text-left text-center md:mx-10 lg:mx-0 lg:mr-5 ">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <button className="bg-[#D87D4A]  hover:bg-[#FBAF85] text-white">
          See Product
        </button>
      </div>
      <div>
        <img
          className="w-[540px] h-[560px] object-cover lg:block hidden  rounded-[8px]"
          src={markIDesktop}
          alt="markIDesktop"
        />
        <img
          className="w-full h-[352px] object-cover lg:hidden md:block  rounded-[8px] hidden"
          src={markIablet}
          alt="markIablet"
        />
        <img
          className="w-[327px] h-[352px] object-cover md:hidden  rounded-[8px] block"
          src={markIPhone}
          alt="markIPhone"
        />
      </div>
    </div>
  );
};

export default HeadphonesSecond;
