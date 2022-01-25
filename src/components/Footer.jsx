import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AboutPageRoute, BlogPageRoute, ContactPageRoute, MainPageRoute, PrivacyPolicyPageRoute, ShippingReturnPageRoute, ShopPageRoute, TermsOfUsePageRoute } from '../utils/routes';

import "./Footer.css"

export default function Footer() {

    function moveToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="footer">
            <div className="companyDescription">
                <p className="title">The Trading Gallery</p>
                <p className="subTitle">Reliable. Safe. Competitive Prices.</p>
            </div>

            <div className="footerAbout">

                <div className="eolma">
                    <p className="title">About Us</p>
                    <p><Link to={ShopPageRoute} onClick={moveToTop} className="link">Shop</Link></p>
                    <p><Link to={BlogPageRoute} onClick={moveToTop} className="link">Blog</Link></p>
                    <p><Link to={AboutPageRoute} onClick={moveToTop} className="link">About</Link></p>
                    <p><Link to={ContactPageRoute} onClick={moveToTop} className="link">Contact</Link></p>
                </div>

                <div className="info">
                    <p className="title">Info</p>
                    <p><Link to={ShippingReturnPageRoute} onClick={moveToTop} className="link">Shipping & Return</Link></p>
                    <p><Link to={TermsOfUsePageRoute} onClick={moveToTop} className="link">Terms of Use</Link></p>
                    <p><Link to={PrivacyPolicyPageRoute} onClick={moveToTop} className="link">Privacy Policy</Link></p>
                </div>

                <div className="social">
                    <p className="title">Social</p>
                    <p><Link to={() => {}} className="link">Instagram</Link></p>
                    <p><Link to={() => {}} className="link">Facebook</Link></p>
                    <p><Link to={() => {}} className="link">Youtube</Link></p>
                </div>
            </div>
        </div>
        

        
    );
}
