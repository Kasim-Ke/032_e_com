const EarphonesFeatures = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[318px] md:w-[689px] md:h-[595px] w-[327px] h-[840px] mx-auto flex flex-col lg:flex-row  justify-between ">
      <div className="lg:w-[635px] lg:h-full w-full md:h-[318px] h-[535px] flex flex-col justify-between items-start ">
        <h2 className=" uppercase font-bold md:text-[32px] md:leading-[36px] tracking-[1.14px] text-[24px] leading-[36px] md:tracking-[0.86px] ">
          FEATURES
        </h2>
        <p className="opacity-50 ">
          Experience unrivalled stereo sound thanks to innovative acoustic
          technology. With improved ergonomics designed for full day wearing,
          these revolutionary earphones have been finely crafted to provide you
          with the perfect fit, delivering complete comfort all day long while
          enjoying exceptional noise isolation and truly immersive sound.
        </p>
        <p className="opacity-50 ">
          The YX1 Wireless Earphones features customizable controls for volume,
          music, calls, and voice assistants built into both earbuds. The new
          7-hour battery life can be extended up to 28 hours with the charging
          case, giving you uninterrupted play time. Exquisite craftsmanship with
          a splash resistant design now available in an all new white and grey
          color scheme as well as the popular classic black.
        </p>
      </div>
      <div
        className="lg:w-[350px] lg:h-[225px] md:w-[550px] md:h-[157px] w-full h-[217px]
                      flex lg:flex-col md:flex-row flex-col justify-between items-start "
      >
        <h2 className="md:text-[32px] md:leading-[36px] md:tracking-[1.14px] text-[24px] leading-[36px] tracking-[0.86px] uppercase font-bold">
          in the box
        </h2>
        <div className="lg:w-[250px] lg:h-[159px] md:w-[250px] md:h-[157px] w-[250px] h-[157px] flex justify-between flex-col ">
          <p className="text-[#D87D4A] font-bold">
            2x
            <span className="pl-5 text-black opacity-50">Earphone Unit</span>
          </p>
          <p className="text-[#D87D4A] font-bold">
            6x
            <span className="pl-5 text-black opacity-50">
              Multi-size Earplugs
            </span>
          </p>
          <p className="text-[#D87D4A] font-bold">
            1x
            <span className="pl-5 text-black opacity-50">User Manual</span>
          </p>
          <p className="text-[#D87D4A] font-bold">
            1x
            <span className="pl-5 text-black opacity-50">
              USB-C Charging Cable
            </span>
          </p>
          <p className="text-[#D87D4A] font-bold">
            1x
            <span className="pl-5 text-black opacity-50">Travel Pouch</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarphonesFeatures;
