import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Reducers/counterSlice";
import historicalPricesReducer from "../Reducers/historicalPricesSlice";
import keyMetricsReducer from "../Reducers/keyMetricsSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
    historicalPrices: historicalPricesReducer,
    keyMetrics: keyMetricsReducer,
  },
});

export default store;
