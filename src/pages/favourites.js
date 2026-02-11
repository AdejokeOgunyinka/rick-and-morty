import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/organisms/pageTemplate/pageTemplate";
import RowCard from "../components/molecules/rowCard/rowCard";
import { removeFromFavourites, selectFavourites } from "../features/favourites/favouritesSlice";

const Favourites = () => {
  const [filteredFavourites, setFilteredFavourites] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favourites = useSelector(selectFavourites);

  const handleRemoveFromFavourites = (favourite) => {
    dispatch(removeFromFavourites(favourite));
  };

  const renderFavouritesList = (favouritesList) => {
    return favouritesList.map((favourite) => (
      <RowCard
        imageUrl={favourite.image}
        name={favourite.name}
        status={favourite.status}
        species={favourite.species}
        gender={favourite.gender}
        key={favourite.id}
        onClick={() => handleRemoveFromFavourites(favourite)}
        onClickCard={() => navigate(`/characters/${favourite.id}`)}
        isFavourite={true}
      />
    ));
  };

  return (
    <PageTemplate
      data={favourites}
      filteredData={filteredFavourites}
      setFilteredData={setFilteredFavourites}
    >
      {filteredFavourites.length === 0
        ? favourites.length > 0 && renderFavouritesList(favourites)
        : filteredFavourites.length > 0 && renderFavouritesList(filteredFavourites)}
    </PageTemplate>
  );
};

export default Favourites;
