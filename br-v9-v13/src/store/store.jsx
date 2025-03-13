import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Reducers/counterSlice";
import historicalPricesReducer from "../Reducers/historicalPricesSlice";
import keyMetricsReducer from "../Reducers/keyMetricsSlice";
import stockReducer from "../Reducers/AppleSlice"; // Import the stock slice
import newsReducer from "../Reducers/FMPnews";
const store = configureStore({
  reducer: {
    count: countReducer,
    historicalPrices: historicalPricesReducer,
    keyMetrics: keyMetricsReducer,
    stock: stockReducer, // Add the stock reducer
    news: newsReducer,
  },
});

export default store;
