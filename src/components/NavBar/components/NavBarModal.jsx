import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminMenuItems, MenuItems, SellerMenuItems, ShopCategoryItems } from '..//MenuItems';
import UserButton from '../../Buttons/UserButton';
import { IconButton } from '../../Buttons/IconButton';
import { CartsPageRoute, SellerPanelPageRoute, ShopPageRoute } from '../../../utils/routes';
import { Modal } from 'react-bootstrap';
import SearchBar from '../../Utils/SearchBar';

import './NavBarModal.css';

export default function NavBarModal({
    status, isAdmin, menuClicked, setMenuClicked, isMobile,
    handleMenuClick, handleCartsClick, handleListingsClick, handleSectionClick
}) {
    // For Mobile version
    const [showShopCategory, setShowShopCategory] = useState(false);


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
