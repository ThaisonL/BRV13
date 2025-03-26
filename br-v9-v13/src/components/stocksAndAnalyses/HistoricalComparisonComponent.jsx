import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchKeyMetrics } from "../../Reducers/keyMetricsSlice";
import { useOutletContext } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

function HistoricalComparisonComponent() {
  const dispatch = useDispatch();
  
  // Fetch key metrics data from Redux store
  const { data, status, error } = useSelector((state) => state.keyMetrics);
  
  // Track the selected metric for the chart
  const [selectedMetric, setSelectedMetric] = useState("currentRatio");

  // Retrieve dark mode status
  const { darkMode } = useOutletContext();

  // Fetch data when component mounts
  useEffect(() => {
    dispatch(fetchKeyMetrics());
  }, [dispatch]);

  // Handle loading and error states
  if (status === "loading") return <p>Loading historical data...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No historical data available</p>;

  // Define benchmark values for the metrics (used for reference lines in the chart)
  const benchmarks = {
    currentRatio: 1.5,
    debtToEquity: 1.0,
    roe: 0.15,
    netDebtToEBITDA: 2.0,
    earningsYield: 0.05,
    freeCashFlowYield: 0.05,
  };

  // Metric names for dropdown menu
  const metricNames = {
    currentRatio: "Current Ratio",
    debtToEquity: "Debt to Equity",
    roe: "Return on Equity (ROE)",
    netDebtToEBITDA: "Net Debt to EBITDA",
    earningsYield: "Earnings Yield",
    freeCashFlowYield: "Free Cash Flow Yield",
  };

  // Map data to match the selected metric for display in the chart
  const historicalData = data
    .map((item) => ({
      date: item.date,
      value: item[selectedMetric], // Use the selected metric value
    }))
    .reverse(); // Reverse data for chronological order

  return (
    <section
      className={`flex flex-col items-center w-full max-w-2xl 
      ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      {/* Title */}
      <h2 className="text-xl font-serif mb-4">
        Historical Comparison of Financial Metrics
      </h2>

      {/* Dropdown to select metric */}
      <select
        className={`mt-4 mb-4 p-2 border rounded text-[14px] 
        ${darkMode ? "bg-gray-700 text-white" : "bg-[#fcfcfc] text-black"}`}
        value={selectedMetric}
        onChange={(e) => setSelectedMetric(e.target.value)}
        aria-label="Dropdown menu for Financial Health indicator"
      >
        {Object.keys(benchmarks).map((metric) => (
          <option key={metric} value={metric}>
            {metricNames[metric]} {/* Metric name display */}
          </option>
        ))}
      </select>

      {/* Chart container */}
      <section
        className={`flex justify-center w-11/12 pt-5 h-[420px] rounded-lg shadow-lg 
        ${darkMode ? "bg-gray-700" : "bg-[#faebd7]"}`}
      >
        <ResponsiveContainer width="90%" height={400}>
          <LineChart
            data={historicalData} // Display the selected metric data
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            {/* Grid and chart styles */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={darkMode ? "#fefefe" : "#ccc"}
            />
            {/* X-axis with formatted date labels */}
            <XAxis
              dataKey="date"
              interval="preserveStartEnd"
              tick={{
                angle: -45,
                dx: -5,
                dy: 10,
                fontSize: 15,
                fill: darkMode ? "white" : "black",
              }}
              tickFormatter={(date) => {
                const parsedDate = new Date(date);
                return parsedDate.toLocaleDateString("en-US", {
                  year: "2-digit",
                  month: "short",
                });
              }}
            />
            {/* Y-axis with dynamic scaling based on the selected metric */}
            <YAxis
              domain={
                selectedMetric.includes("Yield")
                  ? [0, 0.1] // Set a max value for Yield metrics
                  : [0, (dataMax) => Math.ceil(dataMax * 1.1)] // Dynamic scaling
              }
              tickCount={8}
              tick={{
                fontSize: 16,
                fill: darkMode ? "white" : "black",
              }}
              allowDecimals={true}
              scale="linear"
              tickFormatter={(value) => Number(value.toPrecision(4))}
            />
            {/* Tooltip on hover */}
            <Tooltip />
            {/* Legend to show line names */}
            <Legend wrapperStyle={{ paddingTop: 20 }} />
            {/* Reference line for benchmark value */}
            <ReferenceLine
              y={benchmarks[selectedMetric]} // Display benchmark line
              stroke="red"
            />
            {/* Line chart showing historical values */}
            <Line
              type="linear"
              dataKey="value"
              stroke={darkMode ? "white" : "black"}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </section>
  );
}

export default HistoricalComparisonComponent;
