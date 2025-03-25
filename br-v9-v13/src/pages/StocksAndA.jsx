import HistoricalPrices from "../components/stocksAndAnalyses/HistoricalPrices";
import FinancialHealthIndicator from "../components/stocksAndAnalyses/FinancialHealthIndicator";
import HistoricalComparisonComponent from "../components/stocksAndAnalyses/HistoricalComparisonComponent";
import { useOutletContext } from "react-router-dom";

function StocksAndA() {
  const { darkMode } = useOutletContext();  // Hämta darkMode från Outlet context
  return (
<main className={`flex flex-col justify-center items-center min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>      <section className="mt-10 mb-25">
        <HistoricalPrices />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center mb-15">
        <HistoricalComparisonComponent />
        <FinancialHealthIndicator />
      </section>
    </main>
  );
}
export default StocksAndA;
