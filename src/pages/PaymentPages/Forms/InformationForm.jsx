import React, { useEffect, useRef, useState } from 'react';
import { Col, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../../components/Buttons/CustomButton';
import { ADDRESS_GOOGLE_MAP, ADDRESS_PICKUP, ADDRESS_SECTION_1, ADDRESS_SECTION_2, IN_STORE_PICKUP, IN_STORE_PICKUP_CONTENT_1, IN_STORE_PICKUP_CONTENT_2, PICKUP, PICKUP_SECTION, TTG_ADDRESS } from "../../../utils/contents";
import { getTax } from '../../../utils/Helper';
import { CANADA_PROVINCES } from '../../../utils/provinces';

import './PaymentForms.css';

export default function InformationForm(props) {
    const dispatch = useDispatch();
    const { cart, user } = useSelector((state) => state);

    const [paymentInfo, setPaymentInfo] = useState(props.paymentInfo);
    const [shipOrder, setShipOrder] = useState(props.shipOrder);

    async function handleSubmit(e) {
        e.preventDefault();

        props.setPaymentInfo(paymentInfo);
        props.setShipOrder(shipOrder);

        props.setEstTax(getTax(cart?.total, paymentInfo?.state));

        props.setStage(props.stage + 1);
    }

    
    return (
        <div className="vertical-md paymentForms">

            <Form onSubmit={handleSubmit}>
                <span className="titleText">CONTACT INFORMATION</span>
                <div className="section">
                    <Form.Group id="email" className="mb-3">
                        <Form.Label className="full-width">
                            Email
                            <Form.Control type="email" placeholder={user?.user?.email ?? "Email"} value={paymentInfo?.email || ""} onChange={e => setPaymentInfo({...paymentInfo, email: e.target.value})} />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group id="phone">
                        <Form.Label className="full-width">
                            Phone Number *
                            <Form.Control type="tel" pattern="[0-9]{3}(-)*[0-9]{4}(-)*[0-9]{3}" placeholder="Phone Number" value={paymentInfo?.phoneNum || ""} onChange={e => setPaymentInfo({...paymentInfo, phoneNum: e.target.value})} required/>
                        </Form.Label>
                    </Form.Group>
                </div>

                <span className="titleText">DELIVERY METHOD</span>
                <div className="section">
                    <Row>
                        <Form.Group id="ship" as={Col} className={shipOrder ? "shipMethodSelect selected" : "shipMethodSelect"} onClick={() => setShipOrder(true)}>
                            <Form.Check className="check" type="radio" checked={shipOrder} defaultChecked readOnly /> 
                            <i className="fas fa-truck" />
                            Ship
                        </Form.Group>
                        <Form.Group id="pickup" as={Col} className={shipOrder ? "shipMethodSelect" : "shipMethodSelect selected"} onClick={() => { setShipOrder(false); setPaymentInfo({...paymentInfo, state: "BC"})}}>
                            <Form.Check className="check" type="radio" checked={!shipOrder} readOnly />
                            <i className="fas fa-store" />
                            Pick Up
                        </Form.Group>
                    </Row>
                </div>

                <span className="titleText">{shipOrder ? "SHIPPING ADDRESS" : "PICKUP DETAILS"}</span>
                {shipOrder
                    ? (<div className="section">

                        <Row className="mb-3">
                            <Form.Group id="first-name" as={Col}>
                                <Form.Control type="text" placeholder="First Name *" value={paymentInfo?.firstName || ""} onChange={e => setPaymentInfo({...paymentInfo, firstName: e.target.value})} required />
                            </Form.Group>
                            <Form.Group id="last-name" as={Col}>
                            <Form.Control type="text" placeholder="Last Name *" value={paymentInfo?.lastName || ""} onChange={e => setPaymentInfo({...paymentInfo, lastName: e.target.value})} required />
                            </Form.Group>
                        </Row>
                        
                        <Form.Group id="line1" className="mb-3">
                            <Form.Control type="text" placeholder="Street Address *" value={paymentInfo?.line1 || ""} onChange={e => setPaymentInfo({...paymentInfo, line1: e.target.value})} required />
                        </Form.Group>

                        <Form.Group id="aptAddress" className="mb-3">
                            <Form.Control type="text" placeholder="Apt #, Floor, etc. (optional)" value={paymentInfo?.line2 || ""} onChange={e => setPaymentInfo({...paymentInfo, line2: e.target.value})} />
                        </Form.Group>

                        <Form.Group id="city" className="mb-3">
                            <Form.Control type="text" placeholder="City *" value={paymentInfo?.city || ""} onChange={e => setPaymentInfo({...paymentInfo, city: e.target.value})} required />
                        </Form.Group>


                        <Row id="addressDetail">
                            <Form.Group id="country" as={Col}>
                               <Form.Label>
                                    Country
                                    <Form.Control type="text" value="CANADA" disabled={true} />
                                </Form.Label>
                            </Form.Group>

                            <Form.Group id="state" as={Col}>
                                <Form.Label>
                                    Province *
                                    <Form.Select className="form-control" id="state" value={paymentInfo?.state || CANADA_PROVINCES[0] || ""} onChange={e => setPaymentInfo({...paymentInfo, state: e.target.value})}>
                                        {CANADA_PROVINCES.map((state, index) => 
                                            <option key={index} value={state.id}>{state.name}</option>)}
                                    </Form.Select>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group id="postal" as={Col}>
                               <Form.Label>
                                    Postal Code *
                                    <Form.Control type="text" placeholder="XXX XXX" value={paymentInfo?.postal_code || ""} onChange={e => setPaymentInfo({...paymentInfo, postal_code: e.target.value})} required />
                                </Form.Label>
                            </Form.Group>
                        </Row>
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
                        

                        <div className="body consent"><Form.Check checked={props.checkedTerms} onChange={() => props.setCheckedTerms(!props.checkedTerms)} required/><div className="text">By checking this box, I agree that I have read and agree to the above statement.</div></div>

                    </div>)}

                <CustomButton disabled={false} type="submit" buttonStyle="outline" buttonDetail="default-size" marginTop="4px" marginBottom="10%">
                    CONTINUE
                </CustomButton>
            </Form>
        </div>        
    );
}
