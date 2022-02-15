import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';
import { getPaymentIntent } from '../../reducers/paymentReducer';
import { useDispatch, useSelector } from 'react-redux';


const stripePromise = loadStripe("pk_test_51KTYTRHtEWRM98DLhrXuHywscFH3q1IUfxcoQL0w7cXAT9TBDFcVQiJ5m0w1UrAcdReXuCgN5KjmhWQ5cim0OzsZ000vA2lquv");

export default function CheckoutPage() {
    const dispatch = useDispatch();
    const { payments } = useSelector((state) => state);

    const clientSecret = payments.clientSecret;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        dispatch(getPaymentIntent());
    }, []);

    console.log(payments.clientSecret);

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
