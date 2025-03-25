import { useState } from 'react';
import { useOutletContext } from "react-router-dom";  // Lägg till denna import
import CompanySearchInput from '../components/CompanyFolder/CompanySearchInput';
import CompanyCard from '../components/CompanyFolder/CompanyCard';
import nasdaqCompanies from '../components/CompanyFolder/NasdaqCompanies';

function Company() {
  const { darkMode } = useOutletContext();  // Hämta darkMode från Outlet context

  const [query, setQuery] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [error, setError] = useState('');

  const apiKey = "TLoYbueDL9RUs9JZfiIKmp7uBFSilOzk";
  const apiUrl = "https://financialmodelingprep.com/api/v3/profile/";

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
      setFilteredCompanies([]);
      setShowDropdown(false);
    }
  };

  const fetchCompanyDetails = async (companySymbol) => {
    setError('');
    try {
      const response = await fetch(`${apiUrl}${companySymbol}?apikey=${apiKey}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        const companyData = data[0];
        
        setSelectedCompanies((prevCompanies) => {
          if (!prevCompanies.some((company) => company.symbol === companyData.symbol)) {
            return [...prevCompanies, companyData];
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

  const removeCompany = (symbol) => {
    setSelectedCompanies((prevCompanies) =>
      prevCompanies.filter((company) => company.symbol !== symbol)
    );
  };

  return (
    <main className={`w-full min-h-screen p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} ${darkMode ? 'text-white' : 'text-black'}`}>
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">{darkMode ? "Dark Mode" : "Light Mode"} Nasdaq Company Search</h1>
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
