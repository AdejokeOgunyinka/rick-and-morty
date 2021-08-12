import { useSelector } from "react-redux";
import { useState } from "react";
import Store from '../../../store';
import { FavouritesContainer, SidebarSection, Body, TopSection, SearchContainer, DropdownContainer, BottomSection } from './favourites.style';
import Sidebar from '../../organisms/sidebar/sidebar';
import Searchbar from '../../atoms/searchbar/searchbar';
import Dropdown from '../../atoms/dropdown/dropdown';
import RowCard from '../../molecules/rowCard/rowCard';
import { removeFromFavourites } from '../../../actions/favourites';


const Favourites = () => {

    const { favouritesReducer: {favourites} } = useSelector( state => state );

    const [filteredFavourites,setFilteredFavourites] = useState([]);

    const getFilterOptions = (filterName) => {
        const all_filterName = new Set(favourites.map(favourite => favourite[filterName]));
        const all_filterName_array = [...all_filterName];
        const new_filterName_option = all_filterName_array.map(filter => ({value: filter, label: filter}));
        return new_filterName_option;
    }

    const handleSearch = (query) => {
        const search_detail = favourites.filter(
            (favourite) =>
                favourite.name.toLowerCase().includes(query.toLowerCase())
        );
    
        setFilteredFavourites(search_detail);
    };

    const handleFilter = (value, filter) => {
        if(filteredFavourites.length === 0) {
            const filter_detail = favourites.filter(
                (favourite) =>
                    favourite[filter].includes(value)
            );
            setFilteredFavourites(filter_detail);
        } else {
            const filter_detail = filteredFavourites.filter(
                (favourite) => 
                    favourite[filter].includes(value)
            )
            setFilteredFavourites(filter_detail);
        }
    };

    return (
        <FavouritesContainer>
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
                    { filteredFavourites.length === 0 ? favourites.length > 0 && 
                        favourites.map(
                            favourite => {
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
                                )
                            }
                        ) : 
                        filteredFavourites.length > 0 && 
                        filteredFavourites.map(
                            favourite => {
                                return (
                                    <RowCard 
                                        imageUrl={favourite.image} 
                                        name={favourite.name} 
                                        status={favourite.status}
                                        species={favourite.species}
                                        gender={favourite.gender}
                                        key={favourite.id}
                                        onClick={() => Store.dispatch(removeFromFavourites(favourite))}
                                        isFavourite = {true}
                                    />
                                )
                            }
                        )
                    }
                </BottomSection>
            </Body>
        </FavouritesContainer>
    )
};

export default Favourites;
