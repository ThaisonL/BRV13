import { Link } from "react-router-dom";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const githubIcon = darkMode ? "/Icons/links-light/Github.png" : "/Icons/links-dark/Github.png";
  const linkedinIcon = darkMode ? "/Icons/links-light/Linkedin.png" : "/Icons/links-dark/Linkedin.png";

  return (
    <footer className={`w-full py-4 ${darkMode ? "bg-gray-700 text-white" : "bg-[#faebd7] text-black"}`}>
      <section className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Navigation shortcuts */}
        <nav aria-label="Footer navigation">
          <h4 className="text-lg font-semibold mb-2">Shortcuts</h4>
          <ul>
            <li><Link to="/" className="footerLink hover:text-blue-400 block mb-2">Home</Link></li>
            <li><Link to="StocksAndA" className="footerLink hover:text-blue-400 block mb-2">Stock Charts</Link></li>
            <li><Link to="Company" className="footerLink hover:text-blue-400 block mb-2">Company</Link></li>
          </ul>
        </nav>

        {/* GitHub profiles */}
        <article>
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <img className="w-6 h-6 mr-2" src={githubIcon} alt="GitHub icon" />
            GitHub
          </h4>
          <ul>
            <li><a href="https://github.com/Albin-Tenghagen" target="_blank" rel="noopener noreferrer" className="footerLink hover:text-blue-400 block mb-2">Albin</a></li>
            <li><a href="https://github.com/ThaisonL" target="_blank" rel="noopener noreferrer" className="footerLink hover:text-blue-400 block mb-2">Phi-Thai</a></li>
            <li><a href="https://github.com/Samii02" target="_blank" rel="noopener noreferrer" className="footerLink hover:text-blue-400 block mb-2">Sami</a></li>
          </ul>
        </article>

        {/* LinkedIn profiles */}
        <article>
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <img className="w-6 h-6 mr-2" src={linkedinIcon} alt="LinkedIn icon" />
            LinkedIn
          </h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/albin-tenghagen-980685211/" target="_blank" rel="noopener noreferrer" className="footerLink hover:text-blue-400 block mb-2">Albin</a></li>
            <li><a href="https://www.linkedin.com/in/phi-thai-lai-299968330/" target="_blank" rel="noopener noreferrer" className="footerLink hover:text-blue-400 block mb-2">Phi-Thai</a></li>
            <li><a href="https://www.linkedin.com/in/sami-al-halabi-1aab76329/" target="_blank" rel="noopener noreferrer" className="footerLink hover:text-blue-400 block mb-2">Sami</a></li>
          </ul>
        </article>

        {/* Trademark and copyright information */}
        <article className="lg:col-span-1">
          <h4 className="text-lg font-semibold mb-2">Trademark</h4>
          <p>Trady Lady</p>
          <p>Owns our soul</p>
          <p>© {currentYear}</p>
        </article>

      </section>
    </footer>
  );
};

export default Footer;
