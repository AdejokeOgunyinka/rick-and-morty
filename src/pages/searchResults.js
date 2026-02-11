import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import PageTemplate from "../components/organisms/pageTemplate/pageTemplate";
import RowCard from "../components/molecules/rowCard/rowCard";
import { fetchSearch, selectSearchResults } from "../features/search/searchSlice";
import { selectFavourites } from "../features/favourites/favouritesSlice";

const SearchResults = () => {
  const [filteredSearch, setFilteredSearch] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { keyword } = useParams();

  const searchResults = useSelector(selectSearchResults);
  const favourites = useSelector(selectFavourites);

  useEffect(() => {
    dispatch(fetchSearch(keyword));
  }, [dispatch, keyword]);

  const checkIfFavourite = (id) => {
    const favouritesIdSet = new Set(favourites.map((favourite) => favourite.id));
    return favouritesIdSet.has(id);
  };

  const renderSearchResults = (results) => {
    return results.map((character) => (
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
    ));
  };

  return (
    <PageTemplate
      data={searchResults}
      filteredData={filteredSearch}
      setFilteredData={setFilteredSearch}
    >
      {filteredSearch.length === 0
        ? searchResults.length > 0 && renderSearchResults(searchResults)
        : filteredSearch.length > 0 && renderSearchResults(filteredSearch)}
    </PageTemplate>
  );
};

export default SearchResults;
