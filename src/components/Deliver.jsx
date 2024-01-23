import ptnTop from "../assets/bg-pattern-home-4.svg";
import ptnBttm from "../assets/bg-pattern-home-5.svg";
import avatarAyisha from '../assets/avatar-aiysha.jpg'
import avatarArthur from '../assets/avatar-arthur.jpg'
import avatarKady from '../assets/avatar-kady.jpg'
import quote from "../assets/icon-quotes.svg";

const Deliver = () => {
  return (
    <div
      data-aos="fade-in"
      className="w-full min-h-screen text-secondary font-semibold relative py-36 px-6 md:px-48 gap-16 flex flex-col"
    >
      <img src={ptnTop} className="absolute top-0 left-0" alt="" />
      <img src={ptnBttm} className="absolute bottom-0 right-0" alt="" />

      <h1 className="text-center font-bold text-[32px] md:text-[48px]">
        Delivering real results for top companies. Some of our{" "}
        <span className="inline-block text-[#79c8c7]">success stories.</span>
      </h1>

      <div className="grid gap-8 items-center justify-center grid-cols-1 md:grid-cols-3">
        <section className="text-sm relative text-center gap-3 items-center justify-center flex-col flex">
          <img src={quote} className="" alt="" />
          <p>
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <h3 className="capitalize text-[#79c8c7] font-bold text-lg">
            kady baker
          </h3>
          <p className="italic">Product Manager at Bookmark</p>
          <img
            src={avatarKady}
            alt=""
            className="rounded-full border-2 inline-block w-[50px] h-[50px] my-2"
          />
        </section>
        <section className="text-sm relative text-center gap-3 items-center justify-center flex-col flex">
          <img src={quote} className="" alt="" />
          <p>
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </p>
          <h3 className="capitalize text-[#79c8c7] font-bold text-lg">
            Aiysha Reese
          </h3>
          <p className="italic">Founder of Manage</p>
          <img
            src={avatarAyisha}
            alt=""
            className="rounded-full border-2 inline-block w-[50px] h-[50px] my-2"
          />
        </section>
        <section className="text-sm relative text-center gap-3 items-center justify-center flex-col flex">
          <img src={quote} className="" alt="" />
          <p>
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </p>
          <h3 className="capitalize text-[#79c8c7] font-bold text-lg">
            Arthur Clarke
          </h3>
          <p className="italic">Co-founder of MyPhysio</p>
          <img
            src={avatarArthur}
            alt=""
            className="rounded-full border-2 inline-block w-[50px] h-[50px] my-2"
          />
        </section>
      </div>
    </div>
  );
}

export default Deliver