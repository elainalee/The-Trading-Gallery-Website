import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "../../utils/globalStyles.css";
import "./ProductCard.css";
import ChooseQuantityBox from "../Utils/ChooseQuantityBox";
import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/cartReducer";
import PlaceholderBox from "../Utils/PlaceholderBox";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Link to={product?._id ? `/product/${product?._id}` : '#'} className={`links ${!product && "disabledCursor"}`}>
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
