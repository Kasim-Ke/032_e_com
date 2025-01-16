const FirstSpeakerFeatures = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[318px] md:w-[689px] md:h-[595px] w-[327px] h-[840px] mx-auto flex flex-col lg:flex-row  justify-between ">
      <div className="lg:w-[635px] lg:h-full w-full md:h-[318px] h-[535px] flex flex-col justify-between items-start ">
        <h2 className=" uppercase font-bold md:text-[32px] md:leading-[36px] tracking-[1.14px] text-[24px] leading-[36px] md:tracking-[0.86px] ">
          FEATURES
        </h2>
        <p className="opacity-50 ">
          Connect via Bluetooth or nearly any wired source. This speaker
          features optical, digital coaxial, USB Type-B, stereo RCA, and stereo
          XLR inputs, allowing you to have up to five wired source devices
          connected for easy switching. Improved bluetooth technology offers
          near lossless audio quality at up to 328ft (100m).
        </p>
        <p className="opacity-50 ">
          Discover clear, more natural sounding highs than the competition with
          ZX9’s signature planar diaphragm tweeter. Equally important is its
          powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass
          unit. You’ll be able to enjoy equal sound quality whether in a large
          room or small den. Furthermore, you will experience new sensations
          from old songs since it can respond to even the subtle waveforms.
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
            <span className="pl-5 text-black opacity-50">Speaker Unit</span>
          </p>
          <p className="text-[#D87D4A] font-bold">
            2x
            <span className="pl-5 text-black opacity-50">
              Speaker Cloth Panel
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
          <p className="text-[#D87D4A] font-bold">
            1x
            <span className="pl-5 text-black opacity-50">
              10m Optical Cable
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSpeakerFeatures;
