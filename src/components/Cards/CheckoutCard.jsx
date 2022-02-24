import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getProductInfo } from "../../reducers/productsReducer";
import PlaceholderBox from "../Utils/PlaceholderBox";

import "../../utils/globalStyles.css";
import "./CheckoutCard.css";

export default function CheckoutCard(props) {
    const dispatch = useDispatch();

    const productId = props.product?.productID;
    const quantity = props.product?.quantity;

    const [productInfo, setProductInfo] = useState(undefined);


    useEffect(() => {
        dispatch(getProductInfo(productId)).then((res) => setProductInfo(res));
    }, [productId]);


    const hasGrayBorderBottom = !props.last;

    return (
        <div className={hasGrayBorderBottom ? "checkoutCard grayBorderBottom" : "checkoutCard"}>            
            <Link to={productInfo?._id ? `/product/${productInfo?._id}` : '#'} className={`links ${!productInfo && "disabledCursor"}`}>
                <div className="section-sm">
                    {props.title
                        ? <div className="image-width title">Item</div>
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

            {props.showQuantity && (
                <div className="section-sm">
                    {props.title
                        ? <div className="title">Price</div>
                        : productInfo?.price ? "$" + (productInfo?.price) : ""}

                </div>
            )}

            {props.showQuantity && (
                <div className="section-sm">
                    {props.title
                        ? <div className="title">Quantity</div>
                        : productInfo?.quantity ? (quantity) : ""}
                </div>
            )}

            <div className="section-sm price">
                {props.title
                    ? <div className="title">Total</div>
                    : productInfo?.price ? "$" + (productInfo?.price * quantity) : ""}
            </div>
            
        </div>
        
    );
}
