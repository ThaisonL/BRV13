import { useState, useEffect } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // This useEffect runs only once on initial render
  useEffect(() => {

    console.log("Initial render - darkMode is set to:", darkMode); // Debugging log
  }, []);

  // This effect handles updating dark mode settings whenever the state changes
  useEffect(() => {
    console.log("darkMode changed to:", darkMode); // Debugging log
  }, [darkMode]); // This runs whenever darkMode changes

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle between true/false
  };

  return (
    <>
      {/* Exports darkMode and toggleDarkMode to Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Exports darkMode through Outlet context, allowing all child components to receive the prop */}
      <Outlet context={{ darkMode }} />
      
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
