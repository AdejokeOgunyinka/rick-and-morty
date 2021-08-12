import { RowCardContainer, ImageContainer, FavouriteIcon } from './rowCard.style';

const RowCard = ({imageUrl, name, status, species, gender, onClick, onClickCard, isFavourite }) => {

    return (
        <RowCardContainer>
            <ImageContainer onClick={onClickCard}>
                <img className="character-image" alt="character" src={imageUrl}/>
            </ImageContainer>
            <h3 className="name" onClick={onClickCard}>{name}</h3>
            <p className="status" onClick={onClickCard}>{status}</p>
            <p className="pointer" onClick={onClickCard}>{species}</p>
            <p className="pointer" onClick={onClickCard}>{gender}</p>
            <FavouriteIcon className={isFavourite ? "red-icon-color": "white-icon-color"} onClick={onClick}/>
        </RowCardContainer>
    )
}

export default RowCard;
