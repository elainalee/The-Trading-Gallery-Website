import React, {Component} from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../../buttons/Button"
import { IconButton } from "../../buttons/IconButton/IconButton"
import logo_image from '../../callisto_logo_woLetters.png';
import './NavBar.css'

class NavBar extends Component {
    state = { 
        clicked: false,
        loggedIn: false }

    handledClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavBarItems">
                <h1 className="navBar-logo-name">Callisto</h1>
                <img src={logo_image} className="navBar-logo-image" alt="logo"/>

                <div className="menu-icon" onClick={this.handledClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className = {item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <ul className = {this.state.loggedIn ? 'user-profile' : 'sign-up'}>
                    {this.state.loggedIn
                        ? <IconButton buttonIcon='user-profile-btn' buttonSize='icon-btn--medium'></IconButton>
                        : <Button buttonStyle={'btn--outline'}>Sign Up</Button>
                    }
                </ul>
                    
            </nav>
            
        )
    }

}

export default NavBar