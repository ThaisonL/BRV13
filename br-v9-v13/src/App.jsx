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
<>
      {/* exports darkMode nad toggleDarkMode to header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/*  Exports darkMode through Outlet context, allowing all child components to receive the prop */}
      <Outlet context={{ darkMode }} />
      
      <Footer darkMode={darkMode} />
</>
  );
}

export default App;
