import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Store from "../../store";
import PageTemplate from "../organisms/pageTemplate/pageTemplate";
import RowCard from "../molecules/rowCard/rowCard";
import { removeFromFavourites } from "../../actions/favourites";

const Favourites = () => {
  let navigate = useNavigate();

  const {
    favouritesReducer: { favourites },
  } = useSelector((state) => state);
  const [filteredFavourites, setFilteredFavourites] = useState([]);

  return (
    <PageTemplate
      data={favourites}
      filteredData={filteredFavourites}
      setFilteredData={setFilteredFavourites}
    >
      {filteredFavourites.length === 0
        ? favourites.length > 0 &&
          favourites.map((favourite) => {
            return (
              <RowCard
                imageUrl={favourite.image}
                name={favourite.name}
                status={favourite.status}
                species={favourite.species}
                gender={favourite.gender}
                key={favourite.id}
                onClick={() => Store.dispatch(removeFromFavourites(favourite))}
                onClickCard={() => navigate(`/characters/${favourite.id}`)}
                isFavourite={true}
              />
            );
          })
        : filteredFavourites.length > 0 &&
          filteredFavourites.map((favourite) => {
            return (
              <RowCard
                imageUrl={favourite.image}
                name={favourite.name}
                status={favourite.status}
                species={favourite.species}
                gender={favourite.gender}
                key={favourite.id}
                onClick={() => Store.dispatch(removeFromFavourites(favourite))}
                isFavourite={true}
              />
            );
          })}
    </PageTemplate>
  );
};

export default Favourites;
