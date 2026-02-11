# Redux Toolkit Migration Guide

## Why Did We Migrate?

The app was using **legacy Redux patterns** that are now considered outdated. Think of it like using an old flip phone when smartphones exist - the old way works, but the new way is much easier and has better features built-in.

### Problems with the Old Code

1. **Too much boilerplate** - We had to write separate files for actions and reducers
2. **Manual action types** - We had to define string constants like `"FETCH_CHARACTERS_REQUEST"`
3. **Immutability was tricky** - We had to carefully spread objects (`...state`) to avoid mutating state
4. **Async logic was verbose** - Using `redux-thunk` required a lot of manual setup

### What Redux Toolkit (RTK) Gives Us

- Less code to write
- Built-in best practices
- Simpler async handling
- Better developer experience

---

## Key Concepts Explained

### 1. `createSlice` - Combines Actions + Reducers

**Before (Old Way):**
We had two separate files:

```js
// actions/favourites.js
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const addToFavourites = (character) => ({
  type: ADD_TO_FAVOURITES,
  payload: character,
});

// reducers/favourites.js
export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    default:
      return state;
  }
};
```

**After (RTK Way):**
Everything in one file:

```js
// features/favourites/favouritesSlice.js
const favouritesSlice = createSlice({
  name: "favourites",
  initialState: { favourites: [] },
  reducers: {
    addToFavourites: (state, action) => {
      // RTK uses Immer under the hood, so we can "mutate" directly!
      state.favourites.push(action.payload);
    },
  },
});

export const { addToFavourites } = favouritesSlice.actions;
```

**Why is this better?**
- Action types are auto-generated (e.g., `"favourites/addToFavourites"`)
- We can write "mutating" code that's actually immutable (RTK uses a library called Immer)
- Everything related to one feature lives in one file

---

### 2. `createAsyncThunk` - Handles API Calls

When you fetch data from an API, three things can happen:
1. **Pending** - Request started (show loading spinner)
2. **Fulfilled** - Success! (show the data)
3. **Rejected** - Error (show error message)

**Before (Old Way):**
We had to manually create three action creators and dispatch them:

```js
// We had to create these manually
export const fetchCharactersRequest = () => ({ type: FETCH_CHARACTERS_REQUEST });
export const fetchCharactersSuccess = (data) => ({ type: FETCH_CHARACTERS_SUCCESS, payload: data });
export const fetchCharactersFailure = (error) => ({ type: FETCH_CHARACTERS_FAILURE, payload: error });

// And manually dispatch them
export const fetchCharacters = (url) => {
  return function (dispatch) {
    dispatch(fetchCharactersRequest());
    axios.get(url)
      .then((response) => dispatch(fetchCharactersSuccess(response.data)))
      .catch((error) => dispatch(fetchCharactersFailure(error.message)));
  };
};
```

**After (RTK Way):**

```js
export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (url, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data.results; // This becomes action.payload on success
    } catch (error) {
      return rejectWithValue(error.message); // This becomes action.payload on failure
    }
  }
);
```

RTK automatically creates the three action types for us:
- `characters/fetchCharacters/pending`
- `characters/fetchCharacters/fulfilled`
- `characters/fetchCharacters/rejected`

We handle them in `extraReducers`:

```js
extraReducers: (builder) => {
  builder
    .addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchCharacters.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
    })
    .addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
};
```

---

### 3. `configureStore` - Sets Up the Store

**Before (Old Way):**

```js
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const Store = createStore(persistedReducer, applyMiddleware(thunk));
```

**After (RTK Way):**

```js
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    character: characterReducer,
    characters: charactersReducer,
    favourites: favouritesReducer,
    search: searchReducer,
  },
});
```

**Why is this better?**
- Redux Thunk is included automatically (no need to add it manually)
- Redux DevTools are enabled automatically
- Good default middleware is set up for you

---

## File Structure Decision

We chose **feature-based organization**:

```
src/
  features/
    character/
      characterSlice.js      # Single character data
    characters/
      charactersSlice.js     # List of characters (home page)
    favourites/
      favouritesSlice.js     # User's favourites
    search/
      searchSlice.js         # Search results
```

**Why this structure?**
- All code related to one feature is in one place
- Easy to find what you're looking for
- Scales well as the app grows
- Recommended by the Redux team

---

## Anti-Patterns We Fixed

### 1. Direct Store Import (Bad Practice)

