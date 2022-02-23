import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReceiptDetail } from '../../reducers/paymentReducer';
import { formatAddress } from '../../utils/Helper';

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
            Payment was successful!
            <div className="section">
                AMOUNT:
                <div className="prices">
                    <div className="subpriceText">{"Subtotal"} </div>
                    <div className="subpriceText">{"$" + receiptDetail?.amount?.subtotal}</div>
                </div>
                <div className="prices">
                    <div className="subpriceText">{"Shipping"} </div>
                    <div className="subpriceText">{"$" + receiptDetail?.amount?.shipping}</div>
                </div>
                <div className="prices">
                    <div className="subpriceText">{"Tax"} </div>
                    <div className="subpriceText">{"$" + receiptDetail?.amount?.tax}</div>
                </div>
                <div className="prices">
                    <div className="subpriceText">{"Total"} </div>
                    <div className="subpriceText">{"$" + receiptDetail?.amount?.total}</div>
                </div>
            </div>

            <div className="section">
                BILLING ADDRESS:
                <div className="prices">
                    <div className="subpriceText">{receiptDetail?.billing_details?.name}</div>
                    <div className="subpriceText">{receiptDetail?.billing_details?.email}</div>
                    <div className="subpriceText">{receiptDetail?.billing_details?.phone}</div>

                    <div className="subpriceText">{formatAddress(receiptDetail?.billing_details?.address)}</div>
                </div>
            </div>

            {receiptDetail?.shippingChoice && (
                <div className="section">
                    SHIPPING ADDRESS:
                    <div className="prices">
                        <div className="subpriceText">{formatAddress(receiptDetail?.shippingAddress)}</div>
                    </div>
                </div>
            )}
            

            <div className="section">
                PURCHASED ITEMS:
                {receiptDetail?.products?.map((product, index) => (
                    <div key={index}>
                        {product.productID}
                        {"quantity: " + product.quantity}
                    </div>
                ))}
            </div>

            <div className="section">
                PICKUP/SHIPPING:
                {receiptDetail?.shippingChoice
                    ? receiptDetail?.processed ? receiptDetail?.received ? "RECEIVED" : "SHIPPED" : "PROCESSING"
                    : receiptDetail?.processed ? receiptDetail?.received ? "PICKED UP" : "READY FOR PICKUP" : "PROCESSING"}
            </div>

        </div>        
    );
}
