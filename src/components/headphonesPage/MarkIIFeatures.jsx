const MarkIIFeatures = () => {
  return (
    <div className="lg:w-[1110px] lg:h-[318px] md:w-[689px] md:h-[595px] w-[327px] h-[840px] mx-auto flex flex-col lg:flex-row  justify-between ">
      <div className="lg:w-[635px] lg:h-full w-full md:h-[318px] h-[535px] flex flex-col justify-between items-start ">
        <h2 className=" uppercase font-bold md:text-[32px] md:leading-[36px] tracking-[1.14px] text-[24px] leading-[36px] md:tracking-[0.86px] ">
          FEATURES
        </h2>
        <p className="opacity-50 ">
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you’re taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you’ll
          never miss a beat.
        </p>
        <p className="opacity-50 ">
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
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
          <p className="text-[#D87D4A] font-bold">
            1x <span className="pl-5 text-black opacity-50">Travel Bag</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarkIIFeatures;
