import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [menu, showMenu] = useState(false)
  return (
    <nav className="flex md:border-none z-[7] font-semibold relative text-secondary justify-between md:justify-start border-secondary items-center gap-12 text-lg lowercase md:py-20 py-12 md:px-36 px-6 ">
      <NavLink className="text-4xl z-[7] font-bold" to={"/"}>
        myteam
      </NavLink>

      <div className="hidden md:flex items-center gap-4 justify-between">
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
      </div>
      <NavLink
        className="ml-auto md:block hover:scale-110 hover:duration-500 transition-all ease-out hover:-translate-y-1 hover:bg-secondary hover:text-primary hidden rounded-3xl py-2 px-6 border-2 font-semibold border-secondary "
        to="contact"
      >
        contact us
      </NavLink>

      <button
        className="md:hidden z-[7] ml-auto text-3xl"
        onClick={() => showMenu(!menu)}
      >
        {menu ? <FaTimes /> : <FaBars />}
      </button>

      {menu && (
        <div className="flex z-[6] absolute md:hidden gap-4 w-[250px] pl-16 drop-shadow-2xl bottom-0 top-0 justify-start h-screen flex-col items-start py-48 right-0 bg-primary text-inherit">
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
          <NavLink
            className="hover:scale-110 my-4 hover:duration-500 transition-all ease-out hover:-translate-y-1 hover:bg-secondary hover:text-primary rounded-3xl py-2 px-6 border-2 font-semibold border-secondary "
            to="contact"
          >
            contact us
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav