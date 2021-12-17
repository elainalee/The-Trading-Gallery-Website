import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import ProductsPage from './ProductsPage';
import LoadingBox from '../../components/Utils/LoadingBox';
import MessageBox from '../../components/Utils/MessageBox';
import { getBestSellers } from '../../reducers/productsReducer';
import { SUCCESS } from '../../utils/constants';

import creamImage from "../../assets/cream.jpg";
import makeupsImage from "../../assets/makeups.jpg";


import "./MainPage.css"
import "../../utils/globalStyles.css";
import Footer from '../../components/Footer';


export default function MainPage() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const bestSellers = products.bestSellers;

    useEffect(() => {
        dispatch(getBestSellers()).then((res) => {
            setLoading(false);
            if (res != SUCCESS) {
                setError(res);
            }
        });
    }, []);

    return (
        <div className="mainPage">
            <div className="mainImage">
                <div className="marginLeft">
                    <div className="title">Nutrient-rich formulas for every skin type</div>
                    <div className="subTitle">Experience the beauty of K-beauty</div>
                    
                </div>
            </div>

            <div className="bestSeller">
                <div className="title">Shop Our Best Sellers</div>

                {loading
                    ? <LoadingBox />
                    : error
                        ? <MessageBox>{error}</MessageBox>
                        : <ProductsPage products = {bestSellers} />
                }
            </div>

            <div className="discoverMakeup">
                <div className="discover">
                    <div className="left">
                        <p className="title">Discover your softest skin yet.</p>
                        <p className="description">Our cream is packed with aloe vera and hyaluronic acid to get your skin softer than you ever thought possible.</p>
                    </div>
                    <div className="right">
                        <img className="cream-image" src={creamImage} />
                    </div>

                </div>

                <div className="makeup">
                    <div className="left">
                        <img className="makeup-image" src={makeupsImage} />
                    </div>
                    <div className="right">
                        <p className="title">K-beauty with a purpose.</p>
                        <p className="description">Natural and harsh-free ingredients to create the clear, glowy, and natural-looking skin</p>

                    </div>

                </div>
            </div>

            <div className="moreAbout">
                <div className="title">A Little About Our Products</div>

                <div className="explanations">
                    <div className="first">
                        <p className="subTitle">Safe Formulas</p>
                        <p className="description">We make sure everything we sell is ...</p>
                    </div>

                    <div className="second">
                        <p className="subTitle">Highly Effective</p>
                        <p className="description">Our skin care products have been created and tested by us to get you noticeable results ...</p>
                    </div>

                    <div className="third">
                        <p className="subTitle">Ethically Sourced</p>
                        <p className="description">You can sleep easy knowing we only use ethically sourced natural raw materials</p>
                        
                    </div>
                </div>
            </div>

            <div className="exclusive">
                <div className="title">Exclusive: The Rejuvenation Line</div>
            </div>

            <Footer />
        </div>

        

        
    );
}
