import React from 'react';
import Card from 'react-bootstrap/Card';

import '../../utils/globalStyles.css';
import "./ProductCard.css";
import { Link } from 'react-router-dom';
import { ProductDetailPageRoute } from '../../utils/routes';

export default function ProductCard({ product }) {

    return (
        <Link to={`/product/${product._id}`} className="links">
         <Card className="productCard">
            <Card.Img 
                className="image"
                variant="top" 
                src={product.mainImage} 
                alt="product-image" />
            <Card.Body className="cardDescription">
                <Card.Title>{product.title}</Card.Title>
                {/* <Card.Subtitle>{product.description}</Card.Subtitle> */}
                <Card.Text>{"$" + product.price}</Card.Text>
                {/* <Card.Link href="#">
                    <IconButton buttonIcon = "carts-btn" color="black" />
                </Card.Link> */}
            </Card.Body>
        </Card>
        </Link>
           
    );
}
