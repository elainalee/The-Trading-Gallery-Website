import React from 'react';
import Card from 'react-bootstrap/Card';

import { IconButton } from '../Buttons/IconButton';

import '../../utils/globalStyles.css';
import "./ProductCard.css";

export default function ProductCard({ product }) {

    // return (
    //     <div className="product-card">
    //         <img className="image" src={product.mainImage} alt="product-image" />
    //     </div>
    // )

    return (
        <Card className="productCard">
            <Card.Img 
                className="image"
                variant="top" 
                src={product.mainImage} 
                alt="product-image" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle>{product.description}</Card.Subtitle>
                <Card.Text>{"$" + product.price}</Card.Text>
                {/* <Card.Link href="#">
                    <IconButton buttonIcon = "carts-btn" color="black" />
                </Card.Link> */}
            </Card.Body>
        </Card>
    );
}
