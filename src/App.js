import { Provider } from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Characters from "./components/pages/characters/characters";
import Store from "./store";
import Favourites from "./components/pages/favourites/favourites";
import Character from "./components/pages/character/character";

const App = () => {

  return (
    <div className="App">
      <Router>
        <Provider store={Store}>
          <Route path="/" exact component={Characters}/>
          <Route path="/character/:id" exact component={Character}/>
          <Route path="/characters" exact component={Characters}/>

          <Route path="/favourites" exact component={Favourites}/>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
