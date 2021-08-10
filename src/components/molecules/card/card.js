import { CardContainer, ImageContainer, ImageSection, InfoSection, RowContainer } from './card.style';
import { FaSourcetree, FaMapMarkerAlt, FaMarsStroke } from 'react-icons/fa';

const Card = () => {
    return (
        <CardContainer>
            <ImageSection>
                <ImageContainer>
                    <img className="character-picture" src="https://rickandmortyapi.com/api/character/avatar/8.jpeg" alt="character"/>
                </ImageContainer>
            </ImageSection>
            <InfoSection>
                <h1 className="name">Rick Sanchez</h1>
                <RowContainer className="remove-margin">
                    <p className="status">Alive</p>
                </RowContainer>
                <RowContainer className="remove-margin">
                    <p>Human</p>
                </RowContainer>
                <RowContainer className="remove-margin">
                    <p>Superhuman (Ghost trains summoner)</p>
                </RowContainer>
                <RowContainer className="remove-margin">
                    <FaMarsStroke className="icon"/>
                    <p>Male</p>
                </RowContainer>
                <RowContainer className="remove-margin">
                    <FaSourcetree className="icon"/>
                    <p>Earth (C-137)</p>
                </RowContainer>
                <RowContainer className="remove-margin">
                    <FaMapMarkerAlt className="icon"/>
                    <p>Earth (Replacement Dimension)</p>
                </RowContainer>
            </InfoSection>
        </CardContainer>
    )
}

export default Card;
