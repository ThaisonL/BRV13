import HistoricalPrices from "../components/stocksAndAnalyses/HistoricalPrices";
import FinancialHealthIndicator from "../components/stocksAndAnalyses/FinancialHealthIndicator";
import HistoricalComparisonComponent from "../components/stocksAndAnalyses/HistoricalComparisonComponent";

function StocksAndA() {
  return (
    <main className="flex flex-col">
      <section>
        <HistoricalPrices />
      </section>
      <section className="flex flex-col items-center justify-center gap-10">
        <FinancialHealthIndicator />
        <HistoricalComparisonComponent />
      </section>
    </main>
  );
}
export default StocksAndA;
