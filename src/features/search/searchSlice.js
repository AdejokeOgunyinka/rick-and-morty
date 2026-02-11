import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for searching characters
export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (keyword, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${keyword}`
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  searchResults: [],
  error: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true;
        state.searchResults = [];
        state.error = "";
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
        state.error = "";
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false;
        state.searchResults = [];
        state.error = action.payload;
      });
  },
});

// Selectors
export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchLoading = (state) => state.search.loading;
export const selectSearchError = (state) => state.search.error;

export default searchSlice.reducer;
