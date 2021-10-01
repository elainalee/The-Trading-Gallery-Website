import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import UserButton from '../../buttons/UserButton';
import { IconButton } from '../../buttons/IconButton/IconButton';
import logoName from '../../callisto_font_black.png';
import logoImage from '../../callisto_logo_woLetters.png';
import './NavBarBottom.css';
import './NavBarTop.css';

class NavBar extends Component {
    render() {
        const state = {
            menuClicked: false,
        };
    
        const handleMenuClick = () => {
            this.setState((prevState) => ({ menuClicked: !prevState.menuClicked }));
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
                    {/* <img src={logoImage} className="navBar-logo-image" alt="logo-img" /> */}
                </div>

                <div className="nav-top-menu-items">
                    <IconButton buttonIcon={state.menuClicked ? 'hidden' : 'search-btn'} buttonSize="icon-btn--navbar" color="black" />
                    <IconButton buttonIcon={state.menuClicked ? 'hidden' : 'carts-btn'} buttonSize="icon-btn--navbar" color="black" onClick={handleCartsClick} />
                    <UserButton />
                    <div className="menu-icon">
                        <IconButton buttonIcon={state.menuClicked ? 'cancel-btn' : 'menu-btn'} buttonSize="icon-btn--navbar" color="black" onClick={handleMenuClick} />
                    </div>
                </div>
            </nav>

            <nav className="NavBar-Bottom">
                <ul className={state.menuClicked ? 'nav-bottom-menu-items expanded' : 'nav-bottom-menu-items'}>
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
}

export default withRouter(NavBar);
