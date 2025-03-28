import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiKey = "eYFho6s4OjEyYVslMtVJrmYVI8llxviY";
const historical_prices_url = `https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2000-01-01&serietype=line&apikey=${apiKey}`;

export const fetchHistoricalPrices = createAsyncThunk(
  "historicalPrices/fetch",
  async () => {
    const response = await fetch(historical_prices_url);
    if (!response.ok) {
      throw new Error("Failed to fetch historical prices");
    }
    const data = await response.json();
    return data;  // Vi returnerar här utan att spara till localStorage
  }
);

const historicalPricesSlice = createSlice({
  name: "historicalPrices",
  initialState: {
    data: [], // Vi sätter initialt data som en tom array
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
        state.data = action.payload;  // Här får vi den data som kommer från API:et
      })
      .addCase(fetchHistoricalPrices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default historicalPricesSlice.reducer;
