import React from 'react';
import { useOutletContext } from "react-router-dom";

function CompanyCard({ company, removeCompany }) {
  const { darkMode } = useOutletContext();

  // function to limit the description to 100 words
  const LimitDescription = (description) => {
    const words = description.split(' ');
    return words.length > 100 ? words.slice(0, 100).join(' ') + '...' : description;
  };

  return (
    <article className={`relative flex-basis-[250px] p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg mt-10 mb-10 mr-2 
      ${darkMode ? "bg-[rgb(55,65,81)] text-white" : "bg-[#faebd7] text-black"}`}>

      {/* remove button */}
      <button
        onClick={() => removeCompany(company.symbol)}
        className="absolute top-2 right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center 
        text-xl font-bold hover:bg-red-400 hover:scale-110 transition transform shadow-lg 
        focus:bg-red-400 focus:scale-110 focus:outline-none"

      >
        ✕
      </button>

      {/* Företagsinformation */}
      <h2 className="text-lg font-bold mb-2">{company.companyName}</h2>
      <p><strong>Sector:</strong> {company.sector}</p>
      <p><strong>Country:</strong> {company.country}</p>
      <p><strong>Market Cap:</strong> ${company.mktCap}</p>
      <p><strong>Stock Price:</strong> ${company.price}</p>
      <p><strong>Description:</strong> {LimitDescription(company.description)}</p>
      
      {/* Company Logo */}
      <img
        src={company.image}
        alt={company.companyName}
        className="mx-auto w-40 sm:w-36 md:w-42 lg:w-50 xl:w-50 mt-4"
        aria-label={company.companyName} // accessibilty
      />
    </article>
  );
}

export default CompanyCard;
