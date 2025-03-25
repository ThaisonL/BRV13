import { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Hämta darkMode från localStorage när appen laddas
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  // Uppdatera localStorage och body klass när dark mode ändras
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {/* Skickar darkMode och toggleDarkMode till Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Skickar darkMode via Outlet context så att alla sidor kan använda det */}
      <Outlet context={{ darkMode }} />
      
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
