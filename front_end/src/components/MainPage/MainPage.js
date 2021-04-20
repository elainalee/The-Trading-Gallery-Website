import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from '../Products/Products';
import LoadingBox from '../Utils/LoadingBox';
import MessageBox from '../Utils/MessageBox';

export default function MainPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

  console.log(products);
    
    return (
        <div>
            {loading
                ? <LoadingBox></LoadingBox>
                : error
                    ? <MessageBox>{error}</MessageBox>
                    : <Products products = {products} />}
        </div>
    );
}
