import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import ChooseQuantityBox from "../Utils/ChooseQuantityBox";
import PlaceholderBox from "../Utils/PlaceholderBox";
import OverflowText from "../Basics/OverflowText";
import { useDispatch } from "react-redux";
import { addUpdateSellerProduct } from "../../reducers/sellerReducer"
import { SUCCESS } from "../../utils/constants";

import "../../utils/globalStyles.css";
import "./ManageProductCard.css";


export default function ManageProductCard(props) {
    const dispatch = useDispatch();
    const product = props.product;

    const [loading, setLoading] = useState(false);

    const [originalPrice, setOriginalPrice] = useState(product?.price);
    const [modifiedPrice, setModifiedPrice] = useState(product?.price);

    const handleUpdateQuantity = (quantity) => {
        dispatch(addUpdateSellerProduct(product?._id, { ...product, quantity: quantity }));
    }

    const handleUpdateBestSeller = () => {
        dispatch(addUpdateSellerProduct(product?._id, {...product, bestSeller: !product?.bestSeller}));
    }

    const handleUpdatePrice = () => {
        setLoading(true);
        dispatch(addUpdateSellerProduct(product?._id, {...product, price: modifiedPrice})).then((res) => {
            setLoading(false);
            if (SUCCESS) {
                setOriginalPrice(modifiedPrice);
            }
        });
    }

    const hasGrayBorderBottom = !props.last;

    return (
        <div className={hasGrayBorderBottom ? "manageProductCard grayBorderBottom" : "manageProductCard"} >       
            {props.title
                ? <div className="checkbox title">Bestseller?</div>
                : <Form.Check className="checkbox" type="checkbox" checked={product?.bestSeller} onChange={handleUpdateBestSeller} label="" />
            }

            <Link to={product?._id ? `/add-listing/${product?._id}` : '#'} className={`links ${!product && "disabledCursor"}`} style={{ textDecoration: 'none' }}>
                <div className="section-sm">
                    {props.title
                        ? <div className="image-width title">Item</div>
                        : <Card className="image-section">
                            {product?.mainImage
                                ? (<Card.Img
                                    className="image"
                                    src={product?.mainImage}
                                    alt="product-image"
                                    />)
                                : <div className="placeholder" />}
                            </Card>}
                </div>
            </Link>

            <div className="section-lg">
                {props.title
                    ? <div className="title" />
                    : <Link to={product?._id ? `/add-listing/${product?._id}` : '#'} className={`links ${!product && "disabledCursor"}`} style={{ textDecoration: 'none' }}>
                        {product?.title
                            ? <Card.Title className="title">{product?.title}</Card.Title>
                            : <PlaceholderBox size="title" />}

                        {product?.brand
                            ? <Card.Subtitle className="subtitle">{product?.brand}</Card.Subtitle> 
                            : <PlaceholderBox size="subtitle" />}

                        {product?.description
                            ? <OverflowText className="subtitle" numberOfLines={2}><Card.Subtitle className="subtitle">{product?.description}</Card.Subtitle> </OverflowText>
                            : <PlaceholderBox size="subtitle" />}
                    </Link>}
                
            </div>

            <div className="section-md">
                {props.title
                    ? <div className="title">Price</div>
                    : <Card.Text>
                        <div className="price">$<Form.Control type="number" min="0" value={modifiedPrice || ""} onChange={e => {console.log(e.target.value); setModifiedPrice(e.target.value)}} /></div>
                        <div className={`links update ${(modifiedPrice == originalPrice) ? "disable disabledCursor" : ""}`} onClick={() => { console.log(modifiedPrice);  console.log(originalPrice); if (modifiedPrice != originalPrice) handleUpdatePrice(); }}>
                            {loading ? <i className="fa fa-spinner fa-spin" /> : "Update Price"}
                        </div>
                    </Card.Text>
                }
            </div>

            <div className="section-sm">
                {props.title
                    ? <div className="quantitybox-width title">Quantity</div>
                    : <ChooseQuantityBox quantity={product?.quantity} handleUpdateButton={handleUpdateQuantity}/>}
            </div>
        </div>
        
    );
}
