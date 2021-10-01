import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import ProductsPage from './ProductsPage';
import LoadingBox from '../../components/Utils/LoadingBox';
import MessageBox from '../../components/Utils/MessageBox';
import { getProducts } from '../../reducers/productsReducer';
import { SUCCESS } from '../../utils/constants';

export default function MainPage() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        dispatch(getProducts()).then((res) => {
            setLoading(false);
            if (res != SUCCESS) {
                setError(res);
            }
        });

    }, []);
    
    return (
        <div>
            {loading
                ? <LoadingBox />
                : error
                    ? <MessageBox>{error}</MessageBox>
                    : <ProductsPage products = {products.items} />
            }
        </div>
    );
}
