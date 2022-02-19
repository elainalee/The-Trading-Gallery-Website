import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { getPaymentIntent } from '../../reducers/paymentReducer';
import { useDispatch, useSelector } from 'react-redux';
// import PaymentForm from './PaymentForm';
import CartCard from '../../components/Cards/CartCard';


// eslint-disable-next-line no-undef
const stripePromise = loadStripe(process.env.REACT_APP_PK_KEY);

export default function PaymentPage() {
    
    const { cart, payments } = useSelector((state) => state);

    const clientSecret = payments.clientSecret;

    const appearance = {
        theme: 'stripe',
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="marginTop paddingHorizontal paymentPage">
            <h2>{"Total: $" + payments?.totalAmount}</h2>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    {/* <PaymentForm /> */}
                </Elements>
            )}
        </div>        
    );
}
