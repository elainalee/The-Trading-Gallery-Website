import React, { useEffect, useState } from 'react';

import aboutMainImage from "../../assets/battle_of_chaos.jpeg";
import productImage from "../../assets/about-product.jpg";
import handImage from "../../assets/about-hand.jpg";


import { useDispatch, useSelector } from 'react-redux';
import { getBestSellers } from '../../reducers/productsReducer';
import ProductsRow from '../../components/Rows/ProductsRow';
import Footer from '../../components/Footer';

import "./AboutUsPages.css";

export default function AboutPage() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state);

    const bestSellers = products.bestSellers;

    useEffect(() => {
        dispatch(getBestSellers());
    }, []);

    return (
        <div className="marginTop aboutPage">
            <main>
                <div className="title">Thank you for choosing The Trading Gallery.</div>

                <div className="body">
                    All of our products will be mailed out, bubble wrapped, and top loaded for quality assurance. We will always leave positive feedback for you and we hope you can reciprocate. If you are unsatisfied with the transaction please message us before leaving feedback so we can address this issue.
                </div>

                <div className="body">Condition Guide:</div>
                <div className="body">
                    <li>Near Mint (NM) : minimal to no wear.</li>
                    <li>Lightly Played (LP) : Minor border or corner wear, possible light scuffs.</li>
                    <li>Moderately Played (MP) : Condition issues visible at a casual glance.</li>
                    <li>Heavily Played (HP) : Severe amount of wear.</li>
                </div>
                

                <div className="body">
                    We ask that you have confidence when making a purchase with us. Thank you for choosing The Trading Gallery and taking a look at our listings.
                </div>

                <img className="mainImage" src={aboutMainImage} />

            </main>

            

            <div className="bestSeller marginHorizontal">
                <div className="title">Shop Now</div>
                <ProductsRow products={bestSellers} />
            </div>    

            <Footer />
        </div>
    );
}
