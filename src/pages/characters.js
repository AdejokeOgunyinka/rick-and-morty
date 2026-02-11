import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/organisms/pageTemplate/pageTemplate";
import RowCard from "../components/molecules/rowCard/rowCard";
import { fetchCharacters, selectCharacters } from "../features/characters/charactersSlice";
import { addToFavourites, selectFavourites } from "../features/favourites/favouritesSlice";

const Characters = () => {
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const characters = useSelector(selectCharacters);
  const favourites = useSelector(selectFavourites);

  useEffect(() => {
    dispatch(fetchCharacters(`https://rickandmortyapi.com/api/character?page=${page}`));
  }, [dispatch, page]);

  const scrollToEnd = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        scrollToEnd();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollToEnd]);

  const checkIfFavourite = (id) => {
    const favouritesIdSet = new Set(favourites.map((favourite) => favourite.id));
    return favouritesIdSet.has(id);
  };

  const handleAddToFavourites = (character) => {
    dispatch(addToFavourites(character));
  };

  const renderCharacterList = (characterList) => {
    return characterList.map((character) => (
      <RowCard
        imageUrl={character.image}
        name={character.name}
        status={character.status}
        species={character.species}
        gender={character.gender}
        key={character.id}
        onClick={() => handleAddToFavourites(character)}
        onClickCard={() => navigate(`/characters/${character.id}`)}
        isFavourite={checkIfFavourite(character.id)}
      />
    ));
  };

  return (
    <PageTemplate
      data={characters}
      filteredData={filteredCharacters}
      setFilteredData={setFilteredCharacters}
    >
      {filteredCharacters.length === 0
        ? characters.length > 0 && renderCharacterList(characters)
        : filteredCharacters.length > 0 && renderCharacterList(filteredCharacters)}
    </PageTemplate>
  );
};

export default Characters;
