import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import PlaceholderBox from "../Utils/PlaceholderBox";

import "../../utils/globalStyles.css";
import "./ProductCard.css";
import { useSelector } from "react-redux";
import { AddListingPageRoute } from "../../utils/routes";


export default function ProductCard({ product }) {
  const { seller } = useSelector((state) => state);
  const currentSeller = seller?.seller;

  const linkOnClick = currentSeller ? `${AddListingPageRoute}/${product?._id}` : product?._id ? `/product/${product?._id}` : '#';


  return (
    <Link to={linkOnClick} className={`links ${!product && "disabledCursor"}`}>
      <Card className="productCard">
        <div className="placeholder">
          {product && (
            <Card.Img
              className="image"
              variant="top"
              src={product?.mainImage}
              alt="product-image"
            />)}
        </div>
      </Card>
      <Card.Body className="productCard cardDescription">
        {product?.title
          ? <Card.Title className="cardTitle">{product?.title}</Card.Title>
          : <PlaceholderBox page={false} size="title" />}

        {product?.brand
          ? <Card.Subtitle className="cardSubtitle">{product?.brand}</Card.Subtitle>
          : <PlaceholderBox page={false} size="subtitle" />}
        
        {product?.price
          ? <Card.Text className="cardBody">{"$" + product?.price}</Card.Text>
          : <PlaceholderBox page={false} size="body" />}

        {product && (
          <h2 className="addButton link">ADD TO CART</h2>
        )}
        </Card.Body>
    </Link>
  );
}
