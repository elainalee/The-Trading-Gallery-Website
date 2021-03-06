import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { getBestSellers, getProducts } from '../../reducers/productsReducer';
import Footer from '../../components/Footer';
import ProductsRow from '../../components/Rows/ProductsRow';

import BlogCard from '../../components/Cards/BlogCard';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { getBlogs } from '../../reducers/blogsReducer';
import FeaturedCard from '../../components/Cards/FeaturedCard';
import Banner from '../../components/Utils/Banner';
import FeaturedRow from '../../components/Rows/FeaturedRow';

import "./MainPage.css"
import "../../utils/globalStyles.css";

export default function MainPage() {
    const { products, blogs } = useSelector((state) => state);

    const bestSellers = products.bestSellers;

    const mainBlog = blogs.mainBlog;
    const subBlogs = blogs.subBlogs;
    const recentBlogs = blogs.recentBlogs;


    return (
        <div className="page-md mainPage">
            <Row className="vertical-section horizontal-sm">
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

            <div className="vertical-section">
                <FeaturedRow title="Featured" products={products.items} placeholderNumbers={4} />
            </div>

            <div className="vertical-section">
                <Banner />
            </div>

            <div className="horizontal-md">
                <ProductsRow title="Shop Our Best Sellers" products={bestSellers} placeholderNumbers={4} enableCarousel={true}/>
            </div>
        </div>
    );
}
