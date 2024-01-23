import ptn from "../assets/bg-contact.svg";
import ptnTwo from "../assets/bg-pattern-contact-2.svg";
import person from "../assets/icon-person.svg";
import cog from "../assets/icon-cog.svg";
import chart from "../assets/icon-chart.svg";


const Contact = () => {
  return (
    <div data-aos='fade-in' className="w-full min-h-screen gap-12 text-secondary relative font-bold flex flex-col md:flex-row items-center justify-center px-4 md:px-24 py-12">
      <img src={ptn} className="absolute top-0 left-0 hidden md:block" alt="" />
      <img src={ptnTwo} className="absolute bottom-0 right-0 hidden md:block" alt="" />

      <section className="text-center md:text-start z-[4] w-full md:w-1/2">
        <h1 className="text-[42px] md:text-[64px]">Contact</h1>
        <span className="text-accent md:text-[48px] text-[32px]">Ask about us</span>

        <div className="flex flex-col gap-4 my-6 text-[18px]">
          <section className="flex gap-4 items-center justify-start">
            <img src={person} className="inline-block w-[80px]" alt="" />
            <span className="inline-block">
              The quality of our talent network
            </span>
          </section>
          <section className="flex gap-4 items-center justify-start">
            <img src={cog} className="inline-block w-[80px]" alt="" />
            <span className="inline-block">
              Usage & implementation of our software
            </span>
          </section>
          <section className="flex gap-4 items-center justify-start">
            <img src={chart} className="inline-block w-[80px]" alt="" />
            <span className="inline-block">How we help drive innovation</span>
          </section>
        </div>
      </section>

      <form className="z-[4] w-full md:w-1/2 flex flex-col gap-4">
        <input type="text" placeholder="name" className="outline-none py-6 focus:bg-inherit hover:bg-inherit w-full inline-block border-b-2 bg-inherit placeholder:capitalize placeholder:font-semibold" />
        <input type="text" placeholder="email address" className="outline-none focus:bg-inherit hover:bg-inherit py-6 w-full inline-block border-b-2 bg-inherit placeholder:capitalize placeholder:font-semibold" />
        <input type="text" placeholder="company name" className="outline-none focus:bg-inherit hover:bg-inherit py-6 w-full inline-block border-b-2 bg-inherit placeholder:capitalize placeholder:font-semibold" />
        <input type="text" placeholder="title" className="outline-none focus:bg-inherit hover:bg-inherit py-6 w-full inline-block border-b-2 bg-inherit placeholder:capitalize placeholder:font-semibold" />
        <input type="text" placeholder="message" className="outline-none focus:bg-inherit hover:bg-inherit py-6 w-full inline-block border-b-2 bg-inherit placeholder:capitalize placeholder:font-semibold" />
        
        
        <div className="py-4">

          <button className="text-primary hover:scale-110 duration-300 transition-all ease-out hover:-translate-y-1 bg-secondary rounded-full px-8 py-3">submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact