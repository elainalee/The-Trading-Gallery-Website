import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AboutPageRoute, AddressPickupRoute, BlogsPageRoute, ContactPageRoute, MainPageRoute, PrivacyPolicyPageRoute, ShippingReturnPageRoute, ShopPageRoute, TermsOfUsePageRoute } from '../utils/routes';

import "./Footer.css"

export default function Footer() {

    function moveToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="footer">
            <div className="companyDescription">
                <p className="title">The Trading Gallery</p>
                <p className="subTitle"><a href="mailto:hello@thetradinggallery.ca" className="link">hello@thetradinggallery.ca</a></p>
            </div>

            <div className="footerAbout">

                <div className="section">
                    <div className="title">TGG</div>
                    <div><Link to={ShopPageRoute} onClick={moveToTop} className="link">Shop</Link></div>
                    <div><Link to={BlogsPageRoute} onClick={moveToTop} className="link">Blog</Link></div>
                    <div><Link to={AboutPageRoute} onClick={moveToTop} className="link">About</Link></div>
                    <div><Link to={ContactPageRoute} onClick={moveToTop} className="link">Contact</Link></div>
                </div>

                <div className="section">
                    <div className="title">Info</div>
                    <div><Link to={ShippingReturnPageRoute} onClick={moveToTop} className="link">Shipping & Return</Link></div>
                    <div><Link to={AddressPickupRoute} onClick={moveToTop} className="link">Address & Pickup</Link></div>
                    <div><Link to={TermsOfUsePageRoute} onClick={moveToTop} className="link">Terms of Use</Link></div>
                    <div><Link to={PrivacyPolicyPageRoute} onClick={moveToTop} className="link">Privacy Policy</Link></div>
                </div>

                {/* <div className="section">
                    <p className="title">Social</p>
                    <p><Link to={() => {}} className="link">Instagram</Link></p>
                    <p><Link to={() => {}} className="link">Facebook</Link></p>
                    <p><Link to={() => {}} className="link">Youtube</Link></p>
                </div> */}
            </div>
        </div> 
    );
}
