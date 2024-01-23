import { NavLink } from "react-router-dom";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="min-h-[200px] gap-6 font-semibold w-full flex flex-col py-12 md:flex-row items-center justify-between md:px-28 px-6">
      <section className="text-secondary grid grid-cols-2 gap-4 items-center justify-center md:mr-8">
        <NavLink
          className="hover:scale-110 md:text-[48px] text-[32px] ease-out hover:-translate-y-1 duration-300 font-bold col-span-2"
          to="/"
        >
          myteam
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent"
              : " hover:text-accent hover:scale-110 ease-out hover:-translate-y-1 duration-300"
          }
          to="/"
        >
          home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-accent"
              : " hover:text-accent hover:scale-110 ease-out hover:-translate-y-1 duration-300"
          }
          to="about"
        >
          about
        </NavLink>
      </section>
      <p className="flex md:mr-auto  flex-col md:items-start text-sm items-center gap-2 justify-center text-secondary/80">
        <span>987 Hillcrest Lane</span>
        <span>Irvine, CA</span>
        <span>California 92714</span>
        <span>Call Us : 949-833-7432</span>
      </p>

          <div className="flex flex-col items-center justify-center gap-8 md:gap-16 text-secondary/80">

        <div className=" text-3xl flex items-center gap-4 justify-between">
            <NavLink to="/" className='hover:text-accent'>
            <FaFacebook />
            </NavLink>
            <NavLink to="/" className='hover:text-accent'>
            <FaPinterest />
            </NavLink>
            <NavLink to="/" className='hover:text-accent'>
            <FaTwitter />
            </NavLink>
        </div>
        <p>Copyright 2020. All Rights Reserved</p>
          </div>
    </footer>
  );
}

export default Footer