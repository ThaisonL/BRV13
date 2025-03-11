import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Reducers/counterSlice";
import stockReducer from "../Reducers/AppleSlice"; // Import the stock slice

const store = configureStore({
  reducer: {
    count: countReducer,
    stock: stockReducer, // Add the stock reducer
  },
});

export default store;
