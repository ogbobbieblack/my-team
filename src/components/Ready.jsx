import { NavLink } from "react-router-dom";
import ptnReady from "../assets/bg-pattern-home-6.svg";

const Ready = () => {
  return (
    <div
      data-aos="fade-in"
      className="flex items-center h-[100px] bg-accent justify-center text-[#022f34] flex-col md:flex-row relative py-28 px-6 md:px-48 gap-16"
    >
      <h1 className="text-[32px] md:text-[48px] z-[4] md:pl-12 font-bold">
        Ready to get started?
      </h1>
      <img className="absolute left-0 bottom-0" src={ptnReady} alt="" />
      <NavLink
        className="ml-auto md:block hover:scale-110 hover:duration-500 z-[4] transition-all ease-out hover:-translate-y-1 border-[#022f34] hover:bg-[#022f34] hover:text-accent hidden rounded-3xl py-2 px-6 border-2 font-semibold  "
        to="/contact"
      >
        contact us
      </NavLink>
    </div>
  );
}

export default Ready