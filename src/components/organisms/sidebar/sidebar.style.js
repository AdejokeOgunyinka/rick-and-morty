import styled from 'styled-components';
import GetSwitchy from "../../../fonts/get_schwifty.ttf";

export const SidebarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #FFFFFF;
    flex-direction: column;
    align-items: center;
    font-family: 'Georama',sans-serif;
    
    @font-face {
        font-family: 'GetSchwifty';
        font-style: normal;
        font-weight: 60;
        src: local('GetSchwifty'), url(${GetSwitchy}) format('truetype');
    }

    .title{
        font-family: 'GetSchwifty';
        font-size: 40px;
        color: #2F4368;
        text-shadow: 2px 2px 0px #FAF76B;
    }
`;

export const MenuTabContainer = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    :hover {
        border-right: 4px solid #F7C49D;

        .menu-tab-hover {
            color: #F7C49D;
        }

        .icon { 
            color: #F7C49D;
        }
    }

`;

export const MenuTabContainerInner = styled.div`
    width: 30%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
        margin-right: 10px;
        color: #2F4368;
    }
`;
