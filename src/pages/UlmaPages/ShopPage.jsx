import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUCCESS } from '../../utils/constants';

import { getProducts } from '../../reducers/productsReducer';
import LoadingBox from '../../components/Utils/LoadingBox';
import MessageBox from '../../components/Utils/MessageBox';
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
        <div className="marginTop">
            <div className="marginHorizontal">
                <ProductsRow products={items} placeholderNumbers={8}/>
            </div>

            <Footer />
        </div>
    );
}
