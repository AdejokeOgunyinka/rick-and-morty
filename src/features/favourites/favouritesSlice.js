import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.favourites = state.favourites.filter(
        (favourite) => favourite.id !== action.payload.id
      );
    },
  },
});

// Actions
export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;

// Selectors
export const selectFavourites = (state) => state.favourites.favourites;

export default favouritesSlice.reducer;
