import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PaymentForm from "./Forms/PaymentForm";
import ShippingForm from './Forms/ShippingForm';
import InformationForm from './Forms/InformationForm';
import { CartsPageRoute } from '../../utils/routes';
import CheckoutCard from '../../components/Cards/CheckoutCard';

import '../../utils/globalStyles.css';
import './PaymentPages.css';

// eslint-disable-next-line no-undef
const stripePromise = loadStripe(process.env.REACT_APP_PK_KEY);

export default function CheckoutPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { cart, payments } = useSelector((state) => state);

    const [stage, setStage] = useState(0);
    const [paymentInfo, setPaymentInfo] = useState(undefined);
    const [shipOrder, setShipOrder] = useState(true);
    const [checkedTerms, setCheckedTerms] = useState(false);

    const clientSecret = payments?.clientSecret;


    const appearance = {
        theme: 'stripe',
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="marginTop paddingHorizontal checkoutPage">
            <span className="stageText" onClick={() => history.push(CartsPageRoute)}>Cart</span>
            <i className="fas fa-chevron-right" />
            <span className={stage === 0 ? "stageText selected" : "stageText"} onClick={() => setStage(0)}>Information</span>
            <i className="fas fa-chevron-right" />
            <span className={stage === 1 ? "stageText selected" : "stageText"} onClick={() => setStage(paymentInfo ? 1 : stage)}>Shipping</span>
            <i className="fas fa-chevron-right" />
            <span className={stage === 2 ? "stageText selected" : "stageText"}>Payment</span>
            <Row>
                <Col md={8}>
                    {stage === 1
                        ? <ShippingForm paymentInfo={paymentInfo} setPaymentInfo={setPaymentInfo} shipOrder={shipOrder} stage={stage} setStage={setStage}/>
                        : stage === 2
                            ? (clientSecret && (
                                <Elements options={options} stripe={stripePromise}>
                                    <PaymentForm />
                                </Elements>
                            ))
                            : <InformationForm 
                                paymentInfo={paymentInfo} 
                                setPaymentInfo={setPaymentInfo} 
                                shipOrder={shipOrder} 
                                setShipOrder={setShipOrder} 
                                stage={stage} 
                                setStage={setStage}
                                checkedTerms={checkedTerms}
                                setCheckedTerms={setCheckedTerms}
                                />}
                </Col>
                <Col md={4} className="carts">
                    <div className="items">
                        {cart?.items?.map((product, index) => (
                            <div key={index}>
                                {!product.unselected && <CheckoutCard key={index} canModify={false} product={product} last={index == cart?.items?.length - 1}/>}
                            </div>))}
                    </div>
                    <div className="prices">
                        <div className="subpriceText">{"Subtotal"} </div>
                        <div className="subpriceText">{"$" + cart?.total}</div>
                    </div>
                    <div className="prices">
                        <div className="subpriceText">{"Shipping"} </div>
                        <div className="subpriceText">{"TBD"}</div>
                    </div>
                    <div className="prices">
                        <div className="subpriceText">{"Taxes"} </div>
                        <div className="subpriceText">{"TBD"}</div>
                    </div>
                    <div className="prices totalPrice">
                        <div className="totalPriceText">{"Total"} </div>
                        <div className="totalPriceText">{"CAD $" + cart?.total}</div>
                    </div>
                </Col>
            </Row>
        </div>        
    );
}
