import { FavouritesContainer, SidebarSection, Body, TopSection, SearchContainer, DropdownContainer, BottomSection } from './favourites.style';
import Sidebar from '../../organisms/sidebar/sidebar';
import Searchbar from '../../atoms/searchbar/searchbar';
import Dropdown from '../../atoms/dropdown/dropdown';
import RowCard from '../../molecules/rowCard/rowCard';


const Favourites = () => {

    const genderOptions = [
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' },
      { value: 'unknown', label: 'Unknown' }
    ];

    return (
        <FavouritesContainer>
            <SidebarSection>
                <Sidebar />
            </SidebarSection>
            <Body>
                <TopSection>
                    <SearchContainer>
                        <Searchbar placeholder="Search..." />
                    </SearchContainer>
                    <DropdownContainer>
                        <Dropdown placeholder="Status"/>
                    </DropdownContainer>
                    <DropdownContainer>
                        <Dropdown placeholder="Species"/>
                    </DropdownContainer>
                    <DropdownContainer>
                        <Dropdown placeholder="Gender" options={genderOptions}/>
                    </DropdownContainer>
                </TopSection>
                <BottomSection>
                    <RowCard />
                    <RowCard />
                    <RowCard />
                    <RowCard />
                    <RowCard />
                    <RowCard />
                    <RowCard />
                </BottomSection>
            </Body>
        </FavouritesContainer>
    )
};

export default Favourites;
