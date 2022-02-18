import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/Buttons/CustomButton';
import CartCard from '../../components/Cards/CartCard';
import { getCart } from '../../reducers/cartReducer';

import '../../utils/globalStyles.css';
import { CheckoutPageRoute, ShopPageRoute } from '../../utils/routes';
import '../../components/Cards/CartCard.css';
import './UserPages.css';

export default function CartsPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { cart } = useSelector((state) => state);

    const cartItems = cart?.items;

    const cartItemsToDisplay = cartItems ?? [...Array(5)];

    useEffect(() => {
        dispatch(getCart());
    }, []);

    const handleCheckout = () => {
        history.push(CheckoutPageRoute);
    }

    const handleBackToShopping = () => {
        history.push(ShopPageRoute);
    }

    return (
        <div className="marginTop cartsPage">
            <main className="marginHorizontal">
                <div className="freeShipping">
                    <text>Add $</text>
                    <text className="amount">30</text>
                    <text> for free shipping!</text>
                </div>

                <Row>
                    <Col md={9}>
                        <CartCard title={true} />
                        {cartItemsToDisplay.map((product, index) => ( 
                            <CartCard key={index} product={product} last={index == cartItems?.length - 1}/>))}
                    </Col>
                    <Col md={3} className="checkoutBox">
                        <div className="estTotal">
                            <text className="estTotalText">Estimated Total:</text>
                            <text className="estTotalNumber">$140</text>
                        </div>
                        <div className="taxShipping">
                            <text className="taxShippingText">Taxes and Shipping to be determined in the checkout</text>
                        </div>
                        <CustomButton onClick={handleCheckout} buttonStyle="primary" buttonDetail="default-size" marginTop="15px">CHECK OUT</CustomButton>
                        <CustomButton onClick={handleBackToShopping} buttonStyle="outline" buttonDetail="default-size" marginTop="15px" marginBottom="5%">BACK TO SHOPPING</CustomButton>

                    </Col>
                </Row>
                
            </main>
        </div> 
    );
}
