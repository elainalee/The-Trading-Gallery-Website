import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../../utils/globalStyles.css";
import { AddListingPageRoute } from "../../utils/routes";
import PlaceholderBox from "../Utils/PlaceholderBox";

import './FeaturedCard.css';

export default function FeaturedCard({ product }) {
    const { seller } = useSelector((state) => state);
    const currentSeller = seller?.seller;

    const linkOnClick = currentSeller ? `${AddListingPageRoute}/${product?._id}` : product?._id ? `/product/${product?._id}` : '#';

    return (
        <Link to={linkOnClick} className={`links ${!product && "disabledCursor"}`} style={{ textDecoration: 'none' }}>
            <div className={"featuredCard"}>
                <Card className="image-section">
                    {product?.mainImage
                        ? (<Card.Img
                                className="image"
                                src={product?.mainImage}
                                alt="product-image"
                        />)
                    : (<div className="placeholder" />)}
                </Card>

                <div className="title-section">
                    {product?.title
                        ? <Card.Title className="title">{product?.title}</Card.Title>
                        : <PlaceholderBox page={false} size="title" />}
                        
                    {product?.brand
                        ? <Card.Subtitle className="subtitle">{product?.brand}</Card.Subtitle>
                        : <PlaceholderBox page={false} size="subtitle" />}
                    </div>
            </div>
            
        </Link>
        
    );
}
