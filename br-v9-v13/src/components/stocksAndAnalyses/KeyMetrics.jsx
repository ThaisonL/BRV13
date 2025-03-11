import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchKeyMetrics } from "../../Reducers/keyMetricsSlice";

function KeyMetrics() {
  const dispatch = useDispatch();
  const {
    data = [],
    status,
    error,
  } = useSelector((state) => state.keyMetrics || {});

  useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(fetchKeyMetrics());
    }
  }, [dispatch, data]);

  if (status === "loading") return <p>Loading key metrics...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const metrics = data[0] || {}; // Get the first (and only) object from the array

  return (
    <main>
      <h2>Key Metrics</h2>
      {Object.keys(metrics).length > 0 ? (
        <ul>
          {Object.entries(metrics).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </main>
  );
}

export default KeyMetrics;
