import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeItem, updateItem } from "../../reducers/cartReducer";
import { getProductInfo } from "../../reducers/productsReducer";

import "../../utils/globalStyles.css";
import ChooseQuantityBox from "../Utils/ChooseQuantityBox";
import PlaceholderBox from "../Utils/PlaceholderBox";

import "./CartCard.css";

export default function CartCard(props) {
    const dispatch = useDispatch();
    const canModify = props.canModify ?? true;

    const productId = props.product?.productID;
    const quantity = props.product?.quantity;

    const [productInfo, setProductInfo] = useState(undefined);

    useEffect(() => {
        dispatch(getProductInfo(productId)).then((res) => setProductInfo(res));
    }, [productId]);

    const handleUpdateButton = (quantity) => {
        dispatch(updateItem(productId, quantity));
    }

    const handleRemoveButton = () => {
        dispatch(removeItem(productId));
    }

    const hasGrayBorderBottom = !props.last;

    return (
        <div className={hasGrayBorderBottom ? "cartCard grayBorderBottom" : "cartCard"}>            
            <Link to={productInfo?._id ? `/product/${productInfo?._id}` : '#'} className={`links ${!productInfo && "disabledCursor"}`}>
                <div className="section-sm">
                    {props.title
                        ? <div className="image-width"><text className="title">Item</text></div>
                        : productInfo?.mainImage
                            ? (<Card.Img
                                className="image"
                                src={productInfo?.mainImage}
                                alt="product-image"
                            />)
                        : <div className="placeholder" />
                    }
                </div>
            </Link>

            <div className="section-lg">
                {props.title
                    ? <div />
                    : <Link to={productInfo?._id ? `/product/${productInfo?._id}` : '#'} className={`links ${!productInfo && "disabledCursor"}`}>
                        {productInfo?.title
                            ? <Card.Title className="title">{productInfo?.title}</Card.Title>
                            : <PlaceholderBox size="title" />}

                        {productInfo?.brand
                            ? <Card.Subtitle className="subtitle">{productInfo?.brand}</Card.Subtitle> 
                            : <PlaceholderBox size="subtitle" />}
                    </Link>}
                
            </div>

            <div className="section-sm">
                {props.title
                    ? <text className="title">Price</text>
                    : productInfo?.price
                        ? <Card.Text className="body">{"$" + productInfo?.price}</Card.Text>
                        : <PlaceholderBox size="body" />}
            </div>

            <div className="section-md">
                {props.title
                    ? <div className="quantitybox-width"><text className="title">Quantity</text></div>
                    : canModify 
                        ? <ChooseQuantityBox quantity={quantity} maxQuantity={productInfo?.quantity} handleUpdateButton={handleUpdateButton} handleRemoveButton={handleRemoveButton}/>
                        : productInfo?.price
                            ? <Card.Text className="body">{"Quantity: " + quantity}</Card.Text>
                            : <PlaceholderBox size="body" />}
            </div>

            <div className="section-sm">
                {props.title
                    ? <text className="title">Total</text>
                    : "$" + (productInfo?.price * quantity)}
            </div>
            
        </div>
        
    );
}
