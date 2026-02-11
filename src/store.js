import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import characterReducer from "./features/character/characterSlice";
import charactersReducer from "./features/characters/charactersSlice";
import favouritesReducer from "./features/favourites/favouritesSlice";
import searchReducer from "./features/search/searchSlice";

const persistConfig = {
  key: "favourites",
  storage,
  whitelist: ["favourites"],
};

const persistedFavouritesReducer = persistReducer(persistConfig, favouritesReducer);

const store = configureStore({
  reducer: {
    character: characterReducer,
    characters: charactersReducer,
    favourites: persistedFavouritesReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
