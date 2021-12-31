import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton } from '../../components/Buttons/IconButton';
import Footer from '../../components/Footer';
import ProductsRow from '../../components/Rows/ProductsRow';
import { getSellerProducts } from '../../reducers/sellerReducer';

import "../../utils/globalStyles.css";
import { AddListingPageRoute } from '../../utils/routes';
import "./SellerPages.css";

export default function ListingsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { seller } = useSelector((state) => state);

    const sellerProducts = seller.products;

    useEffect(() => {
        dispatch(getSellerProducts());
    }, []);

    const handleAddClick = () => {
        history.push(AddListingPageRoute);
    }


    return (
        <div className="marginTop listingsPage">
            <div className="marginHorizontal">
                <div className="myProductsTitle">
                    <h2>My Products</h2>
                    <IconButton buttonIcon="add-btn" onClick={handleAddClick}/>
                </div>
                <ProductsRow products={sellerProducts} placeholderNumbers={8}/>
            </div>

            <Footer />
        </div>
        
    );
}
