import React, { useState, useEffect } from 'react';


import "./Footer.css"


export default function Footer() {

    return (
        <div className="footer">
            <div className="companyDescription">
                <p className="title">Follow K-beauty trends</p>
                <p className="subTitle">Effective, safe, affordable.</p>
            </div>

            <div className="footerAbout">

                <div className="eolma">
                    <p className="title">Eolma</p>
                    <p className="link">Shop</p>
                    <p className="link">About</p>
                    <p className="link">Blog</p>
                </div>

                <div className="info">
                    <p className="title"> Info</p>
                    <p className="link">Shipping & Returns</p>
                    <p className="link">Terms of Use</p>
                    <p className="link">Privacy Policy</p>
                </div>

                <div className="social">
                    <p className="title">Social</p>
                    <p className="link">Instagram</p>
                    <p className="link">Facebook</p>
                    <p className="link">Youtube</p>
                </div>
            </div>
        </div>
        

        
    );
}
