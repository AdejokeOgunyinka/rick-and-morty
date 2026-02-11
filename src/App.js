import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Characters from "./pages/characters";
import Favourites from "./pages/favourites";
import Character from "./pages/character";
import SearchResults from "./pages/searchResults";
import store, { persistor } from "./store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>
              <Route path="/" element={<Characters />} />
              <Route path="/characters/:id" element={<Character />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/search/:keyword" element={<SearchResults />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
