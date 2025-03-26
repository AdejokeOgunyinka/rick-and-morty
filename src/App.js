import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Characters from "./pages/characters";
import Favourites from "./pages/favourites";
import Character from "./pages/character";
import SearchResults from "./pages/searchResults";
import Store from "./store";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Provider store={Store}>
          <Routes>
            <Route path="/" exact element={<Characters />} />
            <Route path="/characters/:id" element={<Character />} />
            <Route path="/characters" exact element={<Characters />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/search/:keyword" element={<SearchResults />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
};

export default App;
