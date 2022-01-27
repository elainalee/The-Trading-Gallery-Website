import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { getBestSellers } from '../../reducers/productsReducer';
import Footer from '../../components/Footer';
import ProductsRow from '../../components/Rows/ProductsRow';

import mainImage from "../../assets/shonen_jump.jpeg";
import cardboxImage from "../../assets/cardbox.png";
import cardpack from "../../assets/cardpack.png";


import "./MainPage.css"
import "../../utils/globalStyles.css";
import BlogCard from '../../components/Cards/BlogCard';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../../components/Cards/ProductCard';


export default function MainPage() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state);

    const bestSellers = products.bestSellers;

    useEffect(() => {
        dispatch(getBestSellers());
    }, []);

    return (
        <div className="mainPage">
            <Row className="marginTop paddingHorizontalSm">
                <Col md={3} className="grayBorderRight">
                    <BlogCard sm content={{ title: "the title", }}  />
                    <BlogCard sm content={{ title: "the title", }} />
                    <BlogCard sm content={{ title: "the title", }} />
                    <BlogCard sm last content={{ title: "the title", }} />
                </Col>
                <Col md={6} className="grayBorderRight">
                    <BlogCard lg last content={{ title: "the title", }} />
                </Col>
                <Col md={3}>
                    <BlogCard md content={{ title: "the title", }} />
                    <BlogCard md last content={{ title: "the title", }} />
                </Col>
            </Row>


            {/* <img className="mainImage" src={mainImage} /> */}

            <div className="bestSeller paddingHorizontal">
                <div className="title">Shop Our Best Sellers</div>

                <ProductsRow products={bestSellers} placeholderNumbers={4} />
            </div>

            <div className="moreAbout">
                <div className="title">A Little About Our Company</div>

                <div className="explanations">
                    <div className="first">
                        <p className="subTitle">Reliable Communication</p>
                        <p className="description">We respond to you within 24 hours. Your satisfaction is key to us.</p>
                    </div>

                    <div className="second">
                        <p className="subTitle">Safe Shipping</p>
                        <p className="description">Singles will be sleeved, top loaded and slight amount of bubble wrap for quality assurance.</p>
                    </div>

                    <div className="third">
                        <p className="subTitle">Competitive Prices</p>
                        <p className="description">We ensure competitive prices. All local (within Canada) orders are free shipping.</p>
                        
                    </div>
                </div>
            </div>

            <div className="exclusive">
                {/* <div className="title">Exclusive: The Rejuvenation Line</div> */}
            </div>

            <Footer />
        </div>
    );
}