**Before (Bad):**
```js
import Store from "../store";

// Inside component
Store.dispatch(fetchCharacters(url));
```

**After (Good):**
```js
import { useDispatch } from "react-redux";

const MyComponent = () => {
  const dispatch = useDispatch();

  // Inside component
  dispatch(fetchCharacters(url));
};
```

**Why was the old way bad?**
- Importing the store directly creates tight coupling
- Makes testing harder
- Breaks React's unidirectional data flow
- Components should get dispatch from React-Redux hooks

---

### 2. Missing Scroll Event Cleanup (Memory Leak)

**Before (Bad):**
```js
// This never gets cleaned up!
window.onscroll = () => {
  if (/* scrolled to bottom */) {
    loadMore();
  }
};
```

**After (Good):**
```js
useEffect(() => {
  const handleScroll = () => {
    if (/* scrolled to bottom */) {
      loadMore();
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Cleanup function - runs when component unmounts
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

**Why was the old way bad?**
- The event listener stays attached even after the component is removed
- This is called a "memory leak"
- Can cause bugs and slow down the app
- Always clean up event listeners in the useEffect return function

---

### 3. Using Deprecated `match.params`

**Before (Bad):**
```js
const Character = ({ match }) => {
  const { id } = match.params;  // Old React Router pattern
};
```

**After (Good):**
```js
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();  // Modern React Router hook
};
```

**Why change?**
- `match` prop was removed in React Router v6
- Hooks are the modern way to access router data
- Cleaner, more consistent code

---

### 4. Provider/Router Nesting Order

**Before:**
```jsx
<Router>
  <Provider store={store}>
    {/* app */}
  </Provider>
</Router>
```

**After:**
```jsx
<Provider store={store}>
  <Router>
    {/* app */}
  </Provider>
</Router>
```

**Why?**
- Redux Provider should wrap everything that needs Redux
- This ensures Redux is available throughout the entire app
- It's a minor issue, but follows best practices

---

## Selectors - Clean State Access

We added **selectors** to each slice:

```js
// In the slice file
export const selectFavourites = (state) => state.favourites.favourites;
export const selectCharacters = (state) => state.characters.characters;
```

**Why use selectors?**

1. **Single source of truth** - If state shape changes, update one place
2. **Cleaner components** - Components don't need to know state structure
3. **Reusability** - Same selector works everywhere
4. **Future-proofing** - Easy to add memoization later with `createSelector`

**Usage in components:**
```js
// Instead of this:
const favourites = useSelector((state) => state.favourites.favourites);

// We do this:
import { selectFavourites } from "../features/favourites/favouritesSlice";
const favourites = useSelector(selectFavourites);
```

---

## State Key Changes

We cleaned up the state keys:

| Old Key (Ugly) | New Key (Clean) |
|----------------|-----------------|
| `state.characterReducer` | `state.character` |
| `state.charactersReducer` | `state.characters` |
| `state.favouritesReducer` | `state.favourites` |
| `state.searchReducer` | `state.search` |

The "Reducer" suffix was unnecessary and made the code verbose.

---

## Redux Persist Decision

We kept `redux-persist` for the favourites feature:

```js
const persistConfig = {
  key: "favourites",
  storage,
  whitelist: ["favourites"],  // Only persist favourites, not API data
};
```

**Why only persist favourites?**
- Characters data comes from the API - no need to cache it
- Search results are temporary
- Favourites are user data that should survive page refresh

**Note:** Because we changed the persist key from `"root"` to `"favourites"`, users will need to re-add their favourites after this update. This is a trade-off to avoid complex state migration code.

---

## Summary

| What Changed | Why |
|--------------|-----|
| Actions + Reducers → Slices | Less code, better organization |
| Manual thunks → createAsyncThunk | Automatic pending/fulfilled/rejected handling |
| createStore → configureStore | Built-in middleware, DevTools |
| Store.dispatch() → useDispatch() | Proper React-Redux pattern |
| window.onscroll → useEffect cleanup | Prevent memory leaks |
| match.params → useParams() | Modern React Router |

---

## Further Reading

- [Redux Toolkit Official Docs](https://redux-toolkit.js.org/)
- [Why Redux Toolkit](https://redux.js.org/introduction/why-rtk-is-redux-today)
- [createAsyncThunk Docs](https://redux-toolkit.js.org/api/createAsyncThunk)
- [Immer - How "mutations" work](https://immerjs.github.io/immer/)
