import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import "./Utils.css";

export default function ChooseQuantityBox(props) {
    const originalQuantity = props.quantity;
    const [newQuantity, setNewQuantity] = useState(0);

    useEffect(() => {
        setNewQuantity(originalQuantity);
    }, [originalQuantity]);
    

    const maxQuantity = 10;

    const handleMinusQuantity = () => {
        if (newQuantity > 0) {
            setNewQuantity(newQuantity - 1);
        }
    }

    const handlePlusQuantity = () => {
        if (newQuantity < maxQuantity) {
            setNewQuantity(newQuantity + 1);
        }
    }

    const handleUpdateButton = () => {
        props.handleUpdateButton(newQuantity);
    }


    return (
        <div className={props.updateButton ? "chooseQuantity" : "chooseQuantity display-flex"}>
            <div className="quantity-section">
                <div className="section" onClick={handleMinusQuantity}>
                    <i className={"fas fa-minus" + (newQuantity <= 0 ? " disable" : "")}></i>
                </div>
                <div className="section">
                    <div>{newQuantity}</div>
                </div>
                <div className="section" onClick={handlePlusQuantity}>
                    <i className={"fas fa-plus" + (newQuantity >= maxQuantity ? " disable" : "")}></i>
                </div>
            </div>

            <div className={"updateText" + (newQuantity == originalQuantity ? " disable" : "")} onClick={handleUpdateButton}>
                {props.updateButton
                    ? props.updateButton
                    : props.buttonText ?? "UPDATE"
                }  
            </div>
        </div>
        
    );
}
