/* eslint-disable react/jsx-wrap-multilines */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItemsBottom } from './MenuItemsBottom';
import { Button } from '../../buttons/Button';
import { IconButton } from '../../buttons/IconButton/IconButton';
import logoName from '../../callisto_font_black.png';
import logoImage from '../../callisto_logo_woLetters.png';
import './NavBarBottom.css';
import './NavBarTop.css';

class NavBar extends Component {
    state = {
        menuClicked: false,
        loggedIn: false,
    };

    handleMenuClick = () => {
        this.setState((prevState) => ({ menuClicked: !prevState.menuClicked }));
    }

    handleLogoClick = () => {
        window.location.href = '/';
    }

    render() {
        return (
            <>
            <nav className="NavBar-Top">
                <div className="navBar-logo" onClick={this.handleLogoClick}>
                    <img src={logoName} className="navBar-logo-name" alt="logo-name" />
                    <img src={logoImage} className="navBar-logo-image" alt="logo-img" />
                </div>

                <div className="nav-top-menu-items">
                    <IconButton buttonIcon={this.state.menuClicked ? 'hidden' : 'search-btn'} buttonSize="icon-btn--navbar" color="black" />
                    <IconButton buttonIcon={this.state.menuClicked ? 'hidden' : 'carts-btn'} buttonSize="icon-btn--navbar" color="black" />
                    <div className="user-icon">
                        {this.state.loggedIn
                                ? <IconButton buttonIcon="user-profile-btn" buttonSize="icon-btn--navbar" />
                                : <Button className="nav-top-menu-item-name" buttonStyle="btn--outline" buttonSize="btn--navbar" marginLeft="1rem" color="black">Sign In</Button>}
                    </div>
                    <div className="menu-icon">
                        <IconButton buttonIcon={this.state.menuClicked ? 'cancel-btn' : 'menu-btn'} buttonSize="icon-btn--navbar" color="black" onClick={this.handleMenuClick} />
                    </div>
                </div>
            </nav>

            <nav className="NavBar-Bottom">
                <ul className={this.state.menuClicked ? 'nav-bottom-menu-items expanded' : 'nav-bottom-menu-items'}>
                    {MenuItemsBottom.map((item) => (
                            <li key={item.id}>
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
}

export default withRouter(NavBar);
