import { createStore, applyMiddleware } from "redux";
import rootReducer from "./combinedReducer";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(persistedReducer, applyMiddleware(thunk));

persistStore(Store);

export default Store;
