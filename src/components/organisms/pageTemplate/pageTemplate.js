import { PageTemplateContainer, SidebarSection, Body, TopSection, SearchContainer, DropdownContainer, BottomSection } from "./pageTemplate.style";
import Sidebar from "../../organisms/sidebar/sidebar";
import Searchbar from "../../atoms/searchbar/searchbar";
import Dropdown from "../../atoms/dropdown/dropdown";


const PageTemplate = ({children, data, filteredData, setFilteredData}) => {
    const getFilterOptions = (filterName) => {
        const all_filterName = new Set(data.map(character => character[filterName]));
        const all_filterName_array = [...all_filterName];
        const new_filterName_option = all_filterName_array.map(filter => ({value: filter, label: filter}));
        return new_filterName_option;
    }

    const handleFilter = (value, filter) => {
        if(filteredData.length === 0) {
            const filter_detail = data.filter(
                (character) =>
                    character[filter].includes(value)
            );
            setFilteredData(filter_detail);
        } else {
            const filter_detail = filteredData.filter(
                (character) => 
                    character[filter].includes(value)
            )
            setFilteredData(filter_detail);
        }
    };

    return (
        <PageTemplateContainer>
            <SidebarSection>
                <Sidebar />
            </SidebarSection>
            <Body>
                <TopSection>
                    <SearchContainer>
                        <Searchbar placeholder="Search..."/>
                    </SearchContainer>
                    <DropdownContainer>
                        <Dropdown placeholder="Status" onChange={(e) => handleFilter(e.value, "status")} options={getFilterOptions("status")}/>
                    </DropdownContainer>
                    <DropdownContainer>
                        <Dropdown placeholder="Species" onChange={(e) => handleFilter(e.value, "species")} options={getFilterOptions("species")}/>
                    </DropdownContainer>
                    <DropdownContainer>
                        <Dropdown placeholder="Gender" onChange={(e) => handleFilter(e.value, "gender")} options={getFilterOptions("gender")}/>
                    </DropdownContainer>
                </TopSection>
                <BottomSection>
                    {children}
                </BottomSection>
            </Body>
        </PageTemplateContainer>
    )
};

export default PageTemplate;
