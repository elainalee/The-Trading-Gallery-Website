import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import CustomButton from '../../components/Buttons/CustomButton';
import CartCard from '../../components/Cards/CartCard';

import { CheckoutPageRoute, ShopPageRoute } from '../../utils/routes';

import '../../utils/globalStyles.css';
import './UserPages.css';

export default function CartsPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { cart } = useSelector((state) => state);

    const cartItems = cart?.items;
    const cartTotal = cart?.total;


    const handleBackToShopping = () => {
        history.push(ShopPageRoute);
    }

    return (
        <div className="vertical-md horizontal-md cartsPage">
            {cartTotal < 150
                ? (<div className="freeShipping">
                        Add  <strong> ${150 - cartTotal}</strong> more for free shipping!  
                    </div>)
                : cartTotal >= 150
                    ? <div className="freeShipping"><strong>You're qualified for free shipping!</strong></div>
                    : <div />
            }
            <Row>
                <Col md={9}>
                    <div className="cart-title"><CartCard title={true} /></div>
                    {cart?.items?.map((product, index) => ( 
                        <CartCard key={index} product={product} last={index == cartItems?.length - 1}/>))}
                </Col>
                <Col md={3} className="checkoutBox">
                    <div className="estTotal">
                        <div className="estTotalText">Estimated Total:</div>
                        <div className="estTotalNumber">${cartTotal}</div>
                    </div>
                    <div className="taxShipping">
                        <div className="taxShippingText">Taxes and Shipping to be determined in the checkout</div>
                    </div>

                    <CustomButton onClick={() => history.push(CheckoutPageRoute)} buttonStyle="primary" buttonDetail="default-size" marginTop="15px">
                        CHECK OUT
                    </CustomButton>

                    <CustomButton onClick={handleBackToShopping} buttonStyle="outline" buttonDetail="default-size" marginTop="15px" marginBottom="5%">BACK TO SHOPPING</CustomButton>
                </Col>
            </Row>
        </div> 
    );
}