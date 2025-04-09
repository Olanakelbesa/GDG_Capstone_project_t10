import katana from "../assets/katana.png";
import taravava from "../assets/taravava.png";
import bigui from "../assets/bigui.png";
import booking from "../assets/booking.png";
import jakmaen from "../assets/jakmaen.png";

const Partner = () => {
  return (
    <div className="w-full py-12 sm:py-16 md:py-20 px-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-[630px] flex flex-col justify-center items-center mb-6 sm:mb-8">
        <h1 className="text-center text-2xl sm:text-5xl font-bold mb-2 sm:mb-3">
          Our tour partner
        </h1>
        <span className="text-center text-gray-500 text-sm sm:text-base px-4">
          there are many passage of lorem ipsum availaible the majority has
          suffered alternation.
        </span>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
        <img
          src={katana}
          alt="Katana"
          className="h-6 sm:h-8 md:h-10 object-contain"
        />
        <img
          src={taravava}
          alt="Travava"
          className="h-6 sm:h-8 md:h-10 object-contain"
        />
        <img
          src={bigui}
          alt="Bigui"
          className="h-6 sm:h-8 md:h-10 object-contain"
        />
        <img
          src={booking}
          alt="Booking.com"
          className="h-6 sm:h-8 md:h-10 object-contain"
        />
        <img
          src={jakmaen}
          alt="Jakmaen"
          className="h-6 sm:h-8 md:h-10 object-contain"
        />
      </div>
    </div>
  );
};

export default Partner;
