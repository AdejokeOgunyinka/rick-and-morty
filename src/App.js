// import Searchbar from "./components/atoms/searchbar/searchbar";
// import Dropdown from "./components/atoms/dropdown/dropdown";
// import RowCard from "./components/molecules/rowCard/rowCard";
// import Card from "./components/molecules/card/card";
// import Sidebar from "./components/organisms/sidebar/sidebar";
// import Characters from "./components/pages/characters/characters";
// import Favourites from "./components/pages/favourites/favourites";
import Character from "./components/pages/character/character";

const App = () => {
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];

  return (
    <div className="App">
      {/* <Searchbar placeholder="Search..."/>
      <Dropdown placeholder="Gender" options={options}/> */}
      {/* <RowCard /> */}
      {/* <Card /> */}
      {/* <Sidebar /> */}
      {/* <Characters /> */}
      {/* <Favourites /> */}
      <Character />
    </div>
  );
}

export default App;
