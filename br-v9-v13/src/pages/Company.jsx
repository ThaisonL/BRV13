import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import CompanySearchInput from '../components/CompanyFolder/CompanySearchInput';
import CompanyCard from '../components/CompanyFolder/CompanyCard';
import FilterSortDropdown from '../components/CompanyFolder/FilterDropDown';
import nasdaqCompanies from '../components/CompanyFolder/NasdaqCompanies';

function Company() {
  const { darkMode } = useOutletContext();  // Fetch darkMode from the Outlet context.

  // state variables
  const [query, setQuery] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [error, setError] = useState('');
  const [sortOption, setSortOption] = useState('alphabetical'); // Added sortOption state

  const apiKey = "eYFho6s4OjEyYVslMtVJrmYVI8llxviY";
  const apiUrl = "https://financialmodelingprep.com/api/v3/profile/";

  // function to handle search input and filter companies
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    if (searchQuery) {
      const filtered = nasdaqCompanies.filter((company) =>
        company.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
        company.symbol.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      setFilteredCompanies(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setFilteredCompanies([]); // clears filtered companies if search input is empty
      setShowDropdown(false);
    }
  };

  // function to fetch company details from API
  const fetchCompanyDetails = async (companySymbol) => {
    setError('');
    try {
      const response = await fetch(`${apiUrl}${companySymbol}?apikey=${apiKey}`);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      if (data && data.length > 0) {
        const companyData = data[0];
        setSelectedCompanies((prevCompanies) => {
          if (!prevCompanies.some((company) => company.symbol === companyData.symbol)) {
            const updatedCompanies = [...prevCompanies, companyData];
            localStorage.setItem("companies", JSON.stringify(updatedCompanies));
            return updatedCompanies;
          }
          return prevCompanies;
        });
        setQuery('');
        setShowDropdown(false);
      } else {
        setError('No company details found for the current search, try again');
      }
    } catch (error) {
      console.error('Error fetching company data:', error);
      setError('Something went wrong. Try again later.');
    }
  };

  const sortCompanies = (companies) => {
    let sortedCompanies = [...companies];
    
    sortedCompanies.sort((a, b) => {
      switch (sortOption) {
        case 'companyNameAZ':
          // Sort companies by name: A-Z
          const nameA = a.companyName || '';
          const nameB = b.companyName || '';
          return nameA.localeCompare(nameB);
  
        case 'companyNameZA':
          // Sort companies by name: Z-A
          const nameZ = a.companyName || '';
          const nameX = b.companyName || '';
          return nameX.localeCompare(nameZ);
  
        case 'marketCapHighToLow':
          // Sort companies by market cap (high to low)
          const marketCapA = a.mktCap || 0;
          const marketCapB = b.mktCap || 0;
          return marketCapB - marketCapA;
  
        case 'marketCapLowToHigh':
          // Sort companies by market cap (low to high)
          const marketCapLowA = a.mktCap || 0;
          const marketCapLowB = b.mktCap || 0;
          return marketCapLowA - marketCapLowB;
  
        case 'priceHighToLow':
          // Sort companies by price (high to low)
          const priceA = a.price || 0;
          const priceB = b.price || 0;
          return priceB - priceA;
  
        case 'priceLowToHigh':
          // Sort companies by price (low to high)
          const priceLowA = a.price || 0;
          const priceLowB = b.price || 0;
          return priceLowA - priceLowB;
  
        default:
          return 0;  // If no sort option is selected, do no sorting
      }
    });
  
    return sortedCompanies;
  };


  // Load companies from localStorage when the page loads
  useEffect(() => {
    const savedCompanies = JSON.parse(localStorage.getItem("companies")) || [];
    setSelectedCompanies(savedCompanies);
  }, []);

  // Remove company from selected list
  const removeCompany = (symbol) => {
    const updatedCompanies = selectedCompanies.filter(company => company.symbol !== symbol);
    setSelectedCompanies(updatedCompanies);
    localStorage.setItem("companies", JSON.stringify(updatedCompanies)); // Save to LocalStorage
  };

  return (
    <main className={`w-full min-h-screen p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-serif">Nasdaq Company Search</h1>
      </header>

      <section>
        <CompanySearchInput
          query={query}
          handleSearch={handleSearch}
          showDropdown={showDropdown}
          filteredCompanies={filteredCompanies}
          fetchCompanyDetails={fetchCompanyDetails}
          setShowDropdown={setShowDropdown}
          error={error}
        />
      </section>

      {/* Sorting Dropdown */}
      <section className="text-center my-4">
        <FilterSortDropdown setSortOption={setSortOption} />
      </section>

      {/* Display Selected Companies */}
      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {sortCompanies(selectedCompanies).map((company) => (
          <CompanyCard
            key={company.symbol}
            company={company}
            removeCompany={removeCompany}
            darkMode={darkMode}
          />
        ))}
      </section>
    </main>
  );
}

export default Company;
