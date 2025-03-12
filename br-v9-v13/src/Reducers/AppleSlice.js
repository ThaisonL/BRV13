// store/stockSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "ihSjwD1zetWBa6IdDZPyteD1fw0DihGa";
const BASE_URL = "https://financialmodelingprep.com/api/v3";

// Async thunk for stock price change (AAPL)
export const fetchStockPriceChange = createAsyncThunk(
  "stock/fetchPriceChange",
  async (thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/stock-price-change/AAPL?apikey=${API_KEY}`
      );
      const data = await response.json();
      console.log("AAPL Stock Api response", data);
      return data[0] || {}; // API returns an array with a single object for AAPL
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState: {
    priceChange: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockPriceChange.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockPriceChange.fulfilled, (state, action) => {
        state.loading = false;
        state.priceChange = action.payload;
      })
      .addCase(fetchStockPriceChange.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default stockSlice.reducer;
