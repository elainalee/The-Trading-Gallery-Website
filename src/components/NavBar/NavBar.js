import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { Button } from '../../buttons/Button';
import { IconButton } from '../../buttons/IconButton/IconButton';
import logoName from '../../callisto_font_white.png';
import logoImage from '../../callisto_logo_woLetters.png';
import './NavBar.css';

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
            <nav className="NavBarItems">
                <div className="navBar-logo" onClick={this.handleLogoClick}>
                    <img src={logoName} className="navBar-logo-name" alt="logo-name" />
                    <img src={logoImage} className="navBar-logo-image" alt="logo-img" />
                </div>
                <div className="menu-icon" onClick={this.handleMenuClick}>
                    <i className={this.state.menuClicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={this.state.menuClicked ? 'nav-mobile-menu active' : 'nav-mobile-menu'}>
                    {MenuItems.map((item) => (
                            <li key={item.id}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        ))}
                </ul>

                <ul className={this.state.loggedIn ? 'user-profile' : 'sign-up'}>
                    {this.state.loggedIn
                        ? <IconButton buttonIcon="user-profile-btn" buttonSize="icon-btn--medium" />
                        : <Button buttonStyle="btn--outline">Sign Up</Button>}
                </ul>
            </nav>
        );
    }
}

export default withRouter(NavBar);
