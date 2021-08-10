import styled from 'styled-components';
import GetSwitchy from "../../../fonts/get_schwifty.ttf";


export const CardContainer = styled.div`
    width: 850px;
    height: 380px;
    display: flex;
    flex-direction: row;
    margin: 50px;

    font-family: 'Georama',sans-serif;
    
    @font-face {
        font-family: 'GetSchwifty';
        font-style: normal;
        font-weight: 60;
        src: local('GetSchwifty'), url(${GetSwitchy}) format('truetype');
    }

    .icon {
        margin-right: 10px;
        color: #F7C49D;
        font-size: 25px;
    }
`;

export const ImageSection = styled.div`
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2F4368;
`;

export const ImageContainer = styled.div`
    width: 60%;
    height: 70%;
    border-radius: 50%;
    border: 5px solid #F7C49D;
    box-sizing: border-box;

    .character-picture {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

export const InfoSection = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
    /* border: 2px solid #2F4368; */

    .name {
        font-family: 'GetSchwifty', sans-serif;
        font-size: 40px;
        margin: 0;
        margin-top: 10px;
        color: #2F4368;
    }

    .status {
        font-style: italic;
        margin: 0;
        color: #F7C49D;
    }

    .remove-margin {
        margin: 0;
    }
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
