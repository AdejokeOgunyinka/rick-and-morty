import styled from 'styled-components';

export const CharactersContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
`;

export const SidebarSection = styled.div`
    width: 25%;
    height: 100%;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
    position: fixed;
    box-sizing: border-box;
`;

export const Body = styled.div`
    margin-left:25%;
    flex-basis: 75%;
    height: 100vh;
    box-sizing: border-box;
`;

export const TopSection = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    position: sticky;
    top: 0;
`;

export const SearchContainer = styled.div`
    width: 320px;
    height: 50px;
`;

export const DropdownContainer = styled.div`
    width: 200px;
    height: 50px;
`;

export const BottomSection = styled.div`
    width: 100%;
    /* height: 1500px; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* box-sizing: border-box; */
`;