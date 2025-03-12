import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "0db69991ed83415fa6f591a1924e45ef";
const BASE_URL =
  "https://newsapi.org/v2/top-headlines?category=business&apiKey=";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}${API_KEY}`);
      const data = await response.json();
      console.log("News API response", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default newsSlice.reducer;
