import { useOutletContext } from "react-router-dom";
import AppleStock from "../components/ApplestockChange/AppleStock";
import BusinessNewsSection from "../components/BusinessNews/BusinessNewsSection";

function Home() {
  const { darkMode } = useOutletContext();  // a varible that useOutletContext fetches the darkMode prop from the Outlet context.

  return (
    <main className={`flex flex-col justify-center items-center min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <AppleStock />
      <section className="flex justify-center items-center">
        <BusinessNewsSection />
      </section>
    </main>
  );
}

export default Home;
