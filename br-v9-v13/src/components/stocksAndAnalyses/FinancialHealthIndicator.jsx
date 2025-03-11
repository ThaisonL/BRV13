import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchKeyMetrics } from "../../Reducers/keyMetricsSlice";

const getIndicatorColor = (value, goodThreshold, warningThreshold) => {
  if (value >= goodThreshold) return "text-green-500";
  if (value >= warningThreshold) return "text-yellow-500";
  return "text-red-500";
};

function FinancialHealthIndicator() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.keyMetrics);

  useEffect(() => {
    dispatch(fetchKeyMetrics());
  }, [dispatch]);

  if (status === "loading") return <p>Loading financial metrics...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No financial data available</p>;

  const metrics = data[0]; // Accessing the first data object

  return (
    <main>
      <h2>Financial Health Indicators</h2>
      <ul>
        <li className={getIndicatorColor(metrics.currentRatio, 1.5, 1.0)}>
          Current Ratio: {metrics.currentRatio?.toFixed(2)}
        </li>
        <li className={getIndicatorColor(metrics.debtToEquity, 1.0, 2.0)}>
          Debt to Equity: {metrics.debtToEquity?.toFixed(2)}
        </li>
        <li className={getIndicatorColor(metrics.roe, 0.15, 0.1)}>
          Return on Equity (ROE): {(metrics.roe * 100)?.toFixed(2)}%
        </li>
        <li className={getIndicatorColor(metrics.netDebtToEBITDA, 2.0, 3.5)}>
          Net Debt to EBITDA: {metrics.netDebtToEBITDA?.toFixed(2)}
        </li>
        <li className={getIndicatorColor(metrics.earningsYield, 0.05, 0.03)}>
          Earnings Yield: {(metrics.earningsYield * 100)?.toFixed(2)}%
        </li>
        <li
          className={getIndicatorColor(metrics.freeCashFlowYield, 0.05, 0.03)}
        >
          Free Cash Flow Yield: {(metrics.freeCashFlowYield * 100)?.toFixed(2)}%
        </li>
      </ul>
    </main>
  );
}

export default FinancialHealthIndicator;
