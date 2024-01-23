import buildSvg from "../assets/bg-pattern-home-3.svg";
import person from "../assets/icon-person.svg";
import cog from "../assets/icon-cog.svg";
import chart from "../assets/icon-chart.svg";

const Build = () => {
  return (
    <div data-aos='fade-in' className=" text-secondary relative bg-[#022f34] py-12 min-h-screen px-6 md:px-36 gap-16 flex md:flex-row flex-col items-center justify-center md:justify-between ">
      <img
        className="absolute bottom-0 top-0 md:hidden right-0"
        src={buildSvg}
        alt=""
      />
      <img
        className="absolute bottom-0 hidden md:block  right-0"
        src={buildSvg}
        alt=""
      />
      <h1 className="text-[32px] pt-12 relative z-[4] leading-[48px] md:px-8 font-bold md:text-[48px] md:w-1/2">
        <div className="h-1 w-12 absolute md:left-8 inset-0 bg-accent"></div>
        Build & manage distributed teams like no one else.
      </h1>
      <div className="flex items-start justify-start w-full flex-col gap-4 md:w-1/2">
        <section className="flex items-center justify-center gap-4 w-full">
          <img src={person} className="inline-block w-[80px]" alt="" />
          <h1 className="flex flex-col gap-2 text-xl w-full font-semibold ">
            <span className="text-accent capitalize">
              experienced individuals
            </span>
            <span className="text-sm">
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </span>
          </h1>
        </section>
        <section className="flex items-center justify-center gap-4 w-full">
          <img src={cog} className="inline-block w-[80px]" alt="" />
          <h1 className="flex flex-col gap-2 font-semibold w-full">
            <span className="text-accent text-xl capitalize">
              easy to implement
            </span>
            <span className="text-sm">
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </span>
          </h1>
        </section>
        <section className="flex items-center justify-center gap-4 w-full">
          <img src={chart} className="inline-block w-[80px]" alt="" />
          <h1 className="flex flex-col font-semibold gap-2 w-full">
            <span className="text-accent inline-block text-xl capitalize">
              experienced individuals
            </span>
            <span className="text-sm inline-block">
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </span>
          </h1>
        </section>
      </div>
    </div>
  );
}

export default Build