import React, { useEffect, useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { AdminMenuItems, MenuItems, SellerMenuItems, ShopCategoryItems } from './MenuItems';
import UserButton from '../Buttons/UserButton';
import { IconButton } from '../Buttons/IconButton';
import logoName from '../../assets/TTG-logo-w-text.png';

import { CartsPageRoute, MainPageRoute, SellerPanelPageRoute, ShopPageRoute } from '../../utils/routes';
import { useSelector } from 'react-redux';
import Marquee from '../Utils/Marquee';
import { Modal } from 'react-bootstrap';
import SearchBar from '../Utils/SearchBar';
import { getIsAdmin, getStatus } from '../../Axios/asyncStorage';

import './NavBarBottom.css';
import './NavBarTop.css';
import './NavBarModal.css';
import './NavBarExpanded.css';


function NavBar() {
    const [status, setStatus] = useState(undefined);
    const [isAdmin, setIsAdmin] = useState(undefined);

    useEffect(async () => {
        let curStatus = await getStatus();
        setStatus(curStatus);
        let isCurAdmin = await getIsAdmin();
        setIsAdmin(isCurAdmin);
    }, []);
    
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

                    {(status === "user" || status === null)
                        ? <IconButton buttonIcon="carts-btn" buttonSize="navbar" color="black" onClick={handleCartsClick} />
                        : (status === "seller")
                            ? <IconButton buttonIcon="listings-btn" buttonSize="navbar" color="black" onClick={handleListingsClick} /> 
                            : <div></div>}
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

            <nav className="NavBar-Bottom">
                <ul className="nav-bottom-menu-items">
                    {((status === "seller" ? isAdmin ? AdminMenuItems : SellerMenuItems : MenuItems).map((item, index) => (
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
                    )))}
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
