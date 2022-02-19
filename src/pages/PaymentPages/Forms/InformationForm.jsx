import React, { useEffect, useRef, useState } from 'react';
import { Col, Dropdown, DropdownButton, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CustomButton from '../../../components/Buttons/CustomButton';
import { CANADA_PROVINCES } from '../../../utils/provinces';

import { ADDRESS_GOOGLE_MAP, ADDRESS_PICKUP, ADDRESS_SECTION_1, ADDRESS_SECTION_2, IN_STORE_PICKUP, IN_STORE_PICKUP_CONTENT_1, IN_STORE_PICKUP_CONTENT_2, PICKUP, PICKUP_SECTION, TGG_ADDRESS } from "../../../utils/contents";

import './PaymentForms.css';

export default function InformationForm(props) {
    const { user } = useSelector((state) => state);

    const [paymentInfo, setPaymentInfo] = useState(props.paymentInfo);
    const [shipOrder, setShipOrder] = useState(props.shipOrder);

    async function handleSubmit(e) {
        e.preventDefault();

        props.setPaymentInfo(paymentInfo);
        props.setShipOrder(shipOrder);

        props.setStage(props.stage + 1);
    }

    
    return (
        <div className="marginTop paymentForms">

            <Form onSubmit={handleSubmit}>
                <span className="titleText">CONTACT INFORMATION</span>
                <div className="section">
                    <Form.Group id="contactInfo">
                        <Form.Group id="email">
                            <Form.Label className="full-width">
                                Email
                                <Form.Control type="email" placeholder={user?.user?.email ?? "Email"} value={paymentInfo?.email || ""} onChange={e => setPaymentInfo({...paymentInfo, email: e.target.value})} />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group id="phone">
                            <Form.Label className="full-width">
                                Phone Number
                                <Form.Control type="tel" pattern="[0-9]{3}(-)*[0-9]{4}(-)*[0-9]{3}" placeholder="Phone Number" value={paymentInfo?.phoneNum || ""} onChange={e => setPaymentInfo({...paymentInfo, phoneNum: e.target.value})} required/>
                            </Form.Label>
                        </Form.Group>
                    </Form.Group>
                </div>

                <span className="titleText">DELIVERY METHOD</span>
                <div className="section">
                    <Form.Group id="shipMethod">
                        <Form.Row>
                            <Col className={shipOrder ? "shipMethodSelect selected" : "shipMethodSelect"} onClick={() => setShipOrder(true)}>
                                <Form.Check className="check" type="radio" checked={shipOrder} readOnly /> 
                                <i className="fas fa-truck" />
                                Ship
                            </Col>
                            <Col className={shipOrder ? "shipMethodSelect" : "shipMethodSelect selected"} onClick={() => setShipOrder(false)}>
                                <Form.Check className="check" type="radio" checked={!shipOrder} readOnly />
                                <i className="fas fa-store" />
                                Pick Up
                            </Col>
                        </Form.Row>
                    </Form.Group>
                </div>


                <span className="titleText">{shipOrder ? "SHIPPING ADDRESS" : "PICKUP DETAILS"}</span>
                {shipOrder
                    ? (<div className="section">
                        <Form.Group id="name">
                            <Form.Row>
                                <Col>
                                    <Form.Control type="text" placeholder="First Name *" value={paymentInfo?.firstName || ""} onChange={e => setPaymentInfo({...paymentInfo, firstName: e.target.value})} required />
                                </Col>
                                <Col>
                                    <Form.Control type="text" placeholder="Last Name *" value={paymentInfo?.lastName || ""} onChange={e => setPaymentInfo({...paymentInfo, lastName: e.target.value})} required />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        
                        <Form.Group id="streetAddress">
                            <Form.Control type="text" placeholder="Street Address *" value={paymentInfo?.streetAddress || ""} onChange={e => setPaymentInfo({...paymentInfo, streetAddress: e.target.value})} required />
                        </Form.Group>

                        <Form.Group id="aptAddress">
                            <Form.Control type="text" placeholder="Apt #, Floor, etc. (optional)" value={paymentInfo?.optionalAddress || ""} onChange={e => setPaymentInfo({...paymentInfo, optionalAddress: e.target.value})} />
                        </Form.Group>

                        <Form.Group id="city">
                            <Form.Control type="text" placeholder="City *" value={paymentInfo?.city || ""} onChange={e => setPaymentInfo({...paymentInfo, city: e.target.value})} required />
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
                                        <select className="form-control" id="province" value={paymentInfo?.province || ""} onChange={e => setPaymentInfo({...paymentInfo, province: e.target.value})}>
                                            {CANADA_PROVINCES.map((province, index) => 
                                                <option key={index} value={province.id}>{province.name}</option>)}
                                        </select>
                                    </Form.Label>
                                </Form.Group>
                            </Col>
                            <Form.Group id="postal">
                                <Form.Label>
                                    Postal Code *
                                    <Form.Control type="text" placeholder="XXX XXX" value={paymentInfo?.postalCode || ""} onChange={e => setPaymentInfo({...paymentInfo, postalCode: e.target.value})} required />
                                </Form.Label>
                            </Form.Group>
                        </Form.Row>
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
                            <div className="title address"><a href={ADDRESS_GOOGLE_MAP} rel="noreferrer" target="_blank" className="underline link">{TGG_ADDRESS}</a></div>
                        </div>

                        <div className="section">             
                            <div className="title">ON PICK-UP</div>
                            <div className="body">{PICKUP_SECTION}</div>
                        </div>
                        

                        <div className="body consent"><Form.Check checked={props.checkedTerms} onClick={() => props.setCheckedTerms(!props.checkedTerms)}/>By checking this box, I agree that I have read and agree to the above statement.</div>

                    </div>)}

                <CustomButton disabled={false} type="submit" buttonStyle="outline" buttonDetail="default-size" marginTop="4px">
                    CONTINUE
                </CustomButton>
            </Form>
        </div>        
    );
}
