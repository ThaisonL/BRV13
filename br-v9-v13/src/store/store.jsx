import { configureStore } from "@reduxjs/toolkit";
import historicalPricesReducer from "../Reducers/historicalPricesSlice";
import keyMetricsReducer from "../Reducers/keyMetricsSlice";
import stockReducer from "../Reducers/AppleSlice"; // Import the stock slice
import newsReducer from "../Reducers/NewsAPISlice";
const store = configureStore({
  reducer: {
    historicalPrices: historicalPricesReducer,
    keyMetrics: keyMetricsReducer,
    stock: stockReducer, // Add the stock reducer
    news: newsReducer,
  },
});

export default store;
