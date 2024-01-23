import leftSvg from "../assets/hero-left-pattern.svg";
import btnSvg from "../assets/hero-bottom-home.svg";

const Hero = () => {
  return (
    <div
      data-aos="fade-in"
      className="text-secondary  px-6 md:px-28 relative gap-24 font-bold text-[18px] min-h-[500px] py-12 flex justify-center md:flex-row flex-col items-center"
    >
      <h1 className="text-[40px] z-[4] leading-[80px] md:text-[80px] md:flex md:flex-col whitespace-nowrap">
        Find the best <span className="text-accent inline-block">talent</span>
      </h1>

      <p className="z-[4] relative py-12">
        <span className="absolute top-0 bg-[#79c8c7] w-12 h-1"></span>
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent. We’re
        about to change that.
      </p>

      <img className="absolute top-0  left-0 hidden md:block" src={leftSvg} alt="" />
      <img className="absolute bottom-0 right-0" src={btnSvg} alt="" />
    </div>
  );
}

export default Hero