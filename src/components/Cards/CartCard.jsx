import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import mainImage from "../../assets/shonen_jump.jpeg";
import { updateItem } from "../../reducers/cartReducer";
import { getProductInfo } from "../../reducers/productsReducer";

import "../../utils/globalStyles.css";
import CustomButton from "../Buttons/CustomButton";
import ChooseQuantityBox from "../Utils/ChooseQuantityBox";
import PlaceholderBox from "../Utils/PlaceholderBox";

import "./CartCard.css";

export default function CartCard(props) {
    const dispatch = useDispatch();
    const canModify = props.canModify ?? true;

    const productId = props.product?.productID;
    const quantity = props.product?.quantity;
    const unselected = props.product?.unselected ?? false;

    const [productInfo, setProductInfo] = useState(undefined);
    // const [isChecked, setIsChecked] = useState(productInfo?.checked ?? true);

    useEffect(() => {
        dispatch(getProductInfo(productId)).then((res) => setProductInfo(res));
    }, [productId]);

    const handleUpdateButton = (quantity) => {
        dispatch(updateItem(productId, quantity, unselected));
    }

    const handleCheckbox = () => {
        dispatch(updateItem(productId, quantity, !unselected));
    }

    const hasGrayBorderBottom = !props.last;

    return (
        <div className={hasGrayBorderBottom ? "cartCard grayBorderBottom" : "cartCard"}>
            {canModify && (
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={!unselected}
                    onChange={handleCheckbox}
                />
            )}
            
            <Link to={productInfo?._id ? `/product/${productInfo?._id}` : '#'} className={`links ${!productInfo && "disabledCursor"}`}>
                <div className="image-section">
                    {productInfo?.mainImage
                        ? (<Card.Img
                            className="image"
                            src={productInfo?.mainImage}
                            alt="product-image"
                        />)
                    : (<div className="placeholder" />)}
                </div>
            </Link>
            <div className="title-section">
                <Link to={productInfo?._id ? `/product/${productInfo?._id}` : '#'} className={`links ${!productInfo && "disabledCursor"}`}>
                    {productInfo?.title
                        ? <Card.Title className="title">{productInfo?.title}</Card.Title>
                        : <PlaceholderBox size="title" />}

                    {productInfo?.brand
                        ? <Card.Subtitle className="subtitle">{productInfo?.brand}</Card.Subtitle> 
                        : <PlaceholderBox size="subtitle" />}
                </Link>
                    {productInfo?.price
                        ? <Card.Text className="body">{"$" + productInfo?.price}</Card.Text>
                        : <PlaceholderBox size="body" />}
                {canModify 
                    ? <ChooseQuantityBox quantity={quantity} handleUpdateButton={handleUpdateButton}/>
                    : productInfo?.price
                        ? <Card.Text className="body">{"Quantity: " + productInfo?.quantity}</Card.Text>
                        : <PlaceholderBox size="body" />
                }
            </div>
            
        </div>
        
    );
}
