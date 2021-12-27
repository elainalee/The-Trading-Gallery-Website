import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

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
        
        <Card.Body className="cardDescription">
          {product && (
            <div>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Subtitle>{product?.brand}</Card.Subtitle>
              <Card.Text>{"$" + product?.price}</Card.Text>
            </div>
          )}
          {/* <Card.Link href="#">
                    <IconButton buttonIcon = "carts-btn" color="black" />
                </Card.Link> */}
        </Card.Body>
      </Card>
    </Link>
  );
}
