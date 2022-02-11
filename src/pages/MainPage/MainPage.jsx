import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { getBestSellers, getProducts } from '../../reducers/productsReducer';
import Footer from '../../components/Footer';
import ProductsRow from '../../components/Rows/ProductsRow';

import "./MainPage.css"
import "../../utils/globalStyles.css";
import BlogCard from '../../components/Cards/BlogCard';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { getBlogs } from '../../reducers/blogsReducer';
import FeaturedCard from '../../components/Cards/FeaturedCard';
import Banner from '../../components/Utils/Banner';
import FeaturedRow from '../../components/Rows/FeaturedRow';


export default function MainPage() {
    const dispatch = useDispatch();

    const { products, blogs } = useSelector((state) => state);

    const bestSellers = products.bestSellers;

    const mainBlog = blogs.mainBlog;
    const subBlogs = blogs.subBlogs;
    const recentBlogs = blogs.recentBlogs;


    useEffect(() => {
        dispatch(getProducts());
        dispatch(getBestSellers());
        dispatch(getBlogs("mainBlog"));
        dispatch(getBlogs("subBlog"));
        dispatch(getBlogs("recentBlog"));
    }, []);

    return (
        <div className="mainPage">
            <Row className="marginTop paddingHorizontalSm blogSection">
                <Col md={3} className="grayBorderRight">
                    <BlogCard sm blog={recentBlogs?.[recentBlogs.length - 1]} />
                    <BlogCard sm blog={recentBlogs?.[recentBlogs.length - 2]} />
                    <BlogCard sm blog={recentBlogs?.[recentBlogs.length - 3]} />
                    <BlogCard sm last blog={recentBlogs?.[recentBlogs.length - 4]} />
                </Col>
                <Col md={6} className="grayBorderRight">
                    <BlogCard lg last blog={ mainBlog?.[mainBlog.length - 1] } />
                </Col>
                <Col md={3}>
                    <BlogCard md blog={ subBlogs?.[subBlogs.length - 1] } />
                    <BlogCard md last blog={ subBlogs?.[subBlogs.length - 2]  } />
                </Col>
            </Row>

            {/* <FeaturedRow title="Featured" products={bestSellers} placeholderNumbers={4} /> */}
            <FeaturedRow title="Featured" products={products.items} placeholderNumbers={4} />

            {/* <div className="featured marginTop paddingHorizontalSm">
                <div className="title">Featured</div>

                <Row xs={1} md={2} lg={3} className="marginTop paddingHorizontalSm">
                    {bestSellers?.map((product, index) => ( 
                        <Col key={index} className="cardMargin">
                            <FeaturedCard sm product={product} />
                        </Col>
                    ))}
                </Row>
            </div> */}

            <Banner />

            <div className="bestSeller paddingHorizontal">
                <ProductsRow title="Shop Our Best Sellers" products={bestSellers} placeholderNumbers={4} enableCarousel={true}/>
            </div>
        </div>
    );
}
