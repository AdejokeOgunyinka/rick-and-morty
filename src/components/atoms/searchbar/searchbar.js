import { SearchBarContainer, SearchIcon } from './searchbar.style';
import React from 'react';

const Searchbar = ({ placeholder, onChange }) => {
    return (
        <SearchBarContainer>
            <SearchIcon />
            <input className="input" onChange={onChange} placeholder={placeholder}/>
        </SearchBarContainer>
    )
};

export default Searchbar;
