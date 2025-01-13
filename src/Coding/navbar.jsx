import Sort from "../assets/Sort.png";
import Oip from "../assets/Oip.png";

const Navbar = () => {
  return (
    <nav className="w-full h-36 flex justify-between items-center px-28 xl:px-28 lg:px-16 md:px-8">
      <img src={Oip} alt="Enver Logo" className="w-32" />
      <div id="center" className="flex gap-10">
        <a
          href=""
          className="text-lg font-light text-[#5454D4] block md:hidden lg:block min-[320px]:hidden"
        >
          Home
        </a>
        <a
          href=""
          className="text-lg font-light text-white block md:hidden lg:block min-[320px]:hidden"
        >
          Services
        </a>
        <a
          href=""
          className="text-lg font-light text-white block md:hidden lg:block min-[320px]:hidden"
        >
          Our Project
        </a>
        <a
          href=""
          className="text-lg font-light text-white block md:hidden lg:block min-[320px]:hidden"
        >
          About Us
        </a>
      </div>
      <div className="flex items-center gap-8">
        <button className="text-white border w-40 h-11 rounded-md border-white block md:hidden lg:block min-[320px]:hidden transition-transform duration-300 hover:scale-110">
          Contact Us
        </button>

        <a
          href=""
          className="hidden w-10 lg:hidden md:block min-[320px]:block hover:border border-white rounded-md transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:opacity-90"
        >
          <img src={Sort} alt="Sort Icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
