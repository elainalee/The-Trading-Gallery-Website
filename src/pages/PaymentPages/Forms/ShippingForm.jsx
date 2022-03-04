import React, { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../../components/Buttons/CustomButton';
import LoadingBox from '../../../components/Utils/LoadingBox';
import { getPaymentIntent } from '../../../reducers/paymentReducer';
import { ERROR, SUCCESS } from '../../../utils/constants';
import { ADDRESS_GOOGLE_MAP, ADDRESS_SECTION_1, ADDRESS_SECTION_2, IN_STORE_PICKUP_CONTENT_1, IN_STORE_PICKUP_CONTENT_2, PICKUP_SECTION, TTG_ADDRESS } from '../../../utils/contents';

import './PaymentForms.css';

export default function ShippingForm(props) {
    const { user, payments } = useSelector((state) => state);
    const dispatch = useDispatch();

    const paymentInfo = props.paymentInfo;
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setErrMsg("");
        setLoading(true);
        dispatch(getPaymentIntent(paymentInfo, props.shipOrder ? props.deliveryChoice : undefined)).then((res) => {
            setLoading(false);
            if (res === SUCCESS) {
                props.setStage(props.stage + 1);
            } else {
                setErrMsg(ERROR + ": " + res);
            }
        });
    }
    
    return (
        <div className="marginTop paymentForms shippingForm">
            <Form onSubmit={handleSubmit}>
                <span className="titleText">CONTACT INFORMATION</span>
                <div className="section">
                    <div className="shipMethodSelect full-width" >
                        <div className="title">Contact</div>
                        <div className="content">{paymentInfo?.email ?? user?.user?.email}</div>
                        <div className="change" onClick={() => props.setStage(props.stage-1)}>Change</div>
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
                            <div className="change" onClick={() => props.setStage(props.stage-1)}>Change</div>
                        </div>
                    )}

                    <div className="shipMethodSelect full-width" >
                        <div className="title">Delivery Method</div>
                        <div className="content">{props.shipOrder ? "Ship" : "Pick up"}</div>
                        <div className="change" onClick={() => props.setStage(props.stage-1)}>Change</div>
                    </div>
                </div>

                
                <span className="titleText">{props.shipOrder ? "DELIVERY METHOD" : "PICKUP DETAILS"}</span>
                {props.shipOrder
                    ? (<div className="section">
                            <Form.Group id="shipMethod">
                                {payments?.shippingOptions?.map((option, index) => (
                                    <Form.Label key={index} className="shipMethodSelect full-width" onClick={() => props.setDeliveryChoice(index)}>
                                        <Form.Check className="check" type="radio" checked={props.deliveryChoice === index} readOnly/> 
                                        
                                        <div className="content">{option.name}</div>
                                        <div className="price">{option.rate ? ("$" + option.rate) : ""}</div>
                                    </Form.Label>
                                ))}
                        </Form.Group>
                    </div>)
                    : (<div className="pickupLocation">
                            <div className="section">             
                                <div className="title">PICKUP POLICY</div>
                                <div className="body">{IN_STORE_PICKUP_CONTENT_1}</div>
                                <div className="body">{IN_STORE_PICKUP_CONTENT_2}</div>
                            </div>

                            <div className="section">             
                                <div className="title">ADDRESS</div>
                                <div className="body">{ADDRESS_SECTION_1}</div>
                                <div className="body">{ADDRESS_SECTION_2}</div>
                                <div className="title address"><a href={ADDRESS_GOOGLE_MAP} rel="noreferrer" target="_blank" className="underline link">{TTG_ADDRESS}</a></div>
                            </div>

                            <div className="section">             
                                <div className="title">ON PICK-UP</div>
                                <div className="body">{PICKUP_SECTION}</div>
                            </div>
                            <div className="body consent">*By proceeding, you agree that you have read and agree to the above statement.</div>
                        </div>
                    )}
                
                {/* Show any error or success messages */}
                {errMsg && <div className="failedMsg">{errMsg}</div>}
                <CustomButton type="submit" disabled={loading} buttonStyle="primary" buttonDetail="default-size" marginTop="15px" marginBottom="10%">
                    <span id="button-text">
                        {loading ? <LoadingBox text="Processing" /> : "CONTINUE TO PAYMENT"}
                    </span>
                </CustomButton>

            </Form>
        </div>        
    );
}
