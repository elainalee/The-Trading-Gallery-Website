import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import PlaceholderBox from "../Utils/PlaceholderBox";
import { useSelector } from "react-redux";
import { AddListingPageRoute } from "../../utils/routes";

import "../../utils/globalStyles.css";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { seller } = useSelector((state) => state);
  const currentSeller = seller?.seller;

  const linkOnClick = currentSeller ? `${AddListingPageRoute}/${product?._id}` : product?._id ? `/product/${product?._id}` : '#';


  return (
    <Link to={linkOnClick} className={`links ${!product && "disabledCursor"}`} style={{ textDecoration: 'none' }}>
      <Card className="productCard">
        {product?.mainImage
          ? <Card.Img
              className="image"
              variant="top"
              src={product?.mainImage}
              alt="product-image"
            />
          : <div className="placeholder"></div>}
      </Card>
      <Card.Body className="productCard">
        <div className="cardDescription">
        {product?.title
          ? <Card.Title className="cardTitle">{product?.title}</Card.Title>
          : <PlaceholderBox page={false} size="title" />}

        {product?.brand
          ? <Card.Subtitle className="cardSubtitle">{product?.brand}</Card.Subtitle>
          : <PlaceholderBox page={false} size="subtitle" />}
        
        {product?.price
          ? <Card.Text className="cardBody">{"$" + product?.price}</Card.Text>
          : <PlaceholderBox page={false} size="body" />}
        </div>
        {product && currentSeller && (
          <div>
            {"quantity: " + product.quantity}
            {product.bestSeller ? <i className="fa-solid fa-thumbs-up" /> : ""}
          </div>)}
        </Card.Body>
        
    </Link>
  );
}
