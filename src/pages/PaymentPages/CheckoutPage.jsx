import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/Buttons/CustomButton';
import CartCard from '../../components/Cards/CartCard';

import '../../utils/globalStyles.css';
import { PaymentPageRoute } from '../../utils/routes';
import './PaymentPages.css';

export default function CheckoutPage() {
    const history = useHistory();

    const { cart } = useSelector((state) => state);

    const handleCheckout = () => {
        history.push(PaymentPageRoute);
    }

    return (
        <div className="marginTop checkoutPage">
            <main>
                <div className="marginHorizontal">
                    Summary of Items
                    {cart?.items?.map((product, index) => (
                        product.unselected 
                            ? <div />
                            : <CartCard key={index} canModify={false} product={product} last={index == cart?.items?.length - 1}/>))}
                    <CustomButton onClick={handleCheckout} buttonStyle="outline" buttonDetail="default-size" marginTop="10px" marginBottom="5%">CHECK OUT</CustomButton>
                </div>
            </main>
        </div> 
    );
}
