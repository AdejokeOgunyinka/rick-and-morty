import { SearchBarContainer, SearchIcon } from './searchbar.style';
import React from 'react';

const Searchbar = ({ placeholder }) => {
    return (
        <SearchBarContainer>
            <SearchIcon />
            <input className="input" placeholder={placeholder}/>
        </SearchBarContainer>
    )
};

export default Searchbar;
