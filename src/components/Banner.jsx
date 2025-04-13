import suitcaseImage from "../assets/suite-case.jpg";

const Banner = () => {
  return (
    <div className="w-full h-screen relative flex items-center justify-start px-4 sm:px-6 md:px-10">
      {/* Background Image */}
      <img
        src={suitcaseImage}
        alt="Scenic Background"
        className="absolute inset-0 w-full h-full object-cover blur-[1px] -z-10 blur-2xs"
      />

      {/* Content */}
      <div className="flex font-['poppins'] w-full max-w-[614px] flex-col pt-5 items-start text-start gap-6 md:gap-10 lg:gap-15">
        <div className="gap-4 md:gap-8 mt-10 md:mt-20">
          <h1 className="text-[#FFFFFF] font-['poppins'] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Make in <br /> your journey.
          </h1>
          <p className="text-[#CFCFCF] text-xs sm:text-sm mt-3 md:mt-5">
            Explore the world with what you love beautiful{" "}
            <br className="hidden sm:block" />
            natural beauty.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center bg-none sm:bg-white rounded-full shadow-md px-2 py-2 gap-2 sm:gap-4">
          <select className="sm:w-auto text-white sm:text-gray-700 bg-transparent px-2 py-2 outline-none">
            <option>Location</option>
          </select>
          <select className="sm:w-auto text-white sm:text-gray-700 bg-transparent px-2 py-2 outline-none">
            <option>Date</option>
          </select>
          <select className="sm:w-auto text-white sm:text-gray-700 bg-transparent px-2 py-2 outline-none">
            <option>People</option>
          </select>
          <button className="sm:w-auto !bg-black text-white font-semibold px-6 py-2 rounded-full mt-2 sm:mt-0">
            Explore now
          </button>
        </div>

        {/* Popular Places */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
          <h2 className="text-white font-semibold">Popular Place :</h2>
          <p className="text-white text-xs sm:text-sm opacity-80">
            Bali, Istanbul, Rome, Paris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
