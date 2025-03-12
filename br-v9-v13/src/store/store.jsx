import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Reducers/counterSlice";
import stockReducer from "../Reducers/AppleSlice"; // Import the stock slice
import newsReducer from "../Reducers/FMPnews";
const store = configureStore({
  reducer: {
    count: countReducer,
    stock: stockReducer, // Add the stock reducer
    news: newsReducer,
  },
});

export default store;
