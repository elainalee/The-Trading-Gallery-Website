import React from 'react';
import { useHistory } from 'react-router-dom';
import { CartsPageRoute } from '../../utils/routes';

import './Utils.css';

export default function CartPopUp(props) {
    const history = useHistory();
    
    const handleCartsClick = () => {
        history.push(CartsPageRoute);
    }

    return (
        <div>
            {props.show
                ? <div className="cartPopup" onClick={handleCartsClick}>
                        {props.error === undefined
                            ? <div>
                                <div className="addedText">{props.quantity} ITEM(S) ADDED TO YOUR CART</div>
                                <div className="productInfo">
                                    <img className="image" src={props.product.mainImage} alt="product-image" />
                                    <div className="description">
                                        <div className="titleText">{props.product.title}</div>
                                        <div className="priceText">${props.product.price}</div>
                                    </div>
                                </div>                        
                            </div>
                            : <div className="errMsg">{props.error}</div>}
                        </div>
                : <div />}
        </div>
    );
}
