import React, { useEffect, useState } from 'react';
import { getStatus } from '../../Axios/asyncStorage';
import "./Utils.css";

export default function ChooseQuantityBox(props) {
    const [status, setStatus] = useState(undefined);

    useEffect(async () => {
        let curStatus = await getStatus();
        setStatus(curStatus);
    }, []);

    const quantity = props.quantity;

    const minQuantity = 1;
    const maxQuantity = props.maxQuantity ?? 10000;

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
        <div className={`chooseQuantity ${status === "seller" ? " noRemoveButton" : ""}`}>
            <div className={props.seperateButton ? "setHeight" : ""}>
                <div className="box">
                    <div className="quantity-section">
                        <div className="section" onClick={handleMinusQuantity}>
                            <i className={"fas fa-minus" + (quantity <= minQuantity ? " disable" : "")}></i>
                        </div>
                        <div className="section">
                            <div className="quantity">{quantity}</div>
                        </div>
                        <div className="section" onClick={handlePlusQuantity}>
                            <i className={"fas fa-plus" + (quantity >= maxQuantity ? " disable" : "")}></i>
                        </div>
                    </div>
                </div>
                {(status !== "seller" && !props.seperateButton) && (
                    <div className="removeText links" onClick={props.handleRemoveButton}>Remove</div>
                )}
            </div>
        </div>
        
    );
}
