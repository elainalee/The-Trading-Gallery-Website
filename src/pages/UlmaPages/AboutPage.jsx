import React, { useEffect, useState } from 'react';


import aboutMainImage from "../../assets/aboutMainImage.jpg";
import productImage from "../../assets/about-product.jpg";
import handImage from "../../assets/about-hand.jpg";

import "./UlmaPages.css";
import { useDispatch, useSelector } from 'react-redux';
import { getBestSellers } from '../../reducers/productsReducer';
import ProductsRow from '../../components/Rows/ProductsRow';
import Footer from '../../components/Footer';

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
                <div className="title">We believe everyone deserves beautiful skin.</div>
                <div className="body">
                    In 2021, we started Ulma with the simple goal of giving the world great skin. From that day forward we have stopped at nothing to provide the most effective, safe, and affordable skincare products.
                </div>
                <div className="body">
                Korean consumers are very knowledgeable about different cosmetic types and ingredients, and they are picky. Korean beauty products utilize the most effective Western ingredients - and so much more.  
                </div>
                <div className="body">
                    We want you to love your skin, and we want your daily bathing and skincare rituals to be as luxurious and guilt-free in the most affordable form as possible.
                </div>

                <img className="mainImage" src={aboutMainImage} />

                <div className="description">
                    We've carefully chosen our selections with essential vitamins, minerals, and botanicals to pack your skin with essential nutrients for the ultimate in health and vitality.
                </div>

                <div className="smallImages">
                    <img className="productImage" src={productImage} />
                    <img className="handImage" src={handImage} />
                </div>
            </main>

            

            <div className="bestSeller marginHorizontal">
                <div className="title">Shop Now</div>
                <ProductsRow products={bestSellers} />
            </div>    

            <Footer />
        </div>
    );
}
