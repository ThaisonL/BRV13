import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Reducers/counterSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
  },
});

export default store;
