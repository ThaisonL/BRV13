import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API for fetching key metrics
const apiKey = "4VaQvzEdvbD227Udssfv4wn00zgHLV3b";
const key_metrics_url = `https://financialmodelingprep.com/api/v3/key-metrics/AAPL?apikey=${apiKey}`;

// Load key metrics from local storage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("keyMetrics");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading from local storage:", error);
    return [];
  }
};

// Save key metrics to local storage
const saveToLocalStorage = (data) => {
  try {
    localStorage.setItem("keyMetrics", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to local storage:", error);
  }
};

// Async function to fetch key financial metrics
export const fetchKeyMetrics = createAsyncThunk(
  "keyMetrics/fetch",
  async () => {
    const response = await fetch(key_metrics_url);
    if (!response.ok) {
      throw new Error("Failed to fetch key metrics");
    }
    const data = await response.json();
    saveToLocalStorage(data);
    return data;
  }
);

// Slice to manage key financial metrics state
const keyMetricsSlice = createSlice({
  name: "keyMetrics",
  initialState: {
    data: loadFromLocalStorage(),
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchKeyMetrics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchKeyMetrics.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchKeyMetrics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default keyMetricsSlice.reducer;
