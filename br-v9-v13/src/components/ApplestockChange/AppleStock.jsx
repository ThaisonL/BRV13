import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockPriceChange } from "../../Reducers/AppleSlice";

const AppleStock = () => {
  const dispatch = useDispatch();
  const { priceChange, loading, error } = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(fetchStockPriceChange());
  }, []);

  // Logging priceChange to see what it contains
  console.log("Price Change:", priceChange);

  // Add defensive checks before accessing the priceChange data
  if (loading) return <p>Loading AAPL price change...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!priceChange || Object.keys(priceChange).length === 0) {
    return <p>No price change data available.</p>;
  }

  return (
    <div>
      <h2>AAPL Stock Price Change</h2>
      <ul>
        <li>1 Day: {priceChange?.["1D"] ?? "N/A"}%</li>
        <li>5 Day: {priceChange?.["5D"] ?? "N/A"}%</li>
        <li>1 Month: {priceChange?.["1M"] ?? "N/A"}%</li>
        <li>1 Year: {priceChange?.["1Y"] ?? "N/A"}%</li>
      </ul>
    </div>
  );
};

export default AppleStock;
