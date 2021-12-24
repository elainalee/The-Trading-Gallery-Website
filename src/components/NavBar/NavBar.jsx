import React, { Component, useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import UserButton from '../Buttons/UserButton';
import { IconButton } from '../Buttons/IconButton';
import logoName from '../../ulma_black.png';
import './NavBarBottom.css';
import './NavBarTop.css';

import { CartsPageRoute, MainPageRoute } from '../../utils/routes';


function NavBar() {
    const history = useHistory();
    
    const [menuClicked, setMenuClicked] = useState(false);

    const handleMenuClick = () => {
        setMenuClicked(!menuClicked);
    }

    const handleLogoClick = () => {
        window.location.href = MainPageRoute;
    }

    const handleCartsClick = () => {
        history.push(CartsPageRoute);
    }

    return (
        <div>
            <nav className="NavBar-Top">
                <div className="navBar-logo" onClick={handleLogoClick}>
                    <img src={logoName} className="navBar-logo-symbol" alt="logo-name" />
                </div>

                <div className="nav-top-menu-items">
                    <IconButton buttonIcon={menuClicked ? 'hidden' : 'search-btn'} buttonSize="icon-btn--navbar" color="black" />
                    <IconButton buttonIcon={menuClicked ? 'hidden' : 'carts-btn'} buttonSize="icon-btn--navbar" color="black" onClick={handleCartsClick} />
                    <UserButton />
                    <div className="menu-icon">
                        <IconButton buttonIcon={menuClicked ? 'cancel-btn' : 'menu-btn'} buttonSize="icon-btn--navbar" color="black" onClick={handleMenuClick} />
                    </div>
                </div>
            </nav>

            <nav className="NavBar-Bottom">
                <ul className={menuClicked ? 'nav-bottom-menu-items expanded' : 'nav-bottom-menu-items'}>
                    {MenuItems.map((item) => (
                            <li key={item.title}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(NavBar);
