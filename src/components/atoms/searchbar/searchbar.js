import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBarContainer, SearchIcon } from "./searchbar.style";

const Searchbar = ({ placeholder }) => {
  let navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  function handleChange(search) {
    setKeyword(search);
  }

  return (
    <SearchBarContainer>
      <SearchIcon onClick={() => navigate(`/search/${keyword}`)} />
      <input
        className="input"
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
    </SearchBarContainer>
  );
};

export default Searchbar;
