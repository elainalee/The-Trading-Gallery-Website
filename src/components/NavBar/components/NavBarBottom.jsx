import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminMenuItems, MenuItems, SellerMenuItems, ShopCategoryItems } from '../MenuItems';

import { CartsPageRoute, MainPageRoute, SellerPanelPageRoute, ShopPageRoute } from '../../../utils/routes';

import './NavBarBottom.css';
import './NavBarTop.css';
import './NavBarExpanded.css';


export default function NavBarBottom({
    status, isAdmin, handleSectionClick
}) {
    // For Desktop version
    const [isMouseOnShop, setIsMouseOnShop] = useState(false);
    const [isMouseOnNavExpand, setIsMouseOnNavExpand] = useState(false);


    const handleShowShop = (tabName) => {
        setIsMouseOnShop(tabName === "Shop");
    }

    return (
        <div className="navBar">
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
        </div>
    );
}
