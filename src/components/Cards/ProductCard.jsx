import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import {IconButton} from "../Buttons/IconButton";

import "../../utils/globalStyles.css";
import "./ProductCard.css";

export default function ProductCard({ product }) {
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
        
        {/* <Card.Body className="cardDescription">
          {product && (
            <div>
              <Card.Title className="cardTitle">{product?.title}</Card.Title>
              <Card.Subtitle className="cardSubtitle">{product?.brand}</Card.Subtitle>
              <Card.Text className="cardBody">{"$" + product?.price}</Card.Text>
            </div>
          )}
          <Card.Link href="#">
              <h2 className="addButton">ADD TO CART</h2>
          </Card.Link>
        </Card.Body> */}
      </Card>
      <Card.Body className="productCard cardDescription">
          {product && (
            <div>
              <Card.Title className="cardTitle">{product?.title}</Card.Title>
              <Card.Subtitle className="cardSubtitle">{product?.brand}</Card.Subtitle>
              <Card.Text className="cardBody">{"$" + product?.price}</Card.Text>
            </div>
          )}
          <Card.Link href="#">
              <h2 className="addButton">ADD TO CART</h2>
          </Card.Link>
        </Card.Body>
    </Link>
  );
}
