import { Provider } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
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
          <Route path="/" exact component={Characters}/>
          <Route path="/characters/:id" exact component={Character}/>
          <Route path="/characters" exact component={Characters}/>
          <Route path="/favourites" exact component={Favourites}/>
          <Route path="/search/:keyword" exact component={SearchResults} />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
