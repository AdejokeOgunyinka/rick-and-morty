import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Store from '../../store';
import { fetchCharacters } from '../../actions/characters';
import { addToFavourites } from '../../actions/favourites';
import PageTemplate from "../organisms/pageTemplate/pageTemplate";
import RowCard from '../molecules/rowCard/rowCard';


const Characters = () => {
    const [filteredCharacters,setFilteredCharacters] = useState([]);

    const {charactersReducer:{loading, characters, url}, favouritesReducer: {favourites}} 
    = useSelector( state => state );
    
    
    let history = useHistory();
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        Store.dispatch(fetchCharacters(`https://rickandmortyapi.com/api/character?page=${page}`));
    }, [loading, characters, url, page]);

    const scrollToEnd = () => {
        setPage(page + 1);
    }

    window.onscroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop 
            === document.documentElement.offsetHeight
        ){
            scrollToEnd();
        }
    }

    const checkIfFavourite = (id) => {
        const favourites_id_set = new Set(favourites.map(favourite => favourite.id));
        const favourites_id_list = [...favourites_id_set];
    
        if (favourites_id_list.includes(id)){
            return true
        } else {
            return false
        }
    };
    

    return (
            <PageTemplate data={characters} filteredData={filteredCharacters} setFilteredData={setFilteredCharacters}>
                { filteredCharacters.length === 0 ? characters.length > 0 && 
                        characters.map(
                            character => {
                                return (
                                    <RowCard 
                                        imageUrl={character.image} 
                                        name={character.name} 
                                        status={character.status}
                                        species={character.species}
                                        gender={character.gender}
                                        key={character.id}
                                        onClick={() => Store.dispatch(addToFavourites(character))}
                                        onClickCard={() => history.push(`/characters/${character.id}`)}
                                        isFavourite={checkIfFavourite(character.id)}
                                    />
                                )
                            }
                        ):
                        filteredCharacters.length > 0 && 
                        filteredCharacters.map(
                            character => {
                                return (
                                    <RowCard 
                                        imageUrl={character.image} 
                                        name={character.name} 
                                        status={character.status}
                                        species={character.species}
                                        gender={character.gender}
                                        key={character.id}
                                        onClick={() => Store.dispatch(addToFavourites(character))}
                                        onClickCard={() => history.push(`/characters/${character.id}`)}
                                        isFavourite={checkIfFavourite(character.id)}
                                    />
                                )
                            }
                        )
                    }
            </PageTemplate>
    )
};

export default Characters;
