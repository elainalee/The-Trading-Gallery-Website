import React from 'react';
import UserButton from '../../Buttons/UserButton';
import { IconButton } from '../../Buttons/IconButton';
import logoName from '../../../assets/TTG-logo-w-text.png';

import { CartsPageRoute, MainPageRoute, SellerPanelPageRoute, ShopPageRoute } from '../../../utils/routes';
import SearchBar from '../../Utils/SearchBar';

import './NavBarTop.css';

export default function NavBarTop({
    status, menuClicked, handleMenuClick, handleCartsClick, handleListingsClick, handleLogoClick
}) {

    return (
        <nav className="NavBar-Top">
            <div className="navBar-logo">
                <img src={logoName} className="navBar-logo-symbol" alt="logo-name" onClick={handleLogoClick} />
            </div>

            <div className="nav-top-menu-items">
                <div className="hide-mobile">
                    {(status === "seller")
                        ? <div />
                        : <SearchBar />}
                    

                    {(status === "user" || status === null)
                        ? <IconButton buttonIcon={menuClicked ? 'hidden' : 'carts-btn'} buttonSize="navbar" color="black" onClick={handleCartsClick} />
                        : (status === "seller")
                            ? <IconButton buttonIcon={menuClicked ? 'hidden' : 'listings-btn'} buttonSize="navbar" color="black" onClick={handleListingsClick} /> 
                            : <div></div>}

                    <UserButton />
                </div>
                
                <div className="menu-icon">
                    <IconButton buttonIcon={menuClicked ? 'cancel-btn' : 'menu-btn'} buttonSize="navbar" color="black" onClick={handleMenuClick} />
                </div>
            </div>
        </nav>
    );
}