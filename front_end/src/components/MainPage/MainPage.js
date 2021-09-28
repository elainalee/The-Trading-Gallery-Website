import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';
import Products from '../Products/Products';
import LoadingBox from '../Utils/LoadingBox';
import MessageBox from '../Utils/MessageBox';
import { getProducts } from '../../reducers/productsReducer';
import BASE_URL from '../../Axios/BASE_URL';
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
                    : <Products products = {products.items} />
            }
        </div>
    );
}
