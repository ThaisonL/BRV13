import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchKeyMetrics } from "../../Reducers/keyMetricsSlice";
import { useOutletContext } from "react-router-dom";

// Function to determine the color of the indicator based on the value
const getIndicatorColor = (value, goodThreshold, warningThreshold, darkMode) => {
  if (value >= goodThreshold) return darkMode ? "text-green-500" : "text-green-600";
  if (value >= warningThreshold) return darkMode ? "text-yellow-300" : "text-yellow-500";
  return darkMode ? "text-red-500" : "text-red-700";
};

function FinancialHealthIndicator() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.keyMetrics);

  // Get dark mode status from parent component
  const { darkMode } = useOutletContext();

  useEffect(() => {
    // Fetch financial metrics data when component mounts
    dispatch(fetchKeyMetrics());
  }, [dispatch]);

  // Handle loading, error, and no data states
  if (status === "loading") return <p>Loading financial metrics...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No financial data available</p>;

  // Destructure the metrics from the first data object
  const metrics = data[0];

  return (
    <section
      className={`flex justify-center flex-col mt-8 md:mr-5 p-5 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 
      ${darkMode ? ' bg-[rgb(55,65,81)] text-white' : 'bg-[#FAEBd7] text-black'}`}
    >
      <h2 className="mb-4 text-m font-serif lg:text-xl">
        Financial Health Indicators
      </h2>
      <ul className="text-[15px] lg:text-[17px]">
        {/* Render each financial metric with color based on its value */}
        <li className={getIndicatorColor(metrics.currentRatio, 1.5, 1.0, darkMode)}>
          Current Ratio: {metrics.currentRatio?.toFixed(2)}
        </li>
        <li className={getIndicatorColor(metrics.debtToEquity, 1.0, 2.0, darkMode)}>
          Debt to Equity: {metrics.debtToEquity?.toFixed(2)}
        </li>
        <li className={getIndicatorColor(metrics.roe, 0.15, 0.1, darkMode)}>
          Return on Equity (ROE): {(metrics.roe * 100)?.toFixed(2)}%
        </li>
        <li className={getIndicatorColor(metrics.netDebtToEBITDA, 2.0, 3.5, darkMode)}>
          Net Debt to EBITDA: {metrics.netDebtToEBITDA?.toFixed(2)}
        </li>
        <li className={getIndicatorColor(metrics.earningsYield, 0.05, 0.03, darkMode)}>
          Earnings Yield: {(metrics.earningsYield * 100)?.toFixed(2)}%
        </li>
        <li className={getIndicatorColor(metrics.freeCashFlowYield, 0.05, 0.03, darkMode)}>
          Free Cash Flow Yield: {(metrics.freeCashFlowYield * 100)?.toFixed(2)}%
        </li>
      </ul>
    </section>
  );
}

export default FinancialHealthIndicator;
