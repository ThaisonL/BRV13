import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockPriceChange } from "../../Reducers/AppleSlice";  // Import of Redux action to fetch stock price changes
import { useOutletContext } from "react-router-dom";

const AppleStock = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux store
  const { priceChange, loading, error } = useSelector((state) => state.stock); // Access stock data from Redux store

  // Retrieve the darkMode value from Outlet context, used to style components dynamically
  const { darkMode } = useOutletContext();

  useEffect(() => {
    dispatch(fetchStockPriceChange()); // Dispatch action to fetch Apple stock price change on component mount
  }, [dispatch]);

  // Function to determine the text color based on stock price change value
  const getIndicatorColor = (value) => {
    if (value > 0) return "text-green-500"; // Green if price has increased
    if (value < 0) return "text-red-500";   // Red if price has decreased
    return "text-yellow-500";               // Yellow if price is unchanged or neutral
  };

  console.log("Apple stock", priceChange); // Log stock data for debugging

  // If loading, show a loading message with the appropriate text color based on darkMode
  if (loading) return <p className={`text-center text-2xl ${darkMode ? "text-white" : "text-black"}`}>Loading AAPL price change...</p>;
  
  // If there is an error, display the error message with different text color based on darkMode
  if (error) return <p className={`text-center text-2xl ${darkMode ? "text-red-400" : "text-red-600"}`}>Error: {error}</p>;
  
  // If no price data is available, display a message indicating no data
  if (!priceChange || Object.keys(priceChange).length === 0) {
    return <p className={`text-center text-2xl ${darkMode ? "text-white" : "text-black"}`}>No price change data available.</p>;
  }

  return (
    // Section that displays stock price change data with conditional styles based on darkMode
    <section className={`w-11/12 flex flex-col mt-7 mb-7 p-3.5 justify-center items-center box-content shadow-lg rounded-md 
      ${darkMode ? 'bg-[rgb(55,65,81)] text-white' : 'bg-[#faebd7] text-black'}`}>
      
      <h2 className="font-serif text-2xl md:text-3xl lg:text-3xl text-center">
        AAPL Stock Price Change over time
      </h2>

      {/* Displaying stock price changes for different periods */}
      <ul className="flex flex-row flex-wrap m-2 p-2 gap-1 justify-center items-center">
        <li className="rounded-2xl">
          1 Day: <span className={getIndicatorColor(priceChange["1D"])}>{priceChange?.["1D"] ?? "N/A"}%</span>
        </li>
        <li className="rounded-2xl">
          5 Day: <span className={getIndicatorColor(priceChange["5D"])}>{priceChange?.["5D"] ?? "N/A"}%</span>
        </li>
      </ul>

      <ul className="flex flex-row flex-wrap m-2 p-2 gap-1 justify-center items-center">
        <li className="rounded-2xl">
          1 Month: <span className={getIndicatorColor(priceChange["1M"])}>{priceChange?.["1M"] ?? "N/A"}%</span>
        </li>
        <li className="rounded-2xl">
          3 Months: <span className={getIndicatorColor(priceChange["3M"])}>{priceChange?.["3M"] ?? "N/A"}%</span>
        </li>
        <li className="rounded-2xl">
          6 Months: <span className={getIndicatorColor(priceChange["6M"])}>{priceChange?.["6M"] ?? "N/A"}%</span>
        </li>
      </ul>

      <ul className="flex flex-row flex-wrap m-2 p-2 gap-1 justify-center items-center">
        <li className="rounded-2xl">
          Year to Date: <span className={getIndicatorColor(priceChange["ytd"])}>{priceChange?.["ytd"] ?? "N/A"}%</span>
        </li>
        <li className="rounded-2xl">
          1 Year: <span className={getIndicatorColor(priceChange["1Y"])}>{priceChange?.["1Y"] ?? "N/A"}%</span>
        </li>
        <li className="rounded-2xl">
          3 Years: <span className={getIndicatorColor(priceChange["3Y"])}>{priceChange?.["3Y"] ?? "N/A"}%</span>
        </li>
        <li className="rounded-2xl">
          5 Year: <span className={getIndicatorColor(priceChange["5Y"])}>{priceChange?.["5Y"] ?? "N/A"}%</span>
        </li>
        <li className="rounded-2xl">
          10 Years: <span className={getIndicatorColor(priceChange["10Y"])}>{priceChange?.["10Y"] ?? "N/A"}%</span>
        </li>
      </ul>
    </section>
  );
};

export default AppleStock;
