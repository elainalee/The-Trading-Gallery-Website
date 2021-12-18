import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SUCCESS } from '../../utils/constants';

import { getProducts } from '../../reducers/productsReducer';
import LoadingBox from '../../components/Utils/LoadingBox';
import MessageBox from '../../components/Utils/MessageBox';
import ProductsRow from '../../components/Rows/ProductsRow';

export default function ShopPage() {

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const items = products.items;

    useEffect(() => {
        dispatch(getProducts()).then((res) => {
            setLoading(false);
            if (res != SUCCESS) {
                setError(res);
            }
        });
    }, []);


    return (
        <div className="marginHorizontal marginTop">
            {loading
                    ? <LoadingBox />
                    : error
                        ? <MessageBox>{error}</MessageBox>
                        : <ProductsRow products = {items} />
                }
        </div>
    );
}
