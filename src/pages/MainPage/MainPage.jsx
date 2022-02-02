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
import { getBlogs } from '../../reducers/blogsReducer';
import FeaturedCard from '../../components/Cards/FeaturedCard';
import { BANNER_FIRST, BANNER_FIRST_CONTENT, BANNER_SECOND, BANNER_SECOND_CONTENT, BANNER_THIRD, BANNER_THIRD_CONTENT } from '../../utils/contents';


export default function MainPage() {
    const dispatch = useDispatch();

    const { products, blogs } = useSelector((state) => state);

    const bestSellers = products.bestSellers;

    const mainBlog = blogs.mainBlog;
    const subBlogs = blogs.subBlogs;
    const recentBlogs = blogs.recentBlogs;

    // console.log("mainBlog ", mainBlog);
    // console.log("subblog ", subBlogs);
    // console.log("recentBlog ", recentBlogs);


    useEffect(() => {
        dispatch(getBestSellers());
        dispatch(getBlogs("mainBlog"));
        dispatch(getBlogs("subBlog"));
        dispatch(getBlogs("recentBlog"));
    }, []);

    return (
        <div className="mainPage">
            <Row className="marginTop paddingHorizontalSm">
                <Col md={3} className="grayBorderRight">
                    <BlogCard sm blog={recentBlogs?.[0]} />
                    <BlogCard sm blog={recentBlogs?.[1]} />
                    <BlogCard sm blog={recentBlogs?.[2]} />
                    <BlogCard sm last blog={recentBlogs?.[3]} />
                </Col>
                <Col md={6} className="grayBorderRight">
                    <BlogCard lg last blog={ mainBlog?.[0] } />
                </Col>
                <Col md={3}>
                    <BlogCard md blog={ subBlogs?.[0] } />
                    <BlogCard md last blog={ subBlogs?.[1]  } />
                </Col>
            </Row>

            <div className="featured marginTop paddingHorizontalSm">
                <div className="title">Featured</div>
                <Row className="marginTop paddingHorizontalSm">
                <Col lg={4}>
                    <FeaturedCard sm product={bestSellers?.[0]} />
                    <FeaturedCard sm product={bestSellers?.[1]} />
                    <FeaturedCard sm product={bestSellers?.[2]} />
                    <FeaturedCard sm product={bestSellers?.[3]} />
                </Col>
                <Col lg={4}>
                    <FeaturedCard sm product={ bestSellers?.[0] } />
                    <FeaturedCard sm product={ bestSellers?.[1]  } />
                    <FeaturedCard sm product={ bestSellers?.[1]  } />
                    <FeaturedCard sm product={ bestSellers?.[1]  } />
                </Col>
                <Col lg={4}>
                    <FeaturedCard sm product={ bestSellers?.[0] } />
                    <FeaturedCard sm product={ bestSellers?.[1]  } />
                    <FeaturedCard sm product={ bestSellers?.[1]  } />
                    <FeaturedCard sm product={ bestSellers?.[1]  } />
                </Col>
            </Row>

            </div>

            <div className="moreAbout grayBorderTop grayBorderBottom">
                <div className="title">A Little About Our Company</div>

                <div className="explanations">
                    <div className="first">
                        <p className="subTitle">{BANNER_FIRST}</p>
                        <p className="description">{BANNER_FIRST_CONTENT}</p>
                    </div>

                    <div className="second">
                        <p className="subTitle">{BANNER_SECOND}</p>
                        <p className="description">{BANNER_SECOND_CONTENT}</p>
                    </div>

                    <div className="third">
                        <p className="subTitle">{BANNER_THIRD}</p>
                        <p className="description">{BANNER_THIRD_CONTENT}</p>
                    </div>
                </div>
            </div>

            <div className="bestSeller paddingHorizontal grayBorderBottom">
                <div className="title">Shop Our Best Sellers</div>

                <ProductsRow products={bestSellers} placeholderNumbers={4} />
            </div>
            <Footer />
        </div>
    );
}
