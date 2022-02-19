import React, { useEffect, useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";
import CustomButton from '../../../components/Buttons/CustomButton';

import LoadingBox from "../../../components/Utils/LoadingBox";
import { useSelector } from 'react-redux';

import './PaymentForms.css';
import { Col, Form } from 'react-bootstrap';
import { CANADA_PROVINCES } from '../../../utils/provinces';


export default function PaymentForm(props) {
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
    
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: "http://localhost:3000",
          },
        });
    
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message);
        } else {
          setMessage("An unexpected error occured.");
        }
    
        setIsLoading(false);
    };

    return (
        <div className="marginTop paymentForms paymentForm">
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
                          {paymentInfo?.optionalAddress ? paymentInfo?.optionalAddress + " " : ""}
                          {paymentInfo?.streetAddress}
                          {" "}
                          {paymentInfo?.city}
                          {" "}
                          {paymentInfo?.province}
                          {" "}
                          {paymentInfo?.postalCode}
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

              <Form.Group id="name">
                <Form.Row>
                  <Col>
                    <Form.Control type="text" placeholder="First Name *" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.firstName : billingInfo?.firstName || ""} onChange={e => setBillingInfo({...billingInfo, firstName: e.target.value})} required />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="Last Name *" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.lastName : billingInfo?.lastName || ""} onChange={e => setBillingInfo({...billingInfo, lastName: e.target.value})} required />
                  </Col>
                </Form.Row>
               </Form.Group>
              <Form.Group id="streetAddress">
                <Form.Control type="text" placeholder="Street Address *" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.streetAddress : billingInfo?.streetAddress || ""} onChange={e => setBillingInfo({...billingInfo, streetAddress: e.target.value})} required />
              </Form.Group>

              <Form.Group id="aptAddress">
                <Form.Control type="text" placeholder="Apt #, Floor, etc. (optional)" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.optionalAddress : billingInfo?.optionalAddress || ""} onChange={e => setBillingInfo({...billingInfo, optionalAddress: e.target.value})} />
              </Form.Group>

              <Form.Group id="city">
                <Form.Control type="text" placeholder="City *" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.city : billingInfo?.city|| ""} onChange={e => setBillingInfo({...billingInfo, city: e.target.value})} required />
              </Form.Group>

              <Form.Row id="addressDetail">
                <Col>
                  <Form.Group id="country">
                    <Form.Label>
                      Country
                      <Form.Control type="text" value="CANADA" disabled={true} />
                    </Form.Label>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group id="province">
                    <Form.Label>
                      Province *
                      <select className="form-control" id="province" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.province : billingInfo?.province || ""} onChange={e => setBillingInfo({...billingInfo, province: e.target.value})}>
                        {CANADA_PROVINCES.map((province, index) => 
                          <option key={index} value={province.id}>{province.name}</option>)}
                      </select>
                    </Form.Label>
                  </Form.Group>
                </Col>
                <Form.Group id="postal">
                  <Form.Label>
                    Postal Code *
                    <Form.Control type="text" placeholder="XXX XXX" disabled={sameAsShipping} value={sameAsShipping ? paymentInfo?.postalCode : billingInfo?.postalCode || ""} onChange={e => setBillingInfo({...billingInfo, postalCode: e.target.value})} required />
                  </Form.Label>
                </Form.Group>
              </Form.Row>

              {props.shipOrder && (
                <Form.Group id="billingAddress">
                  <Form.Label className="sameAsShipping full-width" onClick={() => {setSameAsShipping(!sameAsShipping)}}>
                      <Form.Check className="check" checked={sameAsShipping}/> 
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