import { NavLink } from 'react-router-dom';
import { SidebarContainer, MenuTabContainer, MenuTabContainerInner } from './sidebar.style';
import { FaUserAlt, FaHeart } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <h1 className="title">Rick and Morty</h1>
            <MenuTabContainer>
                <MenuTabContainerInner className="menu-tab-hover">
                    <NavLink className="link" to="/characters" activeClassName="active">
                        <FaUserAlt className="icon"/>
                        <p className="text">Characters</p>
                    </NavLink>
                </MenuTabContainerInner>
            </MenuTabContainer>

            <MenuTabContainer>
                <MenuTabContainerInner className="menu-tab-hover">
                    <NavLink className="link" to="/favourites" activeClassName="active">
                        <FaHeart className="icon"/>
                        <p className="text">Favourites</p>
                    </NavLink>
                </MenuTabContainerInner>
            </MenuTabContainer>

        </SidebarContainer>
    )
}

export default Sidebar;
