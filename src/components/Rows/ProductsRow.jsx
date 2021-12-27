import React from 'react';
import ProductCard from '../../components/Cards/ProductCard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../utils/globalStyles.css';
import "./ProductsRow.css";

export default function ProductsRow(props) {

    const productsToDisplay = props.products ?? [...Array(props.placeholderNumbers)];

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {productsToDisplay.map((product, index) => ( 
                <Col key={index} className="cardMargin">
                    <ProductCard product={product} />
                </Col>
            ))}
        </Row>
    );
}
