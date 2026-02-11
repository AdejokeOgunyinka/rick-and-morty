import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching a single character
export const fetchCharacter = createAsyncThunk(
  "character/fetchCharacter",
  async (url, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  character: {},
  error: "",
  fetchCharacterSuccess: false,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.loading = true;
        state.character = {};
        state.fetchCharacterSuccess = false;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.character = action.payload;
        state.error = "";
        state.fetchCharacterSuccess = true;
      })
      .addCase(fetchCharacter.rejected, (state, action) => {
        state.loading = false;
        state.character = {};
        state.error = action.payload;
        state.fetchCharacterSuccess = false;
      });
  },
});

// Selectors
export const selectCharacter = (state) => state.character.character;
export const selectCharacterLoading = (state) => state.character.loading;
export const selectCharacterError = (state) => state.character.error;
export const selectFetchCharacterSuccess = (state) => state.character.fetchCharacterSuccess;

export default characterSlice.reducer;
