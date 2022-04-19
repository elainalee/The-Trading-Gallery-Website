import React, { useEffect, useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { AdminMenuItems, MenuItems, SellerMenuItems, ShopCategoryItems } from './MenuItems';
import UserButton from '../Buttons/UserButton';
import { IconButton } from '../Buttons/IconButton';

import { CartsPageRoute, MainPageRoute, SellerPanelPageRoute, ShopPageRoute } from '../../utils/routes';

import { Modal } from 'react-bootstrap';
import SearchBar from '../Utils/SearchBar';
import { getIsAdmin, getStatus } from '../../Axios/asyncStorage';

import './NavBarModal.css';


function NavBarModal() {
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

    const handleCartsClick = () => {
        window.location.href = CartsPageRoute;
    }

    const handleListingsClick = () => {
        window.location.href = SellerPanelPageRoute;
    }

    function handleSectionClick(url) {
        window.location.href = url;
        window.scrollTo(0, 0);
        setMenuClicked(false);
    }

    return (
        <Modal className="NavBar-Modal" animation={true} fullscreen={true} show={isMobile && menuClicked} onHide={() => setMenuClicked(false)}>
            <Modal.Header className="buttons-top">
                {(status === "seller")
                    ? <IconButton buttonIcon="cancel-btn" buttonSize="navbar" color="black" onClick={() => handleMenuClick(false)} />
                    : <SearchBar showOnClick handleMenuClick={handleMenuClick} />}
            </Modal.Header>

            <Modal.Body className="body">
                <ul className="nav-menu-items">
                    {(status === "seller" ? isAdmin ? AdminMenuItems : SellerMenuItems : MenuItems).map((item, index) => (
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
    );
}

// export default withRouter(NavBar);
export default NavBarModal;