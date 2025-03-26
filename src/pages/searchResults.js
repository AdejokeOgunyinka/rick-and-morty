import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/organisms/pageTemplate/pageTemplate";
import RowCard from "../components/molecules/rowCard/rowCard";
import { fetchSearch } from "../actions/search";
import Store from "../store";

const SearchResults = ({ match }) => {
  let navigate = useNavigate();
  const { keyword } = match.params;

  const {
    searchReducer: { searchResults },
    favouritesReducer: { favourites },
  } = useSelector((state) => state);

  useEffect(() => {
    Store.dispatch(fetchSearch(keyword));
  }, [keyword]);

  const [filteredSearch, setFilteredSearch] = useState([]);

  const checkIfFavourite = (id) => {
    const favourites_id_set = new Set(
      favourites.map((favourite) => favourite.id)
    );
    const favourites_id_list = [...favourites_id_set];

    if (favourites_id_list.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <PageTemplate
      data={searchResults}
      filteredData={filteredSearch}
      setFilteredData={setFilteredSearch}
    >
      {filteredSearch.length === 0
        ? searchResults.length > 0 &&
          searchResults.map((character) => {
            return (
              <RowCard
                imageUrl={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                key={character.id}
                onClickCard={() => navigate(`/characters/${character.id}`)}
                isFavourite={checkIfFavourite(character.id)}
              />
            );
          })
        : filteredSearch.length > 0 &&
          filteredSearch.map((character) => {
            return (
              <RowCard
                imageUrl={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                key={character.id}
                onClickCard={() => navigate(`/characters/${character.id}`)}
                isFavourite={checkIfFavourite(character.id)}
              />
            );
          })}
    </PageTemplate>
  );
};

export default SearchResults;
