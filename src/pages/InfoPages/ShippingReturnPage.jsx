import React from 'react';
import Footer from '../../components/Footer';
import { CHECK_STATUS_OF_ORDER, CHECK_STATUS_OF_ORDER_CONTENT_1, CHECK_STATUS_OF_ORDER_CONTENT_2, DOMESTIC_SHIPPING_CONTENT_EMPHASIS, DOMESTIC_SHIPPING_EMPHASIS, DOMESTIC_SHIPPING_RATES, DOMESTIC_SHIPPING_RATES_CONTENT, INTERNATIONAL_SHIPPING, INTERNATIONAL_SHIPPING_CONTENT_1, INTERNATIONAL_SHIPPING_CONTENT_2, IN_STORE_PICKUP, IN_STORE_PICKUP_CONTENT_1, IN_STORE_PICKUP_CONTENT_2, LOCAL_DELIVERY, LOCAL_DELIVERY_CONTENT, REFUNDS_RETURNS_EXCHANGES, REFUNDS_RETURNS_EXCHANGES_CONTENT_1, REFUNDS_RETURNS_EXCHANGES_CONTENT_2, REFUNDS_RETURNS_EXCHANGES_CONTENT_3, SHIPPING_POLICY, SHIPPING_POLICY_CONTENT, SHIPPING_POLICY_EMPHASIS } from '../../utils/contents';

import "./InfoPages.css";

export default function ShippingReturnPage() {
    return (
        <div className="vertical-sm horizontal-lg infoPages">
            <div className="vertical-sm section">             
                <div className="title">{SHIPPING_POLICY}</div>
                <div className="body">{SHIPPING_POLICY_CONTENT}</div>
                <div className="emphasis">{SHIPPING_POLICY_EMPHASIS}</div>
            </div>
            
            <div className="vertical-sm  section">
                <div className="title">{DOMESTIC_SHIPPING_RATES}</div>
                <div className="body">
                    <div className="emphasis">{DOMESTIC_SHIPPING_CONTENT_EMPHASIS}</div> {DOMESTIC_SHIPPING_RATES_CONTENT}</div>
                <div className="emphasis">{DOMESTIC_SHIPPING_EMPHASIS}</div>
            </div>
            
            <div className="vertical-sm  section">
                <div className="title">{LOCAL_DELIVERY}</div>
                <div className="body">{LOCAL_DELIVERY_CONTENT}</div>
            </div>

            <div className="vertical-sm  section">
                <div className="title">{IN_STORE_PICKUP}</div>
                <div className="body">{IN_STORE_PICKUP_CONTENT_1}</div>
                <div className="body">{IN_STORE_PICKUP_CONTENT_2}</div>
            </div>

            <div className="vertical-sm  section">
                <div className="title">{INTERNATIONAL_SHIPPING}</div>
                <div className="body">{INTERNATIONAL_SHIPPING_CONTENT_1}</div>
                <div className="body">{INTERNATIONAL_SHIPPING_CONTENT_2}</div>
            </div>
            
            <div className="vertical-sm  section">
                <div className="title">{CHECK_STATUS_OF_ORDER}</div>
                <div className="body">{CHECK_STATUS_OF_ORDER_CONTENT_1}</div>
                <div className="body">{CHECK_STATUS_OF_ORDER_CONTENT_2}</div>
            </div>

            <div className="vertical-sm section">
                <div className="title">{REFUNDS_RETURNS_EXCHANGES}</div>
                <div className="body">{REFUNDS_RETURNS_EXCHANGES_CONTENT_1}</div>
                <div className="body">{REFUNDS_RETURNS_EXCHANGES_CONTENT_2}</div>
                <div className="body">{REFUNDS_RETURNS_EXCHANGES_CONTENT_3}</div>
            </div>
        </div>
    );
}
