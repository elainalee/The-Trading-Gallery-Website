import React from 'react';
import Card from 'react-bootstrap/Card';

import { IconButton } from '../Buttons/IconButton';

import '../../utils/globalStyles.css';

export default function ProductCard({ product }) {

    return (
        <Card>
            <Card.Img variant="top" src={product.mainImage} alt="product-image" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Subtitle>{"$" + product.price}</Card.Subtitle>
                <Card.Text>{product.description}</Card.Text>
                <Card.Link href="#">
                    <IconButton buttonIcon = "carts-btn" color="black" />
                </Card.Link>
            </Card.Body>
        </Card>
    );
}
