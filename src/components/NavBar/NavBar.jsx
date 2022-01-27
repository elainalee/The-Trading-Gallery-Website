import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import UserButton from '../Buttons/UserButton';
import CustomButton from '../Buttons/CustomButton';
import { IconButton } from '../Buttons/IconButton';
import logoName from '../../assets/TTG-logo-w-text.png';
import './NavBarBottom.css';
import './NavBarTop.css';

import { CartsPageRoute, ListingsPageRoute, MainPageRoute } from '../../utils/routes';
import { useSelector } from 'react-redux';


function NavBar() {

    const state = useSelector((state) => state);
    const history = useHistory();

    const currentSeller = state.seller.seller;
    
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

    const handleListingsClick = () => {
        history.push(ListingsPageRoute);
    }

    function moveToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <nav className="NavBar-Top">
                <div className="navBar-logo" onClick={handleLogoClick}>
                    <img src={logoName} className="navBar-logo-symbol" alt="logo-name" />
                </div>

                <div className="nav-top-menu-items">
                    <IconButton buttonIcon={menuClicked ? 'hidden' : 'search-btn'} buttonSize="navbar" color="black" />
                    {currentSeller
                        ? <IconButton buttonIcon={menuClicked ? 'hidden' : 'listings-btn'} buttonSize="navbar" color="black" onClick={handleListingsClick} />
                        : <IconButton buttonIcon={menuClicked ? 'hidden' : 'carts-btn'} buttonSize="navbar" color="black" onClick={handleCartsClick} />}
                    <UserButton />
                    <div className="menu-icon">
                        <IconButton buttonIcon={menuClicked ? 'cancel-btn' : 'menu-btn'} buttonSize="navbar" color="black" onClick={handleMenuClick} />
                    </div>
                </div>
            </nav>

            <nav className="NavBar-Bottom">
                <ul className={menuClicked ? 'nav-bottom-menu-items expanded' : 'nav-bottom-menu-items'}>
                    {MenuItems.map((item) => (
                            <li key={item.title}>
                                <Link className={item.cName + " link"} to={item.url} onClick={moveToTop}>{item.title}</Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(NavBar);
