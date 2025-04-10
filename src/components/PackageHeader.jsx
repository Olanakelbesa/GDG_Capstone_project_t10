import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/header.png')" }}
      ></div>

      {/* Optional dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Navbar (on top) */}
      <div className="relative z-20">
        <NavBar />
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center h-full">
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
