import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import "./Utils.css";

export default function ChooseQuantityBox(props) {
    const quantity = props.quantity;

    const maxQuantity = 10;

    const handleMinusQuantity = () => {
        if (!props.addButton && quantity > 0) {
            props.handleUpdateButton(quantity - 1);
        } else {
            props.setQuantity(quantity - 1);
        }
    }

    const handlePlusQuantity = () => {
        if (!props.addButton && quantity < maxQuantity) {
            props.handleUpdateButton(quantity + 1);
        } else {
            props.setQuantity(quantity + 1);
        }
    }

    return (
        <div className="chooseQuantity">
            <div className={props.addButton ? "row" : ""}>
                <div className="box">
                    <div className="quantity-section">
                        <div className="section" onClick={handleMinusQuantity}>
                            <i className={"fas fa-minus" + (quantity <= 0 ? " disable" : "")}></i>
                        </div>
                        <div className="section">
                            <text className="quantity">{quantity}</text>
                        </div>
                        <div className="section" onClick={handlePlusQuantity}>
                            <i className={"fas fa-plus" + (quantity >= maxQuantity ? " disable" : "")}></i>
                        </div>
                    </div>
                </div>
                {props.addButton
                    ? <div className="addButton">{props.addButton}</div>
                    : <text className="removeText" onClick={props.handleRemoveButton}>Remove</text>
                }
            </div>
        </div>
        
    );
}
