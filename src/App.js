import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Characters from "./components/pages/characters";
import Store from "./store";
import Favourites from "./components/pages/favourites";
import Character from "./components/pages/character";
import SearchResults from "./components/pages/searchResults";

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
