import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/organisms/pageTemplate/pageTemplate";
import Card from "../components/molecules/card/card";
import { fetchCharacter } from "../actions/character";
import Store from "../store";

const Character = ({ match }) => {
  const {
    characterReducer: {
      character: {
        image,
        name,
        status,
        species,
        type,
        gender,
        origin,
        location,
      },
      fetchCharacterSuccess,
    },
    charactersReducer: { characters },
  } = useSelector((state) => state);

  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const { id } = match.params;
  let navigate = useNavigate();

  useEffect(() => {
    Store.dispatch(
      fetchCharacter(`https://rickandmortyapi.com/api/character/${id}`)
    );
  }, [id]);

  return (
    //imageUrl, name, status, species, type, gender, origin, location are passed to the card component
    fetchCharacterSuccess ? (
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
          origin={origin.name}
          location={location.name}
        />
      </PageTemplate>
    ) : (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
  );
};

export default Character;
