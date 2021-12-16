import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import UserButton from '../Buttons/UserButton';
import { IconButton } from '../Buttons/IconButton';
import logoName from '../../callisto_font_black.png';
import './NavBarBottom.css';
import './NavBarTop.css';

function NavBar() {
    const [menuClicked, setMenuClicked] = useState(false);

    const handleMenuClick = () => {
        setMenuClicked(!menuClicked);
    }

    const handleLogoClick = () => {
        window.location.href = '/';
    }

    const handleCartsClick = () => {
        this.props.history.push('/carts');
    }

    return (
        <>
            <nav className="NavBar-Top">
                <div className="navBar-logo" onClick={handleLogoClick}>
                    <img src={logoName} className="navBar-logo-name" alt="logo-name" />
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
        </>
    );
}

export default withRouter(NavBar);
