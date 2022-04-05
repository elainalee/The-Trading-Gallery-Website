import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogsRow from '../../components/Rows/BlogsRow';
import ProductsRow from '../../components/Rows/ProductsRow';
import { getSellerBlogs, getSellerProducts } from '../../reducers/sellerReducer';

import "../../utils/globalStyles.css";
import "./SellerPages.css";

export default function SellerPanelPage() {
    const dispatch = useDispatch();

    const { seller } = useSelector((state) => state);

    const sellerProducts = seller.products;
    const sellerBlogs = seller.blogs;

    useEffect(() => {
        dispatch(getSellerProducts());
        dispatch(getSellerBlogs());
    }, []);


    return (
        <div className="vertical-md sellerPanelPage">
            <div className="horizontal-md">
                <div className="section">
                    <ProductsRow 
                        title="My Products"
                        products={sellerProducts} 
                        placeholderNumbers={8}
                    />
                </div>

                <div className="section">
                    <BlogsRow 
                        title="My Blogs"
                        blogs={sellerBlogs} 
                        placeholderNumbers={8}
                    />
                </div>

                
            </div>
        </div>
        
    );
}
