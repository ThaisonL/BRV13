import React from 'react';
import { useOutletContext } from "react-router-dom"; // Hämta Outlet context

function CompanyCard({ company, removeCompany }) {
  // Hämta darkMode från Outlet context
  const { darkMode } = useOutletContext();

  // Funktion för att begränsa beskrivningen till 100 ord
  const LimitDescription = (description) => {
    const words = description.split(' ');
    return words.length > 100 ? words.slice(0, 100).join(' ') + '...' : description;
  };

  return (
    <article className={`relative flex-basis-[250px] p-4 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg mt-10 mb-10 mr-2 
      ${darkMode ? "bg-[rgb(55,65,81)] text-white" : "bg-[#faebd7] text-black"}`}>

      {/* Stäng-knapp */}
      <button
        onClick={() => removeCompany(company.symbol)}
        className="absolute top-2 right-2 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-red-400 transition transform hover:scale-110 shadow-lg"
      >
        ✕
      </button>

      <h2 className="text-lg font-bold mb-2">{company.companyName}</h2>
      <p><strong>Sector:</strong> {company.sector}</p>
      <p><strong>Country:</strong> {company.country}</p>
      <p><strong>Market Cap:</strong> ${company.mktCap}</p>
      <p><strong>Stock Price:</strong> ${company.price}</p>
      <p><strong>Description:</strong> {LimitDescription(company.description)}</p>
      
      <img
        src={company.image}
        alt={company.companyName}
        className="mx-auto w-40 sm:w-36 md:w-42 lg:w-50 xl:w-50 mt-4"
      />
    </article>
  );
}

export default CompanyCard;
