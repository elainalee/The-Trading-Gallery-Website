import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useHistory, withRouter } from 'react-router-dom';
import { TTG_CITY_POSTAL, TTG_EMAIL, TTG_STREET_ADDRESS } from '../utils/contents';

import { AboutPageRoute, AddressPickupRoute, BlogsPageRoute, ContactPageRoute, MainPageRoute, PrivacyPolicyPageRoute, ShippingReturnPageRoute, ShopPageRoute, TermsOfUsePageRoute } from '../utils/routes';

import "./Footer.css"
import "../utils/globalStyles.css";

function Footer() {

    const [tggSectionClicked, setTggSectionClicked] = useState(false);
    const [infoSectionClicked, setInfoSectionClicked] = useState(false);

    function moveToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="footer">
            <Row>
                <Col md={8} lg={8} className="vertical-xs">
                    <h4><strong>The Trading Gallery</strong></h4>
                    <p><a href={"mailto:" + TTG_EMAIL} className="link">{TTG_EMAIL}</a></p>
                    <div>{TTG_STREET_ADDRESS}</div>
                    <div>{TTG_CITY_POSTAL}</div>
                </Col>
                <Col md={2} lg={2} className="footerAbout">
                    <div className={tggSectionClicked ? "section-items expanded" : "section-items"}>
                        <h4 className="grayBorderBottom" onClick={() => setTggSectionClicked(!tggSectionClicked)}><strong>TGG<i className={"fas " + (tggSectionClicked ? "fa-angle-up" : "fa-angle-down")} /></strong></h4>
                        {/* <div className="title" onClick={() => setTggSectionClicked(!tggSectionClicked)}>TGG<i className={"fas " + (tggSectionClicked ? "fa-angle-up" : "fa-angle-down")} /></div> */}
                        <div className="section-item"><Link to={ShopPageRoute} onClick={moveToTop} className="link">Shop</Link></div>
                        <div className="section-item"><Link to={BlogsPageRoute} onClick={moveToTop} className="link">Blog</Link></div>
                        <div className="section-item"><Link to={AboutPageRoute} onClick={moveToTop} className="link">About</Link></div>
                        <div className="section-item"><Link to={ContactPageRoute} onClick={moveToTop} className="link">Contact</Link></div>
                    </div>
                </Col>
                <Col md={2} lg={2} className="footerAbout">
                    <div className={infoSectionClicked ? "section-items expanded" : "section-items"}>
                        <h4 className="grayBorderBottom" onClick={() => setInfoSectionClicked(!infoSectionClicked)}><strong>INFO</strong><i className={"fas " + (infoSectionClicked ? "fa-angle-up" : "fa-angle-down")} /></h4>
                        <div className="section-item"><Link to={ShippingReturnPageRoute} onClick={moveToTop} className="link">Shipping & Return</Link></div>
                        <div className="section-item"><Link to={AddressPickupRoute} onClick={moveToTop} className="link">Address & Pickup</Link></div>
                        <div className="section-item"><Link to={TermsOfUsePageRoute} onClick={moveToTop} className="link">Terms of Use</Link></div>
                        <div className="section-item"><Link to={PrivacyPolicyPageRoute} onClick={moveToTop} className="link">Privacy Policy</Link></div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}


export default withRouter(Footer);