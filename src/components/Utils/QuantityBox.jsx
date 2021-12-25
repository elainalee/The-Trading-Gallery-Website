import React from 'react';

import "./Utils.css";

export default function QuantityBox(props) {
    return (
        <div className="quantityBox">
            {props.quantity}
        </div>
    );
}
