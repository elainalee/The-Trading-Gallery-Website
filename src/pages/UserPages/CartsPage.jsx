import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../../components/Cards/CartCard';
import Footer from '../../components/Footer';
import LoadingBox from '../../components/Utils/LoadingBox';
import { getCart } from '../../reducers/cartReducer';

import '../../utils/globalStyles.css';
import './UserPages.css';

export default function CartsPage() {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state);

    const cartItems = cart?.items;

    const cartItemsToDisplay = cartItems ?? [...Array(5)];

    useEffect(() => {
        dispatch(getCart());
    }, []);


    return (
        <div className="marginTop cartsPage">
            <main>
                <div className="marginHorizontal">
                    {cartItemsToDisplay.map((product, index) => ( 
                        <CartCard key={index} productId={product?.productID} quantity={product?.quantity} last={index == cartItems?.length - 1}/>))}
                </div>
            </main>
            <Footer />
        </div> 
    );
}
