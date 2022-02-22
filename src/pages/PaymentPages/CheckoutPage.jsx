import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Prompt, useHistory } from 'react-router-dom';
import PaymentForm from "./Forms/PaymentForm";
import ShippingForm from './Forms/ShippingForm';
import InformationForm from './Forms/InformationForm';
import { CartsPageRoute } from '../../utils/routes';
import CheckoutCard from '../../components/Cards/CheckoutCard';

import '../../utils/globalStyles.css';
import './PaymentPages.css';
import { getShippingOptions } from '../../reducers/paymentReducer';
import { getTax } from '../../utils/Helper';

// eslint-disable-next-line no-undef
const stripePromise = loadStripe(process.env.REACT_APP_PK_KEY);

export default function CheckoutPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { cart, payments } = useSelector((state) => state);

    const [stage, setStage] = useState(0);
    const [paymentInfo, setPaymentInfo] = useState(undefined);
    const [billingInfo, setBillingInfo] = useState(undefined);
    const [shipOrder, setShipOrder] = useState(true);
    const [checkedTerms, setCheckedTerms] = useState(false);
    const [deliveryChoice, setDeliveryChoice] = useState(0);
    const [estTax, setEstTax] = useState(undefined);
    const clientSecret = payments?.clientSecret;


    useEffect(() => {
        dispatch(getShippingOptions());
    }, [cart?.items]);

    const alertUser = (e) => {     
        e.preventDefault();
        e.returnValue = "";
    };

    useEffect(() => {
        window.addEventListener("beforeunload", alertUser);
        return () => {
          window.removeEventListener("beforeunload", alertUser);
        };
      }, []);
      

    const appearance = {
        theme: 'stripe',
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="marginTop paddingHorizontal checkoutPage">
            <Prompt
                when={paymentInfo !== undefined}
                message={"Changes you made may not be saved."}
            />
            <span className="stageText" onClick={() => history.push(CartsPageRoute)}>Cart</span>
            <i className="fas fa-chevron-right" />
            <span className={stage === 0 ? "stageText selected" : "stageText"} onClick={() => setStage(0)}>Information</span>
            <i className="fas fa-chevron-right" />
            <span className={stage === 1 ? "stageText selected" : "stageText"} onClick={() => setStage((paymentInfo && payments.shippingOptions && (shipOrder || checkedTerms)) ? 1 : stage)}>Shipping</span>
            <i className="fas fa-chevron-right" />
            <span className={stage === 2 ? "stageText selected" : "stageText"}>Payment</span>
            <Row fluid={true}>
                <Col sm={6} md={8} className="order-last order-sm-first">
                    {stage === 1
                        ? <ShippingForm 
                            paymentInfo={paymentInfo} 
                            setPaymentInfo={setPaymentInfo} 
                            shipOrder={shipOrder}
                            deliveryChoice={deliveryChoice}
                            setDeliveryChoice={setDeliveryChoice}
                            stage={stage} 
                            setStage={setStage}/>
                        : stage === 2
                            ? (clientSecret && (
                                <Elements options={options} stripe={stripePromise}>
                                    <PaymentForm 
                                        stage={stage} 
                                        setStage={setStage}

                                        shipOrder={shipOrder}
                                        paymentInfo={paymentInfo} 
                                        setPaymentInfo={setPaymentInfo} 
                                        billingInfo={billingInfo} 
                                        setBillingInfo={setBillingInfo} />
                                </Elements>
                            ))
                            : <InformationForm 
                                stage={stage} 
                                setStage={setStage}

                                paymentInfo={paymentInfo} 
                                setPaymentInfo={setPaymentInfo} 
                                shipOrder={shipOrder}
                                setShipOrder={setShipOrder}
                                estTax={estTax}
                                setEstTax={setEstTax}
                                checkedTerms={checkedTerms}
                                setCheckedTerms={setCheckedTerms}
                                />}
                </Col>
                <Col sm={6} md={4} className="carts">
                    <div className="items">
                        {cart?.items?.map((product, index) => (
                            <div key={index}>
                                {!product.unselected && <CheckoutCard key={index} canModify={false} product={product} last={index == cart?.items?.length - 1}/>}
                            </div>))}
                    </div>
                    <div className="prices">
                        <div className="subpriceText">{"Subtotal"} </div>
                        <div className="subpriceText">{"$" + (stage === 2 ? payments?.subtotalAmount : cart?.total)}</div>
                    </div>
                    {shipOrder && (
                        <div className="prices">
                            <div className="subpriceText">{"Shipping"} </div>
                            <div className="subpriceText">
                                {stage === 2
                                    ? "$" + payments?.shippingAmount
                                    : deliveryChoice === undefined 
                                        ? "TBD"
                                        : payments?.shippingOptions?.[deliveryChoice]?.rate === 0
                                            ? "FREE"
                                            : "$" + payments?.shippingOptions?.[deliveryChoice]?.rate}
                            </div>
                        </div>
                    )}
                    
                    <div className="prices">
                        <div className="subpriceText">{"Taxes"} </div>
                        <div className="subpriceText">
                            {stage === 2
                                ? "$" + payments?.taxAmount
                                : estTax
                                    ? "$" + estTax
                                    : "TBD"}
                        </div>
                    </div>
                    <div className="prices totalPrice">
                        <div className="totalPriceText">{"Total"} </div>
                        <div className="totalPriceText">{"CAD $" + 
                            (stage === 2
                                ? payments?.totalAmount
                                : cart?.total + (estTax ?? 0) + (shipOrder ? payments?.shippingOptions?.[deliveryChoice]?.rate : 0))?.toFixed(2)}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>        
    );
}
