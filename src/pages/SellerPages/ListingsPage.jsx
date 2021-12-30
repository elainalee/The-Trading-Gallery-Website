import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import ProductsRow from '../../components/Rows/ProductsRow';
import { getSellerProducts } from '../../reducers/sellerReducer';

export default function ListingsPage() {
    const dispatch = useDispatch();

    const { seller } = useSelector((state) => state);

    const sellerProducts = seller.products;

    useEffect(() => {
        dispatch(getSellerProducts());
    }, []);


    return (
        <div className="marginTop">
            <div className="marginHorizontal">
                <ProductsRow products={sellerProducts} placeholderNumbers={8}/>
            </div>

            <Footer />
        </div>
        
    );
}
