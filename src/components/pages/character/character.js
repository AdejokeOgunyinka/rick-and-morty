import { CharacterContainer, SidebarSection, Body} from './character.style';
import Sidebar from '../../organisms/sidebar/sidebar';
import Card from '../../molecules/card/card';

const Character = () => {
    return (
        <CharacterContainer>
            <SidebarSection>
                <Sidebar />
            </SidebarSection>
            <Body>
                <Card />
            </Body>
        </CharacterContainer>
    )
};

export default Character;
