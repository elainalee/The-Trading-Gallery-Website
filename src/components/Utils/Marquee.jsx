import React from 'react';
import { ShopPageRoute } from '../../utils/routes';
import './Utils.css';

export default function Marquee() {

    const handleOnClick = () => {
        window.location.href = ShopPageRoute;
    }

    return (
        <div className="marquee" onClick={handleOnClick}>
            <div className="text">FREE SHIPPING ON ORDERS OVER $150</div>
        </div>
    );
}
