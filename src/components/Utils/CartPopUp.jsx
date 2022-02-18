import React from 'react';
import { useHistory } from 'react-router-dom';
import { CartsPageRoute } from '../../utils/routes';

import './Utils.css';

export default function CartPopUp(props) {
    const history = useHistory();
    
    const handleCartsClick = () => {
        history.push(CartsPageRoute);
    }

    console.log('err', props.err);

    return (
        <div>
            {props.show
                ? <div className="cartPopup" onClick={handleCartsClick}>
                        {props.error === undefined
                            ? <div>
                                <text className="addedText">{props.quantity} ITEM(S) ADDED TO YOUR CART</text>
                                <div className="productInfo">
                                    <img className="image" src={props.product.mainImage} alt="product-image" />
                                    <div className="description">
                                        <text className="titleText">{props.product.title}</text>
                                        <text className="priceText">${props.product.price}</text>
                                    </div>
                                </div>                        
                            </div>
                            : <text className="errMsg">{props.error}</text>
                            }
                        </div>
                : <div />}
        </div>
    );
}
