import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHistoricalPrices } from "../../Reducers/historicalPricesSlice";

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

  const handleRefresh = () => {
    dispatch(fetchHistoricalPrices());
  };

  if (status === "loading") return <p>Loading historical prices...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Historical Prices</h2>
      <button onClick={handleRefresh}>Refresh Data</button>
      {data?.historical ? (
        <ul>
          {data.historical.map((price) => (
            <li key={price.date}>
              {price.date}: ${price.close}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default HistoricalPrices;
