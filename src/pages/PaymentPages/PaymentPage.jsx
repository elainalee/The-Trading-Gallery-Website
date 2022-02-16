import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { getPaymentIntent } from '../../reducers/paymentReducer';
import { useDispatch, useSelector } from 'react-redux';
import PaymentForm from './PaymentForm';


// eslint-disable-next-line no-undef
const stripePromise = loadStripe(process.env.REACT_APP_PK_KEY);

export default function PaymentPage() {
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
        <div className="marginTop paddingHorizontal paymentPage">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
        )}
        </div>        
    );
}
