import styled from 'styled-components';

export const CharacterContainer = styled.div`
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
    display: flex;
    justify-content: center;
    align-items: center;
`;
