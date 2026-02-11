import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import PageTemplate from "../components/organisms/pageTemplate/pageTemplate";
import Card from "../components/molecules/card/card";
import { fetchCharacter, selectCharacter, selectFetchCharacterSuccess } from "../features/character/characterSlice";
import { selectCharacters } from "../features/characters/charactersSlice";

const Character = () => {
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const character = useSelector(selectCharacter);
  const fetchCharacterSuccess = useSelector(selectFetchCharacterSuccess);
  const characters = useSelector(selectCharacters);

  const { image, name, status, species, type, gender, origin, location } = character;

  useEffect(() => {
    dispatch(fetchCharacter(`https://rickandmortyapi.com/api/character/${id}`));
  }, [dispatch, id]);

  return fetchCharacterSuccess ? (
    <PageTemplate
      data={characters}
      filteredData={filteredCharacters}
      setFilteredData={setFilteredCharacters}
    >
      <FaArrowAltCircleLeft
        onClick={() => navigate(-1)}
        className="back-arrow"
      />
      <Card
        imageUrl={image}
        name={name}
        status={status}
        species={species}
        type={type}
        gender={gender}
        origin={origin?.name}
        location={location?.name}
      />
    </PageTemplate>
  ) : (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Character;
