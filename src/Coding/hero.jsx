import Arrow from "../assets/arrow.png";
import Circle from "../assets/Circle.png";
import Vector from "../assets/Vector.png";
import Person from "../assets/Person.png";
import Ninja from "../assets/Ninja.png";
const Hero = () => {
  return (
    <div
      id="Hero"
      className=" h-[640px] lg:h-[1200px] xl:h-[640px] min-[320px]:h-[1200px] w-full flex flex-row lg:flex-col xl:flex-row min-[320px]:flex-col lg:mt-20 min-[320px]:mt-20 xl:mt-0 "
    >
      <div
        className="flex-1 flex flex-col justify-center mx-24 gap-7"
        id="leftside"
      >
        <h1 className="mx-24 xl:text-left lg:text-center lg:mx-24  min-[320px]:mx-10 text-white text-7xl font-bold min-[320px]:text-center">
          Make Your Cool Studio
        </h1>
        <p className="text-white text-2xl mx-24 font-light xl:text-left lg:text-center min-[320px]:text-center lg:mx-24  min-[320px]:mx-10">
          Our creative studio offers a wide range of services, from UI/UX design
          to software development. We are committed to providing outstanding
          solutions for clients who trust us with their projects.
        </p>
        <div className="w-full  flex lg:justify-center min-[320px]:justify-center xl:justify-start ">
          <button className="bg-[#5454D4] w-64 mx-24 text-white h-16 flex items-center justify-center rounded-lg gap-4 text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:bg-[#3B3BCF] hover:shadow-2xl group">
            Our Services
            <img
              src={Arrow}
              alt=""
              className="w-8 transform group-hover:translate-x-2 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center" id="rightside">
        <div className="flex justify-between px-10 xl:mt-0 lg:mt-12 min-[320px]:mt-12">
          <img src={Vector} alt="" />
          <img src={Circle} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={Ninja} alt="" className="w-[450px] " />
        </div>
        <div className="flex justify-between px-10 lg:mt-12 xl:mt-0 min-[320px]:mt-12 pb-10">
          <img src={Vector} alt="" />
          <img src={Circle} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
