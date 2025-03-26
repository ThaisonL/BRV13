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
  const { data, status, error } = useSelector((state) => state.keyMetrics);
  const [selectedMetric, setSelectedMetric] = useState("currentRatio");

  const { darkMode } = useOutletContext();  // Get darkMode state

  useEffect(() => {
    dispatch(fetchKeyMetrics());
  }, [dispatch]);

  if (status === "loading") return <p>Loading historical data...</p>;
  if (status === "failed") return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No historical data available</p>;

  const benchmarks = {
    currentRatio: 1.5,
    debtToEquity: 1.0,
    roe: 0.15,
    netDebtToEBITDA: 2.0,
    earningsYield: 0.05,
    freeCashFlowYield: 0.05,
  };

  const metricNames = {
    currentRatio: "Current Ratio",
    debtToEquity: "Debt to Equity",
    roe: "Return on Equity (ROE)",
    netDebtToEBITDA: "Net Debt to EBITDA",
    earningsYield: "Earnings Yield",
    freeCashFlowYield: "Free Cash Flow Yield",
  };

  const historicalData = data
    .map((item) => ({
      date: item.date,
      value: item[selectedMetric],
    }))
    .reverse();

  return (
    <section
      className={`flex flex-col items-center w-full max-w-2xl 
      ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <h2 className="text-xl font-serif mb-4">
        Historical Comparison of Financial Metrics
      </h2>
      <select
        className={`mt-4 mb-4 p-2 border rounded text-[14px] 
        ${darkMode ? "bg-gray-700 text-white" : "bg-[#fcfcfc] text-black"}`}
        value={selectedMetric}
        onChange={(e) => setSelectedMetric(e.target.value)}
        aria-label = "Dropdown menu for Financal Health indicator"
      >
        {Object.keys(benchmarks).map((metric) => (
          <option key={metric} value={metric}>
            {metricNames[metric]}
          </option>
        ))}
      </select>
      <section
        className={`flex justify-center w-11/12 pt-5 h-[420px] rounded-lg shadow-lg 
        ${darkMode ? "bg-gray-700" : "bg-[#faebd7]"}`}
      >
        <ResponsiveContainer width="90%" height={400}>
          <LineChart
            data={historicalData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={darkMode ? "#fefefe" : "#ccc"}
            />
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
            <YAxis
              domain={
                selectedMetric.includes("Yield")
                  ? [0, 0.1]
                  : [0, (dataMax) => Math.ceil(dataMax * 1.1)]
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
            <Tooltip />
            <Legend wrapperStyle={{ paddingTop: 20 }} />
            <ReferenceLine
              y={benchmarks[selectedMetric]}
              stroke="red"
            />
            <Line
              type="linear"
              dataKey="value"
              stroke={darkMode ? "white" : "black"}
            />
            <Line
              type="basis"
              dataKey="Benchmark"
              stroke={darkMode ? "#b33a3a" : "#b33a3a"}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </section>
  );
}

export default HistoricalComparisonComponent;
