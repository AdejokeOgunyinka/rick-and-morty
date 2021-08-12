import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory } from "react-router-dom";
import Store from '../../../store';
import { fetchCharacters } from '../../../actions/characters';
import { addToFavourites } from '../../../actions/favourites';
import { CharactersContainer, SidebarSection, Body, TopSection, SearchContainer, DropdownContainer, BottomSection } from './characters.style';
import Sidebar from '../../organisms/sidebar/sidebar';
import Searchbar from '../../atoms/searchbar/searchbar';
import Dropdown from '../../atoms/dropdown/dropdown';
import RowCard from '../../molecules/rowCard/rowCard';


const Characters = () => {

    // const dispatch = useDispatch();
    const {charactersReducer:{loading, characters, url, nextUrl, count}, favouritesReducer: {favourites}} 
        = useSelector( state => state );
    let history = useHistory();
    const [filteredCharacters,setFilteredCharacters] = useState([]);
    
    useEffect(() => {
        Store.dispatch(fetchCharacters(url));
    }, [loading, characters, url]);

    const checkIfFavourite = (id) => {
        const favourites_id_set = new Set(favourites.map(favourite => favourite.id));
        const favourites_id_list = [...favourites_id_set];
    
        if (favourites_id_list.includes(id)){
            return true
        } else {
            return false
        }
    };
    
    const getFilterOptions = (filterName) => {
        const all_filterName = new Set(characters.map(character => character[filterName]));
        const all_filterName_array = [...all_filterName];
        const new_filterName_option = all_filterName_array.map(filter => ({value: filter, label: filter}));
        return new_filterName_option;
    }

    const handleSearch = (query) => {
        const search_detail = characters.filter(
            (character) =>
                character.name.toLowerCase().includes(query.toLowerCase())
        );
    
        setFilteredCharacters(search_detail);
    };

    const handleFilter = (value, filter) => {
        if(filteredCharacters.length === 0) {
            const filter_detail = characters.filter(
                (character) =>
                    character[filter].includes(value)
            );
            setFilteredCharacters(filter_detail);
        } else {
            const filter_detail = filteredCharacters.filter(
                (character) => 
                    character[filter].includes(value)
            )
            setFilteredCharacters(filter_detail);
        }
    };

    return (
            <CharactersContainer>
                <SidebarSection>
                    <Sidebar />
                </SidebarSection>
                <Body>
                    <TopSection>
                        <SearchContainer>
                            <Searchbar placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
                        </SearchContainer>
                        <DropdownContainer>
                            <Dropdown placeholder="Status" onChange={(e) => handleFilter(e.value, 'status')} options={getFilterOptions('status')}/>
                        </DropdownContainer>
                        <DropdownContainer>
                            <Dropdown placeholder="Species" onChange={(e) => handleFilter(e.value, 'species')} options={getFilterOptions('species')}/>
                        </DropdownContainer>
                        <DropdownContainer>
                            <Dropdown placeholder="Gender" onChange={(e) => handleFilter(e.value, 'gender')} options={getFilterOptions('gender')}/>
                        </DropdownContainer>
                    </TopSection>
                    <BottomSection>
                        <InfiniteScroll
                            dataLength={count}
                            next={ () => Store.dispatch(fetchCharacters(nextUrl)) }
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                        >
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
                                                onClickCard={() => history.push(`/character/${character.id}`)}
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
                                                onClickCard={() => history.push(`/character/${character.id}`)}
                                                isFavourite={checkIfFavourite(character.id)}
                                            />
                                        )
                                    }
                                )
                            }
                        </InfiniteScroll>
                    </BottomSection>
                </Body>
            </CharactersContainer>
    )
};

export default Characters;
