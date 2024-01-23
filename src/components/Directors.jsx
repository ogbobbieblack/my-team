import top from '../assets/bg-contact.svg'
import btm from '../assets/bg-contact-2.svg'

import nikita from "../assets/avatar-nikita.jpg";
import christian from "../assets/avatar-christian.jpg";
import cruz from "../assets/avatar-cruz.jpg";
import drake from "../assets/avatar-drake.jpg";
import griffin from "../assets/avatar-griffin.jpg";
import aden from "../assets/avatar-aden.jpg";
import DirectorContainer from './DirectorContainer';




const directorList = [
  {
    directorName: "nikita marks",
    directorIcon: nikita,
    directorTitle: "founder & ceo",
    directorQuote:
      "“It always amazes me how much talent there is in every corner of the globe.”",
    directorLinks: { linkedIn: "", twitter: "" },
  },
  {
    directorName: "Cristian Duncan",
    directorIcon: christian,
    directorTitle: "Co-founder & COO",
    directorQuote:
      "“Distributed teams required unique processes. You need to approach work in a new way.”",
    directorLinks: { linkedIn: "", twitter: "" },
  },
  {
    directorName: "Cruz Hamer",
    directorIcon: cruz,
    directorTitle: "Co-founder & CTO",
    directorQuote:
      "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
    directorLinks: { linkedIn: "", twitter: "" },
  },
  {
    directorName: "Drake Heaton",
    directorIcon: drake,
    directorTitle: "Business Development Lead",
    directorQuote:
      "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
    directorLinks: { linkedIn: "", twitter: "" },
  },
  {
    directorName: "Griffin Wise",
    directorIcon: griffin,
    directorTitle: "Lead Marketing",
    directorQuote:
      "“Unique perspectives shape unique products, which is what you need to survive these days.”",
    directorLinks: { linkedIn: "", twitter: "" },
  },
  {
    directorName: "Aden Allan",
    directorIcon: aden,
    directorTitle: "Head of Talent",
    directorQuote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
    directorLinks: { linkedIn: "", twitter: "" },
  },
];



const Directors = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col gap-12 py-24 bg-inherit px-6 md:px-28 font-semibold">
      <h1 className="text-[32px] md:text-[48px] text-center font-bold text-secondary z-[4]">Meet the directors</h1>
      <img src={top} className="absolute left-0 top-0" alt="" />
      <img src={btm} className="absolute right-0 bottom-0" alt="" />

      <div className='grid gap-6 grid-cols-1 items-center justify-center md:grid-cols-3'>
        {directorList.map((director, index) => {
            return <DirectorContainer key={director+ index} director={director}/>
        })}
      </div>
    </div>
  );
}

export default Directors