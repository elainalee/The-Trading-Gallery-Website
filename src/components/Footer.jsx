import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { TGG_EMAIL } from '../utils/contents';

import { AboutPageRoute, AddressPickupRoute, BlogsPageRoute, ContactPageRoute, MainPageRoute, PrivacyPolicyPageRoute, ShippingReturnPageRoute, ShopPageRoute, TermsOfUsePageRoute } from '../utils/routes';

import "./Footer.css"

function Footer() {

    const [tggSectionClicked, setTggSectionClicked] = useState(false);
    const [infoSectionClicked, setInfoSectionClicked] = useState(false);

    function moveToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="footer">
                <Row>
                    <Col md={8} lg={8} className="companyDescription">
                        <div className="title">The Trading Gallery</div>
                        <div className="subTitle"><a href={"mailto:" + TGG_EMAIL} className="link">{TGG_EMAIL}</a></div>
                    </Col>
                    <Col md={2} lg={2} className="footerAbout">
                        <ul className={tggSectionClicked ? "section-items expanded" : "section-items"}>
                            <div className="title" onClick={() => setTggSectionClicked(!tggSectionClicked)}>TGG<i className={"fas " + (tggSectionClicked ? "fa-angle-up" : "fa-angle-down")}></i></div>
                            <div className="section-item"><Link to={ShopPageRoute} onClick={moveToTop} className="link">Shop</Link></div>
                            <div className="section-item"><Link to={BlogsPageRoute} onClick={moveToTop} className="link">Blog</Link></div>
                            <div className="section-item"><Link to={AboutPageRoute} onClick={moveToTop} className="link">About</Link></div>
                            <div className="section-item"><Link to={ContactPageRoute} onClick={moveToTop} className="link">Contact</Link></div>
                        </ul>
                    </Col>
                    <Col md={2} lg={2} className="footerAbout">
                        <ul className={infoSectionClicked ? "section-items expanded" : "section-items"}>
                            <div className="title" onClick={() => setInfoSectionClicked(!infoSectionClicked)}>INFO<i className={"fas " + (infoSectionClicked ? "fa-angle-up" : "fa-angle-down")}></i></div>
                            <div className="section-item"><Link to={ShippingReturnPageRoute} onClick={moveToTop} className="link">Shipping & Return</Link></div>
                            <div className="section-item"><Link to={AddressPickupRoute} onClick={moveToTop} className="link">Address & Pickup</Link></div>
                            <div className="section-item"><Link to={TermsOfUsePageRoute} onClick={moveToTop} className="link">Terms of Use</Link></div>
                            <div className="section-item"><Link to={PrivacyPolicyPageRoute} onClick={moveToTop} className="link">Privacy Policy</Link></div>
                        </ul>
                    </Col>
                </Row>
            </div>
    );
}


export default withRouter(Footer);