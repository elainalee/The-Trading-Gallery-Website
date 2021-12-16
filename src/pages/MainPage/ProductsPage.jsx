import React from 'react';
import ProductCard from '../../components/Cards/ProductCard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ProductsPage.css';

export default function ProductsPage({ products }) {
    return (
        <main>
            <Row xs={1} md={2} lg={4} className="g-4">
                {products?.map((product, index) => (
                    <Col key={index}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </main>
    );
}
