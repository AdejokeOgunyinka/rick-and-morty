import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Store from '../../../store';
import { CharacterContainer, SidebarSection, Body} from './character.style';
import Sidebar from '../../organisms/sidebar/sidebar';
import Card from '../../molecules/card/card';
import { fetchCharacter } from '../../../actions/character';
import { FaArrowAltCircleLeft } from 'react-icons/fa'

const Character = ({match}) => {
    const { characterReducer:{ character } } = useSelector( state => state );

    const { id } = match.params;
    let history = useHistory();

    useEffect(() => {
        Store.dispatch(fetchCharacter(`https://rickandmortyapi.com/api/character/${id}`));

    }, []);
 
    return (
        //imageUrl, name, status, species, type, gender, origin, location
        <CharacterContainer>
            <SidebarSection>
                <Sidebar />
            </SidebarSection>
            <Body>
                <FaArrowAltCircleLeft onClick={() => history.goBack()} className="back-arrow"/>
                <Card 
                    imageUrl={character.image} 
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    type={character.type}
                    gender={character.gender}
                    origin={character.origin.name}
                    location={character.location.name}
                />
            </Body>
        </CharacterContainer>
    )
};

export default Character;
