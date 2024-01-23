/* eslint-disable react/prop-types */
import { useState } from 'react';
import {FaLinkedin, FaPlus, FaTimes, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const DirectorContainer = ({director}) => {

    const [showQuote, setShowQuote] = useState(false)

  return (
    <div className="text-secondary flex flex-col items-center relative  justify-center px-4 gap-4 py-6 capitalize bg-[#012e34]">
      <h1 className="text-[#519395] font-bold text-lg">
        {director.directorName}
      </h1>

      {showQuote && (
        <p className="text-sm text-center">{director.directorQuote}</p>
      )}

      {showQuote && (
        <section className="flex items-center text-2xl justify-center gap-4">
          <Link to={director.directorLinks.linkedIn}>
            <FaTwitter />
          </Link>
          <Link to={director.directorLinks.linkedIn}>
            <FaLinkedin />
          </Link>
        </section>
      )}
      {!showQuote && (
        <img
          className="rounded-full border-2 w-[80px]"
          src={director.directorIcon}
          alt=""
        />
      )}
      <h3>{director.directorTitle}</h3>

      <button className="" onClick={() => setShowQuote(!showQuote)}>
        {!showQuote ? (
          <FaPlus className="text-xl bg-accent w-12 h-12 rounded-full px-4 text-[#012e34] " />
        ) : (
          <FaTimes className="text-xl bg-[#79c8c7] w-12 h-12 rounded-full px-4 " />
        )}
      </button>
    </div>
  );
}

export default DirectorContainer



// {
//     directorName: "Aden Allan",
//     directorIcon: aden,
//     directorTitle: "Head of Talent",
//     directorQuote:
//       "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
//     directorLinks: { linkedIn: "", twitter: "" },
//   },