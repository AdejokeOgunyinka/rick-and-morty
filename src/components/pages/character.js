import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Store from "../../store";
import PageTemplate from "../organisms/pageTemplate/pageTemplate";
import Card from "../molecules/card/card";
import { fetchCharacter } from "../../actions/character";
import { FaArrowAltCircleLeft } from "react-icons/fa";

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
    //imageUrl, name, status, species, type, gender, origin, location
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
