import React, { useEffect } from 'react';
import "./Utils.css";

export default function ChooseQuantityBox(props) {
    const quantity = props.quantity;

    const minQuantity = 1;
    const maxQuantity = props.maxQuantity;

    const handleMinusQuantity = () => {
        if (quantity > minQuantity) {
            if (!props.seperateButton) {
                props.handleUpdateButton(quantity - 1);
            } else {
                props.setQuantity(quantity - 1);
            }
        }
    }

    const handlePlusQuantity = () => {
        if (quantity < maxQuantity) {
            if (!props.seperateButton && quantity < maxQuantity) {
                props.handleUpdateButton(quantity + 1);
            } else {
                props.setQuantity(quantity + 1);
            }
        }
    }

    return (
        <div className="chooseQuantity">
            <div>
                <div className="box">
                    <div className="quantity-section">
                        <div className="section" onClick={handleMinusQuantity}>
                            <i className={"fas fa-minus" + (quantity <= minQuantity ? " disable" : "")}></i>
                        </div>
                        <div className="section">
                            <text className="quantity">{quantity}</text>
                        </div>
                        <div className="section" onClick={handlePlusQuantity}>
                            <i className={"fas fa-plus" + (quantity >= maxQuantity ? " disable" : "")}></i>
                        </div>
                    </div>
                </div>
                {!props.seperateButton && (
                    <text className="removeText" onClick={props.handleRemoveButton}>Remove</text>
                )}
            </div>
        </div>
        
    );
}
