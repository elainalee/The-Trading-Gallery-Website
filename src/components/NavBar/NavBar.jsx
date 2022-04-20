import React, { useEffect, useState } from 'react';

import { CartsPageRoute, MainPageRoute, SellerPanelPageRoute, ShopPageRoute } from '../../utils/routes';
import Marquee from '../Utils/Marquee';
import { getIsAdmin, getStatus } from '../../Axios/asyncStorage';

import NavBarModal from './components/NavBarModal';
import NavBarTop from './components/NavBarTop';
import NavBarBottom from './components/NavBarBottom';



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


    function handleSectionClick(url) {
        window.location.href = url;
        window.scrollTo(0, 0);
        setMenuClicked(false);
    }

    return (
        <div className="navBar">

            <NavBarModal
                status={status}
                isAdmin={isAdmin}
                menuClicked={menuClicked}
                setMenuClicked={setMenuClicked}
                isMobile={isMobile}

                handleMenuClick={handleMenuClick}
                handleCartsClick={handleCartsClick}
                handleListingsClick={handleListingsClick}
                handleSectionClick={handleSectionClick}
            />

            <div className="hide-mobile">
                <Marquee/>
            </div>
            
            <NavBarTop
                status={status}
                menuClicked={menuClicked}

                handleMenuClick={handleMenuClick}
                handleCartsClick={handleCartsClick}
                handleListingsClick={handleListingsClick}
                handleLogoClick={handleLogoClick}
            />

            <NavBarBottom
                status={status}
                isAdmin={isAdmin}
                isMobile={isMobile}

                handleSectionClick={handleSectionClick}
            />

            <div className="hide-full">
                <Marquee/>
            </div>
        </div>
    );
}

// export default withRouter(NavBar);
export default NavBar;