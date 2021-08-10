import { SidebarContainer, MenuTabContainer, MenuTabContainerInner } from './sidebar.style';
import { FaUserAlt, FaHeart } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <h1 className="title">Rick and Morty</h1>
            <MenuTabContainer>
                <MenuTabContainerInner className="menu-tab-hover">
                    <FaUserAlt className="icon"/>
                    <p>Characters</p>
                </MenuTabContainerInner>
            </MenuTabContainer>

            <MenuTabContainer>
                <MenuTabContainerInner className="menu-tab-hover">
                    <FaHeart className="icon"/>
                    <p>Favourites</p>
                </MenuTabContainerInner>
            </MenuTabContainer>

        </SidebarContainer>
    )
}

export default Sidebar;
