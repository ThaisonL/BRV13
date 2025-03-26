import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import CompanySearchInput from '../components/CompanyFolder/CompanySearchInput';
import CompanyCard from '../components/CompanyFolder/CompanyCard';
import nasdaqCompanies from '../components/CompanyFolder/NasdaqCompanies';

function Company() {
  const { darkMode } = useOutletContext();  // a variable that useOutletContext fetches the darkMode prop from the Outlet context.

  // state variable for search query, selected companies and dropdown.
  const [query, setQuery] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [error, setError] = useState('');

  const apiKey = "TLoYbueDL9RUs9JZfiIKmp7uBFSilOzk";
  const apiUrl = "https://financialmodelingprep.com/api/v3/profile/";

  // function to handle search input and filter companies
  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);

    // filters based on searchQuery that is company name or symbol
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
    setError(''); // Reset any previous error
    try {
      const response = await fetch(`${apiUrl}${companySymbol}?apikey=${apiKey}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      // adds company details to selected company if data exists
      if (data && data.length > 0) {
        const companyData = data[0];
        
        
        setSelectedCompanies((prevCompanies) => {
          // Prevents user from adding the same company
          if (!prevCompanies.some((company) => company.symbol === companyData.symbol)) {
            const updatedCompanies = [...prevCompanies, companyData];
            // Save updated list of companies to LocalStorage
            localStorage.setItem("companies", JSON.stringify(updatedCompanies));
            return updatedCompanies;
          }
          return prevCompanies;
        });
        
        // empties search query after ok fetch and hides drop down after selection
        setQuery(''); 
        setShowDropdown(false);
      } else {
        setError('No company details found for the current search, try again');
      }
    } catch (error) {
      // catches error during the fetch request
      console.error('Error fetching company data:', error);
      setError('Something went wrong. Try again later.');
    }
  };

  
  useEffect(() => {
    const savedCompanies = JSON.parse(localStorage.getItem("companies")) || [];
    setSelectedCompanies(savedCompanies);  // Load companies from LocalStorage on page load
  }, []);
  
  const removeCompany = (symbol) => {
    const updatedCompanies = selectedCompanies.filter(company => company.symbol !== symbol);
    setSelectedCompanies(updatedCompanies);
    localStorage.setItem("companies", JSON.stringify(updatedCompanies)); // Save to LocalStorage
  };

  return (
    <main className={`w-full min-h-screen p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <header className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-serif">{darkMode ? "" : ""} Nasdaq Company Search</h1>
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

      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {selectedCompanies.map((company) => (
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
