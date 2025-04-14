import NavBar from "./NavBar";

import headerImageURL from "../assets/header.png";

const Header = () => {
  return (
    // Added min-h-screen in case content pushes it taller, h-screen ensures it tries to be viewport height
    <header className="relative w-full h-screen min-h-screen">
      {/* Background Image Div */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        // Correctly set the backgroundImage style using the imported URL
        style={{ backgroundImage: `url(${headerImageURL})` }}
      ></div>

      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Navbar Container (using relative z-index for context) */}
      {/* Consider putting z-index on NavBar itself if needed */}
      <div className="relative z-30">
        {" "}
        {/* Increased z-index to be above overlay and text */}
        <NavBar />
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-4">
        {" "}
        {/* Added padding */}
        <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
          Travel Packages
        </h1>
        <p className="mt-4 text-white text-lg md:text-xl drop-shadow-sm max-w-xl">
          Discover breathtaking destinations and unforgettable adventures
        </p>
      </div>
    </header>
  );
};

export default Header;
