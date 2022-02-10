import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import {IconButton} from "../Buttons/IconButton";

import "../../utils/globalStyles.css";
import "./ProductCard.css";
import ChooseQuantityBox from "../Utils/ChooseQuantityBox";
import { useDispatch } from "react-redux";
import { addItem } from "../../reducers/cartReducer";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleAddCart = (quantity) => {
    dispatch(addItem(product?._id, quantity));
}

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
          {product && (
            <div>
              <Card.Title className="cardTitle">{product?.title}</Card.Title>
              <Card.Subtitle className="cardSubtitle">{product?.brand}</Card.Subtitle>
              <Card.Text className="cardBody">{"$" + product?.price}</Card.Text>
            </div>
          )}

          <Card.Link className="addButton" href="#">
              <h2 className="addButton link">ADD TO CART</h2>
          </Card.Link> 
        </Card.Body>
    </Link>
  );
}
