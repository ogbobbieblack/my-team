import btmRight from "../assets/bg-pattern-about-1.svg";

const HeroAbout = () => {
  return (
    <div data-aos='fade-in' className="text-secondary  px-6 md:px-28 relative gap-24 font-bold text-[18px] min-h-[500px] py-12 flex justify-center md:flex-row flex-col items-center">
      <h1 className="text-[42px] md:text-[64px]">About</h1>
      <p className="z-[4] relative py-12">
        <span className="absolute top-0 bg-accent w-12 h-1"></span>
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We’ll bring those teams to you.
      </p>
      <img className="absolute bottom-0 right-0" src={btmRight} alt="" />
    </div>
  );
}

export default HeroAbout