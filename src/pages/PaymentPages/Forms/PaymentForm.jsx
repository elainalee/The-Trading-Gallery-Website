import React, { useEffect, useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";
import CustomButton from '../../../components/Buttons/CustomButton';

import LoadingBox from "../../../components/Utils/LoadingBox";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, Row } from 'react-bootstrap';
import { CANADA_PROVINCES } from '../../../utils/provinces';
import { generateReceipt } from '../../../reducers/paymentReducer';

import './PaymentForms.css';


export default function PaymentForm(props) {
    const dispatch = useDispatch();
    const { user, payments } = useSelector((state) => state);
    const paymentInfo = props.paymentInfo;
    const setPaymentInfo = props.setPaymentInfo;
    const billingInfo = props.billingInfo;
    const setBillingInfo = props.setBillingInfo;

    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [sameAsShipping, setSameAsShipping] = useState(false);

    useEffect(() => {
        if (!stripe) {
          return;
        }
        const clientSecret = new URLSearchParams(window.location.search).get(
          "payment_intent_client_secret"
        );
        // const clientSecret = payments.clientSecret;
    
        if (!clientSecret) {
          return;
        }
    
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
          switch (paymentIntent.status) {
            case "succeeded":
              setMessage("Payment succeeded!");
              break;
            case "processing":
              setMessage("Your payment is processing.");
              break;
            case "requires_payment_method":
              setMessage("Your payment was not successful, please try again.");
              break;
            default:
              setMessage("Something went wrong.");
              break;
          }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }
    
        setIsLoading(true);

        stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: "http://thetradinggallery.ca/my-account/recent-orders",
            payment_method_data: {
              billing_details: {
                address: {
                  city: sameAsShipping ? paymentInfo?.city : billingInfo?.city,
                  country: "CA",
                  line1: sameAsShipping ? paymentInfo?.line1 : billingInfo?.line1,
                  line2: sameAsShipping ? paymentInfo?.line2 : billingInfo?.line2,
                  postal_code: sameAsShipping ? paymentInfo?.postal_code : billingInfo?.postal_code,
                  state: sameAsShipping ? paymentInfo?.state : billingInfo?.state,
                },
                email: paymentInfo?.email ?? user?.user?.email,
                name: sameAsShipping ? (paymentInfo?.firstName + " " + paymentInfo?.lastName) : (billingInfo?.firstName + " " + billingInfo?.lastName),
                phone: paymentInfo?.phoneNum,
              }
            }
          },
          redirect: "if_required"
        }).then(function(result) {
          if (result?.error) {
            const error = result.error;
            if (error.type === "card_error" || error.type === "validation_error") {
              setMessage(error.message);
            } else if (error.code === "payment_intent_unexpected_state") {
              setMessage("Sorry, an error occured. Please check if your order has been placed at 'thetradinggallery.ca/my-account/recent-orders'. If your card has been charged but is not under the orders, please contact hello@thetradinggallery with your payment ID: " + error.payment_intent.id);
            } else {
              setMessage("An unexpected error occured. Please try again.");
            }
          } else {
            dispatch(generateReceipt(result.paymentIntent.id, sameAsShipping ? paymentInfo : billingInfo)).then((res) => {
              window.location.href = "receipt/" + res;
            });
          }
        });

        setIsLoading(false);
    };

    return (
        <div className="vertical-md paymentForms paymentForm">
            <span className="titleText">CONTACT INFORMATION</span>
            <div className="section">
              <div className="shipMethodSelect full-width" >
                  <div className="title">Contact</div>
                  <div className="content">{paymentInfo?.email ?? user?.user?.email}</div>
                  <div className="change" onClick={() => props.setStage(0)}>Change</div>
            </div>
              
              {props.shipOrder && (
                  <div className="shipMethodSelect full-width" >
                      <div className="title">Ship to</div>
                      <div className="content">
                          {paymentInfo?.line2 ? paymentInfo?.line2 + " " : ""}
                          {paymentInfo?.line1}
                          {" "}
                          {paymentInfo?.city}
                          {" "}
                          {paymentInfo?.state}
                          {" "}
                          {paymentInfo?.postal_code}
                          {", Canada"}
                          {paymentInfo?.phoneNum ? ", " + paymentInfo?.phoneNum: ""}
                          
                          </div>
                      <div className="change" onClick={() => props.setStage(0)}>Change</div>
                  </div>
              )}

              <div className="shipMethodSelect full-width" >
                  <div className="title">Delivery Method</div>
                  <div className="content">{props.shipOrder ? "Ship" : "Pick up"}</div>
                  <div className="change" onClick={() => props.setStage(0)}>Change</div>
              </div>
          </div>

            <Form id="payment-form" onSubmit={handleSubmit}>

              <span className="titleText">PAYMENT</span>
              <div className="subtitleText">All transactions are secured with Stripe payment.</div>
              <div className="section">
                <PaymentElement id="payment-element" />
              </div>

              <span className="titleText">BILLING ADDRESS</span>
              <div className="subtitleText">Enter the address that matches your card information.</div>
              <div className="section">

              <Row className="mb-3">
                <Form.Group id="first-name" as={Col}>
                  <Form.Control type="text" placeholder="First Name *" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.firstName : billingInfo?.firstName || ""} onChange={e => setBillingInfo({...billingInfo, firstName: e.target.value})} required />
                </Form.Group>
                <Form.Group id="last-name" as={Col}>
                  <Form.Control type="text" placeholder="Last Name *" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.lastName : billingInfo?.lastName || ""} onChange={e => setBillingInfo({...billingInfo, lastName: e.target.value})} required />
                </Form.Group>
              </Row>

              <Form.Group id="line1" className="mb-3">
                <Form.Control type="text" placeholder="Street Address *" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.line1 : billingInfo?.line1 || ""} onChange={e => setBillingInfo({...billingInfo, line1: e.target.value})} required />
              </Form.Group>

              <Form.Group id="aptAddress" className="mb-3">
                <Form.Control type="text" placeholder="Apt #, Floor, etc. (optional)" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.line2 : billingInfo?.line2 || ""} onChange={e => setBillingInfo({...billingInfo, line2: e.target.value})} />
              </Form.Group>

              <Form.Group id="city" className="mb-3">
                <Form.Control type="text" placeholder="City *" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.city : billingInfo?.city|| ""} onChange={e => setBillingInfo({...billingInfo, city: e.target.value})} required />
              </Form.Group>

              <Row id="addressDetail" className="mb-3">
                <Form.Group id="country" as={Col}>
                  <Form.Label>
                    Country
                    <Form.Control type="text" value="CANADA" disabled={true} />
                  </Form.Label>
                </Form.Group>
                <Form.Group id="state" as={Col}>
                  <Form.Label>
                    Province *
                    <select className="form-control" id="state" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.state : billingInfo?.state || CANADA_PROVINCES[0] || ""} onChange={e => setBillingInfo({...billingInfo, state: e.target.value})}>
                      {CANADA_PROVINCES.map((state, index) => 
                        <option key={index} value={state.id}>{state.name}</option>)}
                    </select>
                  </Form.Label>
                </Form.Group>
                <Form.Group id="postal" as={Col}>
                  <Form.Label>
                    Postal Code *
                    <Form.Control type="text" placeholder="XXX XXX" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.postal_code : billingInfo?.postal_code || ""} onChange={e => setBillingInfo({...billingInfo, postal_code: e.target.value})} required />
                  </Form.Label>
                </Form.Group>
              </Row>


              {props.shipOrder && (
                <Form.Group id="billingAddress">
                  <Form.Label className="sameAsShipping full-width" onClick={() => {setSameAsShipping(!sameAsShipping)}}>
                      <Form.Check className="check" checked={sameAsShipping} readOnly/> 
                      Same as my shipping address
                  </Form.Label>
                </Form.Group>
              )}
            </div>

              <CustomButton id="submit" disabled={isLoading || !stripe || !elements} buttonStyle="outline" buttonDetail="default-size" marginTop="50px">
                <span id="button-text">
                  {isLoading ? <LoadingBox text="Processing" /> : "Pay now"}
                </span>
              </CustomButton>
              {message && <div id="payment-message">{message}</div>}
            </Form>
        </div>        
    );
}