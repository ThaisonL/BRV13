import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistoricalPrices } from "../../Reducers/historicalPricesSlice";
import { useOutletContext } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function HistoricalPrices() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector(
    (state) => state.historicalPrices
  );

  const { darkMode } = useOutletContext();

  useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(fetchHistoricalPrices());
    }
  }, [dispatch]);

  if (status === "loading") return <p>Loading historical prices...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <section className="flex items-center justify-center flex-col w-full">
      <h2 className={`text-xl font-bold mt-1 lg:text-3xl mb-6.5 ${
        darkMode ? "text-white" : "text-black"
      }`}>
        Apples stock worth in $ since the turn of the century
      </h2>
      {data?.historical ? (
        <section
          className={`flex justify-center w-11/12 pt-5 h-[425px] rounded-lg shadow-lg ${
            darkMode ? "bg-gray-700" : "bg-[#faebd7]"
          }`}
        >
          <ResponsiveContainer width="90%" height={400}>
            <LineChart
              data={[...data.historical]
                .filter((item) => new Date(item.date).getFullYear() >= 2000)
                .reverse()
                .filter((_, index) => index % 5 === 0)}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#fefefe" : "#ccc"} />
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
              <YAxis tick={{ fontSize: 16, fill: darkMode ? "white" : "black" }} />
              <Tooltip />
              <Legend wrapperStyle={{ paddingTop: 20, color: darkMode ? "white" : "black" }} />
              <Line
                type="linear"
                dataKey="close"
                stroke={darkMode ? "white" : "black"}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>
      ) : (
        <p className={darkMode ? "text-white" : "text-black"}>No data available</p>
      )}
    </section>
  );
}

export default HistoricalPrices;
