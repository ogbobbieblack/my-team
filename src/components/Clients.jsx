import verge from "../assets/logo-the-verge.png";
import gadgets from "../assets/logo-gadgets-now.png";
import tech from "../assets/logo-tech-radar.png";
import jakarta from "../assets/logo-jakarta-post.png";
import guardian from "../assets/logo-the-guardian.png";
import btnSvg from "../assets/bg-pattern-about-4.svg";

const Clients = () => {
  return (
    <div
      data-aos="fade-in"
      className="flex relative flex-col items-center min-h-[500px] bg-[#022f34] justify-center w-full gap-12 py-12"
    >
      <img src={btnSvg} className="absolute top-0 left-0" alt="" />
      <h1 className="z-[4] font-bold text-[32px] md:text-[48px] text-secondary">
        Some of our clients
      </h1>
      <section className="z-[4] flex items-center justify-center w-full gap-12 md:flex-row flex-col">
        <img className="w-[150px]" src={verge} alt="" />
        <img className="w-[150px]" src={jakarta} alt="" />
        <img className="w-[150px]" src={guardian} alt="" />
        <img className="w-[150px]" src={tech} alt="" />
        <img className="w-[150px]" src={gadgets} alt="" />
      </section>
    </div>
  );
}

export default Clients