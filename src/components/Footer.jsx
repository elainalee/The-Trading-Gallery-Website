import React, { useState, useEffect } from 'react';
import { AboutPageRoute, BlogPageRoute, ContactPageRoute, PrivacyPolicyPageRoute, ShippingReturnPageRoute, ShopPageRoute, TermsOfUsePageRoute } from '../utils/routes';


import "./Footer.css"


export default function Footer() {

    return (
        <div className="footer">
            <div className="companyDescription">
                <p className="title">Follow K-beauty trends</p>
                <p className="subTitle">Effective. Safe. Affordable.</p>
            </div>

            <div className="footerAbout">

                <div className="eolma">
                    <p className="title">Ulma</p>
                    <p><a className="link" href={ShopPageRoute}>Shop</a></p>
                    <p><a className="link" href={BlogPageRoute}>Blog</a></p>
                    <p><a className="link" href={AboutPageRoute}>About</a></p>
                    <p><a className="link" href={ContactPageRoute}>Contact</a></p>
                </div>

                <div className="info">
                    <p className="title">Info</p>
                    <p className="link"><a className="link" href={ShippingReturnPageRoute}>Shipping & Return</a></p>
                    <p className="link"><a className="link" href={TermsOfUsePageRoute}>Terms of Use</a></p>
                    <p className="link"><a className="link" href={PrivacyPolicyPageRoute}>Privacy Policy</a></p>
                </div>

                <div className="social">
                    <p className="title">Social</p>
                    <p className="link"><a className="link" href="#">Instagram</a></p>
                    <p className="link"><a className="link" href="#">Facebook</a></p>
                    <p className="link">Y<a className="link" href="#">outube</a></p>
                </div>
            </div>
        </div>
        

        
    );
}
