import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistoricalPrices } from "../../Reducers/historicalPricesSlice";
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

  useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(fetchHistoricalPrices());
    }
  }, [dispatch]);

  if (status === "loading") return <p>Loading historical prices...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <main className="w-full flex items-center  flex-col min-h-screen">
      <h2>Historical Prices (in $)</h2>
      {data?.historical ? (
        <section className="flex justify-center w-11/12 h-[400px]">
          <ResponsiveContainer width="90%" height="100%">
            <LineChart
              data={[...data.historical]
                .filter((item) => new Date(item.date).getFullYear() >= 2000)
                .reverse()
                .filter((_, index) => index % 5 === 0)}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="linear"
                dataKey="close"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>
      ) : (
        <p>No data available</p>
      )}
    </main>
  );
}

export default HistoricalPrices;
