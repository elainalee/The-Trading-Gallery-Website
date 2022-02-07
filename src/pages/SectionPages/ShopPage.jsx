import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../reducers/productsReducer';
import ProductsRow from '../../components/Rows/ProductsRow';
import Footer from '../../components/Footer';

export default function ShopPage() {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state);

    const items = products.items;

    useEffect(() => {
        dispatch(getProducts());
    }, []);


    return (
        <div>
            <div className="marginHorizontal">
                <ProductsRow products={items} title="FEATURED PRODUCTS" placeholderNumbers={8}/>
            </div>

            <Footer />
        </div>
    );
}
