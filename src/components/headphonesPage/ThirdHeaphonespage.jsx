import { useState } from "react";
import { Link } from "react-router";

import markIIDesktop from "./product-xx59-headphones/desktop/image-category-page-preview.jpg";
import markIITablet from "./product-xx59-headphones/tablet/image-category-page-preview.jpg";
import markIIPhone from "./product-xx59-headphones/mobile/image-category-page-preview.jpg";

const ThirdHeaphonespage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <div className="relative lg:w-[1110px] lg:h-[560px] md:w-[689px] md:h-[706px] w-[327px] h-[724px] lg:flex-row my-[8rem] flex-col mx-auto flex items-center justify-between">
      <button
        onClick={() => window.history.back()}
        className="absolute font-bold top-[-88px] left-[-40px] opacity-50 hover:opacity-100 text-[17px] capitalize "
      >
        Go Back
      </button>
      <Link
        to="/"
        className="absolute font-bold top-[-80px] right-[10px] opacity-50 hover:opacity-100"
      >
        Go Home
      </Link>
      <div>
        <img
          className="w-[540px] h-[560px] object-cover lg:block hidden rounded-[8px]"
          src={markIIDesktop}
          alt="markIIDesktop"
        />
        <img
          className="w-full h-[352px] object-cover lg:hidden md:block hidden rounded-[8px]"
          src={markIITablet}
          alt="markIITablet"
        />
        <img
          className="w-[327px] h-[352px] object-cover md:hidden block rounded-[8px]"
          src={markIIPhone}
          alt="markIIPhone"
        />
      </div>
      <div className="flex flex-col lg:items-start justify-between items-center lg:w-[445px] md:w-[572px] md:h-[407px] w-[328px] h-[340px]">
        <h1 className="font-bold lg:text-start md:text-[40px] md:leading-[44px] text-[28px] tracking-[1px] md:tracking-[1.43px] uppercase text-center md:mx-5 lg:mx-0 my-5">
          XX59 <span className="block">Headphones</span>
        </h1>
        <p className="text-[15px] opacity-50 lg:leading-[25px] lg:mr-1 lg:text-left text-center md:mx-4 lg:mx-0">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <h5 className="font-bold text-[18px]">€ 899</h5>
        <div className="flex items-center justify-between w-[296px] ">
          <div className=" w-[120px] h-[48px] bg-[#F1F1F1] flex items-center justify-between  ">
            <butto
              className="hover:text-[#D87D4A] font-bold w-[40px]  h-full flex items-center justify-center cursor-pointer"
              onClick={handleDecrement}
            >
              -
            </butto>
            <p className="font-bold  ">{quantity}</p>
            <button
              className="hover:text-[#D87D4A] font-bold h-full flex items-center justify-center w-[40px]  "
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button className="bg-[#D87D4A]  hover:bg-[#FBAF85] text-white px-4 py-2 rounded">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdHeaphonespage;
