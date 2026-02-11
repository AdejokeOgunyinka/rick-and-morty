import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching characters list
export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (url, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return {
        characters: response.data.results,
        nextUrl: response.data.info?.next || "",
        count: response.data.info?.count || 0,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  characters: [],
  error: "",
  count: 0,
  url: "https://rickandmortyapi.com/api/character",
  nextUrl: "",
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.characters;
        state.count = action.payload.count;
        state.nextUrl = action.payload.nextUrl;
        state.error = "";
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.characters = [];
        state.count = 0;
        state.nextUrl = "";
        state.error = action.payload;
      });
  },
});

// Selectors
export const selectCharacters = (state) => state.characters.characters;
export const selectCharactersLoading = (state) => state.characters.loading;
export const selectCharactersError = (state) => state.characters.error;
export const selectCharactersUrl = (state) => state.characters.url;
export const selectCharactersNextUrl = (state) => state.characters.nextUrl;
export const selectCharactersCount = (state) => state.characters.count;

export default charactersSlice.reducer;
