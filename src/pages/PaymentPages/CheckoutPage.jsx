import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import { getPaymentIntent } from '../../reducers/paymentReducer';
import { useDispatch, useSelector } from 'react-redux';


// eslint-disable-next-line no-undef
const stripePromise = loadStripe(process.env.REACT_APP_PK_KEY);

export default function CheckoutPage() {
    const dispatch = useDispatch();
    const { payments } = useSelector((state) => state);

    const clientSecret = payments.clientSecret;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        dispatch(getPaymentIntent());
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };


    return (
        <div className="">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
        )}
        </div>        
    );
}
