import Navbar from "../Navbar/Navbar";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <header className={`w-full h-28 flex flex-col md:flex-row ${darkMode ? "bg-[rgb(55,65,81)] text-white" : "bg-[#faebd7] text-black"} items-center justify-between px-4`}>
        <div className="flex items-center w-full justify-between">
          <h1 className="font-serif text-4xl md:text-5xl ml-2">Apple Dashboard</h1>

          {/* Knappen för att växla dark mode */}
          <button
            className="w-12 h-12 bg-neutral-900 dark:bg-white rounded-full text-black dark:text-black font-semibold
            hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300"
            onClick={toggleDarkMode}
          >
            {darkMode ? "LHT" : "DRK"}
          </button>
        </div>
        <Navbar />
      </header>
    </div>
  );
}

export default Header;
