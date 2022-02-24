import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CartCard from '../../components/Cards/CartCard';
import CheckoutCard from '../../components/Cards/CheckoutCard';
import { getReceiptDetail } from '../../reducers/paymentReducer';
import { PICKED_UP, PROCESSING, READY_FOR_PICKUP, RECEIVED, SHIPPED } from '../../utils/constants';
import { formatAddress, formatDateToClient } from '../../utils/Helper';

import './PaymentPages.css';

export default function ReceiptPage(props) {
    const dispatch = useDispatch();
    const receiptId = props.match.params.receiptId;

    const [receiptDetail, setReceiptDetail] = useState(undefined);

    console.log("receiptDetail" , receiptDetail);

    useEffect(() => {
        dispatch(getReceiptDetail(receiptId)).then((res) => setReceiptDetail(res));
    }, [receiptId]);


    return (
        <div className="marginTop receiptPage">
            <div className="main-title">Order Details</div>

            <Row className="section">
                <Col>
                    <Row className="line">
                        <Col md={2} className="title">Order #</Col>
                        <Col className="detail">{receiptDetail?._id}</Col>
                    </Row>
                    <Row className="line">
                        <Col md={2} className="title">Order Date</Col>
                        <Col className="detail">{formatDateToClient(receiptDetail?.createdAt)}</Col>
                    </Row>
                    <Row className="line">
                        <Col md={2} className="title">Status</Col>
                        <Col className={`detail statusText ${receiptDetail?.paid ? receiptDetail?.processed ? "processed" : receiptDetail?.received ? "received" : "processing" : "unpaid"}`}>
                            {receiptDetail?.paid
                                ? receiptDetail?.shippingChoice
                                    ? receiptDetail?.processed ? receiptDetail?.received ? RECEIVED : SHIPPED : PROCESSING
                                    : receiptDetail?.processed ? receiptDetail?.received ? PICKED_UP : READY_FOR_PICKUP : PROCESSING
                                : "NOT PAID"}
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="section">
                <Col>
                    <Row className="line">
                        <Col md={4} className="title">Delivery Method</Col>
                        <Col md={6} className="detail">{receiptDetail?.shipping_details?.carrier}</Col>
                    </Row>

                    <Row className="line">
                        <Col md={4} className="title">{receiptDetail?.shippingChoice ? "Ship To" : "Pick Up Location"}</Col>
                        <Col md={6} className="detail">
                            <div className="">{formatAddress(receiptDetail?.shipping_details?.address)}</div>
                            <div className="">{receiptDetail?.billing_details?.phone}</div> 
                        </Col>
                    </Row>

                    
                </Col>
                <Col>
                    <Row className="line">
                        <Col md={4} className="title">Billing Info</Col>
                        <Col md={6} className="detail">
                            <div>{receiptDetail?.billing_details?.name}</div>
                            <div className="">{formatAddress(receiptDetail?.billing_details?.address)}</div>
                            <div className="">{receiptDetail?.billing_details?.phone}</div>
                            <div className="">{receiptDetail?.billing_details?.email}</div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <div className="section items">
                <CheckoutCard title={true} showQuantity={true} />
                {receiptDetail?.products?.map((product, index) => (
                    <div key={index}>
                        <CheckoutCard product={product} showQuantity={true}/>
                    </div>
                ))}
            </div>

            <div className="section priceSummary">
                <div className="priceline">
                    <div className="title">Subtotal</div>
                    <div className="detail">{"$" + receiptDetail?.amount?.subtotal}</div>
                </div>
                <div className="priceline">
                    <div className="title">Shipping</div>
                    <div className="detail">{"$" + receiptDetail?.amount?.shipping}</div>
                </div>
                <div className="priceline">
                    <div className="title">Taxes</div>
                    <div className="detail">{"$" + receiptDetail?.amount?.tax}</div>
                </div>

                <div className="priceline orderTotal">
                    <div className="title">Order Total</div>
                    <div className="detail">{"$" + receiptDetail?.amount?.total}</div>
                </div>
            </div>
        </div>        
    );
}
