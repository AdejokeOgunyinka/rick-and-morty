import styled from 'styled-components';
import { FaSistrix } from 'react-icons/fa';

export const SearchBarContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #2F4368;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-radius: 30px;

    .input {
        flex-basis: 80%;
        margin-left: 10px;
        background-color: transparent;
        height: 30px;
        border: none;
        outline: none;
        color: #EAEAEA;
        font-size: 17px;

        ::placeholder {
            color: #EAEAEA;
            font-size: 17px;
        }
    }
`;

export const SearchIcon = styled(FaSistrix)`
    color: #EAEAEA;
    font-size: 30px;
    margin-left: 15px;
    cursor: pointer;
`;
