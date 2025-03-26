import { configureStore } from "@reduxjs/toolkit";

// Import reducers for different parts of the application
import historicalPricesReducer from "../Reducers/historicalPricesSlice";
import keyMetricsReducer from "../Reducers/keyMetricsSlice";
import stockReducer from "../Reducers/AppleSlice";
import newsReducer from "../Reducers/NewsAPISlice"; 

// Create the Redux store and combine all slices/reducers
const store = configureStore({
  reducer: {
    historicalPrices: historicalPricesReducer, // Stores historical stock prices
    keyMetrics: keyMetricsReducer, // Stores financial key metrics
    stock: stockReducer, // Stores stock-related data (e.g., Apple)
    news: newsReducer, // Stores news articles from API
  },
});

export default store;
