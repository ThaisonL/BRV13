import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API for fetching historical stock prices
const apiKey = "4VaQvzEdvbD227Udssfv4wn00zgHLV3b";
const historical_prices_url = `https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2000-01-01&serietype=line&apikey=${apiKey}`;

// Load historical data from local storage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("historicalPrices");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading from local storage:", error);
    return [];
  }
};

// Save historical data to local storage
const saveToLocalStorage = (data) => {
  try {
    localStorage.setItem("historicalPrices", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to local storage:", error);
  }
};

// Async function to fetch historical stock prices
export const fetchHistoricalPrices = createAsyncThunk(
  "historicalPrices/fetch",
  async () => {
    const response = await fetch(historical_prices_url);
    if (!response.ok) {
      throw new Error("Failed to fetch historical prices");
    }
    const data = await response.json();
    saveToLocalStorage(data);
    return data;
  }
);

// Slice to manage historical prices state
const historicalPricesSlice = createSlice({
  name: "historicalPrices",
  initialState: {
    data: loadFromLocalStorage(),
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoricalPrices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHistoricalPrices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchHistoricalPrices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default historicalPricesSlice.reducer;
