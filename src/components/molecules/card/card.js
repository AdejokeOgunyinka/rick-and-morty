import { CardContainer, ImageContainer, ImageSection, InfoSection, RowContainer } from './card.style';
import { FaSourcetree, FaMapMarkerAlt, FaMarsStroke } from 'react-icons/fa';

const Card = ({imageUrl, name, status, species, type, gender, origin, location}) => {

    return (
        <CardContainer>
            <ImageSection>
                <ImageContainer>
                    <img className="character-picture" src={imageUrl} alt="character"/>
                </ImageContainer>
            </ImageSection>
            <InfoSection>
                <h1 className="name">{name}</h1>
                <RowContainer className="remove-margin">
                    <p className="status">Status: {status}</p>
                </RowContainer>
                <RowContainer className="remove-margin">
                    <p>Species: {species}</p>
                </RowContainer>
                <RowContainer className="remove-margin">
                    <p>Type: {type}</p>
                </RowContainer>
                <RowContainer className="remove-margin">
                    <FaMarsStroke className="icon"/>
                    <p>{gender}</p>
                </RowContainer>
                <RowContainer className="remove-margin">
                    <FaSourcetree className="icon"/>
                    <p>Origin: {origin}</p>
                </RowContainer>
                <RowContainer className="remove-margin">
                    <FaMapMarkerAlt className="icon"/>
                    <p>Location: {location}</p>
                </RowContainer>
            </InfoSection>
        </CardContainer>
    )
}

export default Card;
