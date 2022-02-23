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
            <div>
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

            <div>
                BILLING ADDRESS:
                <div className="prices">
                    <div className="subpriceText">{formatAddress(receiptDetail?.billingAddress)}</div>
                </div>
            </div>

            {receiptDetail?.shippingChoice && (
                <div>
                    SHIPPING ADDRESS:
                    <div className="prices">
                        <div className="subpriceText">{formatAddress(receiptDetail?.shippingAddress)}</div>
                    </div>
                </div>
            )}
            

            <div>
                PURCHASED ITEMS:
                {receiptDetail?.products?.map((product, index) => (
                    <div key={index}>
                        {product.productID}
                        {"quantity: " + product.quantity}
                    </div>
                ))}
            </div>

            <div>
                PICKUP/SHIPPING:
                {receiptDetail?.shippingChoice
                    ? receiptDetail?.processed ? receiptDetail?.received ? "RECEIVED" : "SHIPPED" : "PROCESSING"
                    : receiptDetail?.processed ? receiptDetail?.received ? "PICKED UP" : "READY FOR PICKUP" : "PROCESSING"}
            </div>

        </div>        
    );
}
