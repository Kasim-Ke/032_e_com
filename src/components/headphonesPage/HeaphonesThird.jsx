import markDesktop from "./product-xx59-headphones/desktop/image-category-page-preview.jpg";

import markablet from "./product-xx59-headphones/tablet/image-category-page-preview.jpg";

import marIPhone from "./product-xx59-headphones/mobile/image-category-page-preview.jpg";

const HeaphonesThird = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[560px] md:w-[689px] md:h-[706px] w-[327px] h-[724px]  lg:flex-row my-[8rem] flex-col mx-auto flex items-center justify-between  ">
      <div className="  ">
        <img
          className="w-[540px] h-[560px] object-cover lg:block hidden"
          src={markDesktop}
          alt="markDesktop"
        />
        <img
          className="w-full h-[352px] object-cover lg:hidden md:block hidden"
          src={markablet}
          alt="markablet"
        />
        <img
          className="w-[327px] h-[352px] object-cover md:hidden block"
          src={marIPhone}
          alt="marIPhone"
        />
      </div>
      <div className=" flex flex-col lg:items-start justify-between items-center  lg:w-[445px] md:w-[572px] md:h-[302px]  w-[328px] h-[340px]   ">
        <h1 className="font-bold lg:text-start md:text-[40px] md:leading-[44px] text-[28px]  tracking-[1px] md:tracking-[1.43px] uppercase text-center md:mx-5 lg:mx-0 ">
          XX59 Headphones
        </h1>
        <p className="text-[15px] opacity-50 lg:leading-[25px] lg:mr-1 lg:text-left text-center md:mx-4 lg:mx-0   ">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <button className="bg-[#D87D4A]  hover:bg-[#FBAF85] text-white">
          See Product
        </button>
      </div>
    </div>
  );
};

export default HeaphonesThird;
