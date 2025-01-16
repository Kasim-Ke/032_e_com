const SecondSpeakerFeature = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[318px] md:w-[689px] md:h-[595px] w-[327px] h-[840px] mx-auto flex flex-col lg:flex-row  justify-between ">
      <div className="lg:w-[635px] lg:h-full w-full md:h-[318px] h-[535px] flex flex-col justify-between items-start ">
        <h2 className=" uppercase font-bold md:text-[32px] md:leading-[36px] tracking-[1.14px] text-[24px] leading-[36px] md:tracking-[0.86px] ">
          FEATURES
        </h2>
        <p className="opacity-50 ">
          Reap the advantages of a flat diaphragm tweeter cone. This provides a
          fast response rate and excellent high frequencies that lower tiered
          bookshelf speakers cannot provide. The woofers are made from aluminum
          that produces a unique and clear sound. XLR inputs allow you to
          connect to a mixer for more advanced usage.
        </p>
        <p className="opacity-50 ">
          The ZX7 speaker is the perfect blend of stylish design and high
          performance. It houses an encased MDF wooden enclosure which minimises
          acoustic resonance. Dual connectivity allows pairing through bluetooth
          or traditional optical and RCA input. Switch input sources and control
          volume at your finger tips with the included wireless remote. This
          versatile speaker is equipped to deliver an authentic listening
          experience.
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
              3.5mm 7.5m Audio Cable
            </span>
          </p>
          <p className="text-[#D87D4A] font-bold">
            1x
            <span className="pl-5 text-black opacity-50">
              7.5m Optical Cable
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSpeakerFeature;
