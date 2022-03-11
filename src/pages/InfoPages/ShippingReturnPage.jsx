import React from 'react';
import Footer from '../../components/Footer';
import { CHECK_STATUS_OF_ORDER, CHECK_STATUS_OF_ORDER_CONTENT_1, CHECK_STATUS_OF_ORDER_CONTENT_2, DOMESTIC_SHIPPING_CONTENT_EMPHASIS, DOMESTIC_SHIPPING_EMPHASIS, DOMESTIC_SHIPPING_RATES, DOMESTIC_SHIPPING_RATES_CONTENT, INTERNATIONAL_SHIPPING, INTERNATIONAL_SHIPPING_CONTENT_1, INTERNATIONAL_SHIPPING_CONTENT_2, IN_STORE_PICKUP, IN_STORE_PICKUP_CONTENT_1, IN_STORE_PICKUP_CONTENT_2, LOCAL_DELIVERY, LOCAL_DELIVERY_CONTENT, REFUNDS_RETURNS_EXCHANGES, REFUNDS_RETURNS_EXCHANGES_CONTENT_1, REFUNDS_RETURNS_EXCHANGES_CONTENT_2, REFUNDS_RETURNS_EXCHANGES_CONTENT_3, SHIPPING_POLICY, SHIPPING_POLICY_CONTENT, SHIPPING_POLICY_EMPHASIS } from '../../utils/contents';

import "./InfoPages.css";

export default function ShippingReturnPage() {
    return (
        <div className="vertical-md horizontal-lg specialFont body-sm">
            <div className="vertical-sm">
                <h2 className="sm">{SHIPPING_POLICY}</h2>
                <p>{SHIPPING_POLICY_CONTENT}</p>
                <em><strong>{SHIPPING_POLICY_EMPHASIS}</strong></em>
            </div>
            
            <div className="vertical-sm">
                <h2 className="sm">{DOMESTIC_SHIPPING_RATES}</h2>
                <p className="body">
                    <em><strong>{DOMESTIC_SHIPPING_CONTENT_EMPHASIS}</strong></em> {DOMESTIC_SHIPPING_RATES_CONTENT}</p>
                    <em><strong>{DOMESTIC_SHIPPING_EMPHASIS}</strong></em>
            </div>
            
            <div className="vertical-sm">
                <h2 className="sm">{LOCAL_DELIVERY}</h2>
                <p>{LOCAL_DELIVERY_CONTENT}</p>
            </div>

            <div className="vertical-sm">
                <h2 className="sm">{IN_STORE_PICKUP}</h2>
                <p>{IN_STORE_PICKUP_CONTENT_1}</p>
                <p>{IN_STORE_PICKUP_CONTENT_2}</p>
            </div>

            <div className="vertical-sm">
                <h2 className="sm">{INTERNATIONAL_SHIPPING}</h2>
                <p>{INTERNATIONAL_SHIPPING_CONTENT_1}</p>
                <p>{INTERNATIONAL_SHIPPING_CONTENT_2}</p>
            </div>
            
            <div className="vertical-sm">
                <h2 className="sm">{CHECK_STATUS_OF_ORDER}</h2>
                <p>{CHECK_STATUS_OF_ORDER_CONTENT_1}</p>
                <p>{CHECK_STATUS_OF_ORDER_CONTENT_2}</p>
            </div>

            <div className="vertical-sm">
                <h2 className="sm">{REFUNDS_RETURNS_EXCHANGES}</h2>
                <p>{REFUNDS_RETURNS_EXCHANGES_CONTENT_1}</p>
                <p>{REFUNDS_RETURNS_EXCHANGES_CONTENT_2}</p>
                <p>{REFUNDS_RETURNS_EXCHANGES_CONTENT_3}</p>
            </div>
        </div>
    );
}
