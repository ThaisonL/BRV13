import React from 'react';

function FilterSortDropdown({ setSortOption }) {
    const handleSortChange = (event) => {
      setSortOption(event.target.value); // Uppdatera valt sorteringsalternativ
    };
  
    return (
      <section className="">
        <select
          onChange={handleSortChange}
          className="p-2 border border-gray-300 rounded-lg bg-white text-black"
        >
            <option value="" disabled selected>Sort after</option>
          <option value="companyNameAZ">Company name (A-Z)</option>
          <option value="companyNameZA">Company name (Z-A)</option>
          <option value="marketCapHighToLow">Marketcap (High to low)</option>
          <option value="marketCapLowToHigh">Marketcap (Low to High)</option>
          <option value="priceHighToLow">Stockprice (High to low)</option>
          <option value="priceLowToHigh">Stockprice (Low to High)</option>
        </select>
      </section>
    );
  }
  

export default FilterSortDropdown;