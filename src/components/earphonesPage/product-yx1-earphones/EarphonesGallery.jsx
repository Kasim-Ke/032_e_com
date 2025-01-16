import fDektop from "./desktop/image-gallery-1.jpg";
import fTablet from "./tablet/image-gallery-1.jpg";
import fmobile from "./mobile/image-gallery-1.jpg";
import sDektop from "./desktop/image-gallery-2.jpg";
import sTablet from "./tablet/image-gallery-2.jpg";
import smobile from "./mobile/image-gallery-2.jpg";
import tDektop from "./desktop/image-gallery-3.jpg";
import tTablet from "./tablet/image-gallery-3.jpg";
import tmobile from "./mobile/image-gallery-3.jpg";

const EarphonesGallery = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[592px] md:w-[690px] md:h-[368px] w-[327px] h-[756px] flex md:flex-row flex-col mx-auto justify-between my-[6rem]">
      <div className="lg:w-[445px] h-[368px] md:h-full justify-between flex flex-col">
        <img
          className="lg:block hidden rounded-[8px]"
          src={fDektop}
          alt="fDektop"
        />
        <img
          className="lg:hidden md:block hidden w-[277px] h-[174px] rounded-[8px]"
          src={fTablet}
          alt="fTablet"
        />
        <img
          className="md:hidden block rounded-[8px]"
          src={fmobile}
          alt="fmobile"
        />

        <img
          className="lg:block hidden rounded-[8px]"
          src={sDektop}
          alt="sDektop"
        />
        <img
          className="lg:hidden md:block hidden w-[277px] h-[174px] rounded-[8px]"
          src={sTablet}
          alt="sTablet"
        />
        <img
          className="md:hidden block rounded-[8px]"
          src={smobile}
          alt="smobile"
        />
      </div>
      <img
        className="lg:block hidden rounded-[8px]"
        src={tDektop}
        alt="tDektop"
      />
      <img
        className="lg:hidden md:block hidden rounded-[8px]"
        src={tTablet}
        alt="tTablet"
      />
      <img
        className="md:hidden block rounded-[8px]"
        src={tmobile}
        alt="tmobile"
      />
    </div>
  );
};

export default EarphonesGallery;
