import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Reducers/counterSlice";
import historicalPricesReducer from "../Reducers/historicalPricesSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
    historicalPrices: historicalPricesReducer,
  },
});

export default store;
