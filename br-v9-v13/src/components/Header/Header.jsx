import Navbar from "../Navbar/Navbar";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <header className={`w-full h-28 flex flex-col md:flex-row ${darkMode ? "bg-[rgb(55,65,81)] text-white" : "bg-[#faebd7] text-black"} items-center justify-between px-4`}>
        <div className="flex items-center w-full justify-between">
        <h1 className="text-4xl md:text-5xl font-serif text-center 
 w-full md:w-auto">
  Dashboard
</h1>

          {/* Knappen för att växla dark mode */}
          <button
            className="absolute top-1 right-1 w-7 h-7 bg-neutral-900 dark:bg-white rounded-full text-black dark:text-black font-semibold
            hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300"
            onClick={toggleDarkMode}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <img
              src={darkMode ? "/public/icons/lampaon.png" : "/public/icons/lampisav.jpg"}
              alt="Dark/Light Toggler"
              className="w-7 h-7 object-contain rounded-full hover:bg-yellow-300 cursor-pointer"
            />
          </button>
        </div>
        <Navbar />
      </header>
    </div>
  );
}

export default Header;
