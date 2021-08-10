import { RowCardContainer, ImageContainer, FavouriteIcon } from './rowCard.style';
import React from 'react'

const RowCard = () => {
    return (
        <RowCardContainer>
            <ImageContainer>
                <img className="character-image" alt="character" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
            </ImageContainer>
            <h3 className="name">Rick Sanchez</h3>
            <p className="status">Alive</p>
            <p>Human</p>
            <p>Male</p>
            <FavouriteIcon />
        </RowCardContainer>
    )
}

export default RowCard;
