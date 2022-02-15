import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/Buttons/CustomButton';
import CartCard from '../../components/Cards/CartCard';
import { getCart } from '../../reducers/cartReducer';
import { SummaryPageRoute } from '../../utils/routes';

import '../../utils/globalStyles.css';
import './UserPages.css';

export default function CartsPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { cart } = useSelector((state) => state);

    const cartItems = cart?.items;

    const cartItemsToDisplay = cartItems ?? [...Array(5)];

    useEffect(() => {
        dispatch(getCart());
    }, []);

    const handleShowSummary = () => {
        history.push(SummaryPageRoute);
    }

    return (
        <div className="marginTop cartsPage">
            <main>
                <div className="marginHorizontal">
                    {cartItemsToDisplay.map((product, index) => ( 
                        <CartCard key={index} product={product} last={index == cartItems?.length - 1}/>))}
                    
                    <CustomButton onClick={handleShowSummary} buttonStyle="outline" buttonDetail="default-size" marginTop="10px" marginBottom="5%">CHECK OUT</CustomButton>
                </div>
            </main>
        </div> 
    );
}
