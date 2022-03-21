import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { MenuItems, ShopCategoryItems } from './MenuItems';
import UserButton from '../Buttons/UserButton';
import CustomButton from '../Buttons/CustomButton';
import { IconButton } from '../Buttons/IconButton';
import logoName from '../../assets/TTG-logo-w-text.png';

import { CartsPageRoute, MainPageRoute, SellerPanelPageRoute, ShopPageRoute } from '../../utils/routes';
import { useSelector } from 'react-redux';
import Marquee from '../Utils/Marquee';
import CartPopUp from '../Utils/CartPopUp';
import { Modal } from 'react-bootstrap';

import './NavBarBottom.css';
import './NavBarTop.css';
import './NavBarModal.css';
import './NavBarExpanded.css';
import SearchBar from '../Utils/SearchBar';


function NavBar() {

    const state = useSelector((state) => state);

    const currentSeller = state.seller.seller;
    
    const [menuClicked, setMenuClicked] = useState(false);

    const [isMobile, setIsMobile] = useState(window?.innerWidth <= 767);

    // For Desktop version
    const [isMouseOnShop, setIsMouseOnShop] = useState(false);
    const [isMouseOnNavExpand, setIsMouseOnNavExpand] = useState(false);
    // For Mobile version
    const [showShopCategory, setShowShopCategory] = useState(false);

    const handleResize = () => {
        setIsMobile(window?.innerWidth <= 767);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    const handleMenuClick = () => {
        setMenuClicked(!menuClicked);
    }

    const handleLogoClick = () => {
        window.location.href = MainPageRoute;
    }

    const handleCartsClick = () => {
        window.location.href = CartsPageRoute;
    }

    const handleListingsClick = () => {
        window.location.href = SellerPanelPageRoute;
    }

    const handleShowShop = (tabName) => {
        setIsMouseOnShop(tabName === "Shop");
    }

    function handleSectionClick(url) {
        window.location.href = url;
        window.scrollTo(0, 0);
        setMenuClicked(false);
    }

    return (
        <div className="navBar">
            <Modal className="NavBar-Modal" animation={true} fullscreen={true} show={isMobile && menuClicked} onHide={() => setMenuClicked(false)}>
                <Modal.Header className="buttons-top">
                    <SearchBar showOnClick handleMenuClick={handleMenuClick} />
                </Modal.Header>

                <Modal.Body className="body">
                    <ul className="nav-menu-items">
                        {MenuItems.map((item, index) => (
                            <div key={item.title}>
                                <div className="section-title" onClick={() => (index === 0) ? setShowShopCategory(!showShopCategory) : handleSectionClick(item.url)}>
                                    <Link className="nav-menu-item links" to="#" >{item.title}</Link>
                                    {(index === 0) && <i className={"fas " + (showShopCategory ? "fa-angle-up" : "")}></i>}
                                </div>
                                
                                {(index === 0) && showShopCategory && (
                                    <div className="section-body">
                                        <Link 
                                            className={`nav-menu-sub-item ${index == 0 && "title"} links`} 
                                            to="#"
                                            onClick={() => handleSectionClick(ShopPageRoute)}
                                            >
                                            {"SHOP ALL"}
                                        </Link>
                                    
                                        {ShopCategoryItems.map((categoryItems, index) => (
                                            <div className="section-body" key={index}>
                                                {categoryItems.map((item, index) => (
                                                    <li key={index}>
                                                        <Link 
                                                            className={`nav-menu-sub-item ${index == 0 && "title"} links`} 
                                                            to="#"
                                                            onClick={() => handleSectionClick(ShopPageRoute + item.url)}
                                                            >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer className="buttons-bottom">
                    <UserButton /> 
                    {currentSeller
                        ? <IconButton buttonIcon="listings-btn" buttonSize="navbar" color="black" onClick={handleListingsClick} />
                        : <IconButton buttonIcon="carts-btn" buttonSize="navbar" color="black" onClick={handleCartsClick} />}
                </Modal.Footer>
            </Modal>

            <div className="hide-mobile">
                <Marquee/>
            </div>
            
            <nav className="NavBar-Top">
                <div className="navBar-logo">
                    <img src={logoName} className="navBar-logo-symbol" alt="logo-name" onClick={handleLogoClick} />
                </div>

                <div className="nav-top-menu-items">
                    <div className="hide-mobile">
                        <SearchBar />

                        {currentSeller
                            ? <IconButton buttonIcon={menuClicked ? 'hidden' : 'listings-btn'} buttonSize="navbar" color="black" onClick={handleListingsClick} />
                            : <IconButton buttonIcon={menuClicked ? 'hidden' : 'carts-btn'} buttonSize="navbar" color="black" onClick={handleCartsClick} />}

                        <UserButton />
                    </div>
                    
                    <div className="menu-icon">
                        <IconButton buttonIcon={menuClicked ? 'cancel-btn' : 'menu-btn'} buttonSize="navbar" color="black" onClick={handleMenuClick} />
                    </div>
                </div>
            </nav>

            <nav className="NavBar-Bottom">
                <ul className="nav-bottom-menu-items">
                    {MenuItems.map((item, index) => (
                        <li 
                            key={index}
                            onMouseEnter={() => handleShowShop(item.title)}
                            onMouseLeave={() => setIsMouseOnShop(false)}>
                            <Link 
                                className={item.cName + " link"} 
                                to="#"
                                onClick={() => handleSectionClick(item.url)}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {(isMouseOnShop || isMouseOnNavExpand) && (
                <nav
                    className="NavBar-Expanded specialFont" 
                    onMouseEnter={() => setIsMouseOnNavExpand(true)}
                    onMouseLeave={() => setIsMouseOnNavExpand(false)}>
                        {ShopCategoryItems.map((categoryItems, index) => (
                            <ul key={index} className="nav-expanded-menu-items">
                                {categoryItems.map((item, index) => (
                                    <li 
                                        key={index}
                                        onMouseEnter={() => handleShowShop(item.title)}
                                        onMouseLeave={() => setIsMouseOnShop(false)}>
                                        <Link 
                                            className={`${item.cName} ${index == 0 && "title"} link`} 
                                            // to={ShopPageRoute + item.url}
                                            to="#"
                                            onClick={() => handleSectionClick(ShopPageRoute + item.url)}
                                            >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                </nav>
            )}

            <div className="hide-full">
                <Marquee/>
            </div>
        </div>
    );
}

export default withRouter(NavBar);
