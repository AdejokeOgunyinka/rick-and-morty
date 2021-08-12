export const handleSearch = (query) => {
    const search_detail = characters.filter(
        (character) =>
            character.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCharacters(search_detail);
};
