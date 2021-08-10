import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import GetSwitchy from "../../../fonts/get_schwifty.ttf";

export const RowCardContainer = styled.div`
    width: 800px;
    height: 105px;
    background-color: #FFFFFF;
    border-radius: 7px;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
    margin: 10px;
    justify-content: space-around;
    font-family: 'Georama',sans-serif;
    
    @font-face {
        font-family: 'GetSchwifty';
        font-style: normal;
        font-weight: 60;
        src: local('GetSchwifty'), url(${GetSwitchy}) format('truetype');
    }

    .name {
        font-family: 'GetSchwifty';
        font-size: 27px;
    }

    .status {
        font-style: italic;
        color: #F7C49D;
        font-size: 20px;
    }
`;

export const ImageContainer = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 3px solid #87501F;
    display: flex;
    justify-content: center;
    align-items: center;

    .character-image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;

export const FavouriteIcon = styled(FaHeart)`
    color: white;
    font-size: 27px;
`;
