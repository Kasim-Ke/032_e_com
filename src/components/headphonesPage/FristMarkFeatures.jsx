const FristMarkFeatures = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[318px] md:w-[689px] md:h-[595px] w-[327px] h-[840px] mx-auto flex flex-col lg:flex-row  justify-between ">
      <div className="lg:w-[635px] lg:h-full w-full md:h-[318px] h-[535px] flex flex-col justify-between items-start ">
        <h2 className=" uppercase font-bold md:text-[32px] md:leading-[36px] tracking-[1.14px] text-[24px] leading-[36px] md:tracking-[0.86px] ">
          FEATURES
        </h2>
        <p className="opacity-50 ">
          As the headphones all others are measured against, the XX99 Mark I
          demonstrates over five decades of audio expertise, redefining the
          critical listening experience. This pair of closed-back headphones are
          made of industrial, aerospace-grade materials to emphasize durability
          at a relatively light weight of 11 oz.
        </p>
        <p className="opacity-50 ">
          From the handcrafted microfiber ear cushions to the robust metal
          headband with inner damping element, the components work together to
          deliver comfort and uncompromising sound. Its closed-back design
          delivers up to 27 dB of passive noise cancellation, reducing resonance
          by reflecting sound to a dedicated absorber. For connectivity, a
          specially tuned cable is included with a balanced gold connector.
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
            1x
            <span className="pl-5 text-black opacity-50">Headphone Unit</span>
          </p>
          <p className="text-[#D87D4A] font-bold">
            2x
            <span className="pl-5 text-black opacity-50">
              Replacement Earcups
            </span>
          </p>
          <p className="text-[#D87D4A] font-bold">
            1x <span className="pl-5 text-black opacity-50">User Manual</span>
          </p>
          <p className="text-[#D87D4A] font-bold">
            1x
            <span className="pl-5 text-black opacity-50">
              3.5mm 5m Audio Cable
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FristMarkFeatures;
