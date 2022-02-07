import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import mainImage from "../../assets/shonen_jump.jpeg";

import "../../utils/globalStyles.css";

import './FeaturedCard.css';

export default function FeaturedCard({ product }) {

    return (
        <Link to={product?._id ? `/product/${product?._id}` : '#'} className={`links ${!product && "disabledCursor"}`}>
            <div className={"featuredCard"}>
                <div className="image-section">
                    {product 
                        ? (<Card.Img
                                className="image"
                                src={product?.mainImage}
                                alt="product-image"
                        />)
                    : (<div className="placeholder" />)
                    }
                </div>
                <div className="title-section">
                    <Card.Title className="title">{product?.title}</Card.Title>
                    <Card.Subtitle className="subtitle">{product?.brand}</Card.Subtitle>
                </div>
            </div>
            
        </Link>
        
    );
}
