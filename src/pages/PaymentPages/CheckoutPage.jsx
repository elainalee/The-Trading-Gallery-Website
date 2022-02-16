import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/Buttons/CustomButton';
import CartCard from '../../components/Cards/CartCard';
import LoadingBox from '../../components/Utils/LoadingBox';
import { getPaymentIntent } from '../../reducers/paymentReducer';

import '../../utils/globalStyles.css';
import { PaymentPageRoute } from '../../utils/routes';
import './PaymentPages.css';

export default function CheckoutPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { cart } = useSelector((state) => state);

    const handleCheckout = () => {
        history.push(PaymentPageRoute);
    }

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        dispatch(getPaymentIntent(cart?.items));
    }, [cart?.items]);

    return (
        <div className="marginTop checkoutPage">
            <main>
                <div className="marginHorizontal">
                    Summary of Items
                    {cart?.items?.map((product, index) => (
                        <div key={index}>
                            {!product.unselected && <CartCard key={index} canModify={false} product={product} last={index == cart?.items?.length - 1}/>}
                        </div>))}

                    <CustomButton onClick={handleCheckout} buttonStyle="outline" buttonDetail="default-size" marginTop="10px" marginBottom="5%">CHECK OUT</CustomButton>


                </div>
            </main>
        </div> 
    );
}
