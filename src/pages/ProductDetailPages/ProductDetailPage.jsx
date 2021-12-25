import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadingBox from '../../components/Utils/LoadingBox';
import QuantityBox from '../../components/Utils/QuantityBox';
import CustomButton from "../../components/Buttons/CustomButton";
import { getProductInfo } from '../../reducers/productsReducer';

import "./ProductDetailPage.css";
        

export default function ProductDetailPage(props) {
    const dispatch = useDispatch();

    const productId = props.match.params.productId;
    
    const [productInfo, setProductInfo] = useState(undefined);


    useEffect(() => {
        dispatch(getProductInfo(productId)).then((res) => setProductInfo(res));
    }, []);

    const handleAddCart = () => {

    }

    if (productInfo === undefined) {
        return <LoadingBox />;
    }


    return (
        <div className="marginTop marginHorizontal">
            <div className="productDetailPage">
                <div className="left">
                    <img className="image" src={productInfo.mainImage} />
                </div>
                <div className="right">
                    <div className="brand">
                        {productInfo.brand}
                    </div>

                    <div className="title">
                        {productInfo.title}
                    </div>

                    <div className="price">
                        {"$" + productInfo.price}
                    </div>

                    <div className="description">
                        {productInfo.description}
                    </div>

                    <div className="quantity">
                        <h6>Quantity: </h6>
                        <QuantityBox quantity="1" />
                    </div>

                    <CustomButton
                        className="nav-top-menu-item-name" 
                        buttonStyle="outline" 
                        buttonSize="navbar" 
                        marginLeft="1rem" 
                        color="black" 
                        onClick={handleAddCart}>Add To Cart</CustomButton>

                    
                    
                </div>
            </div>
        </div>
    );
}
