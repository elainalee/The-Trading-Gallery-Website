import React from 'react';
import ProductCard from '../../components/Cards/ProductCard';

import '../../utils/globalStyles.css';
import "./ProductsRow.css";


import Carousel from 'react-material-ui-carousel';
import { Col, Row } from 'react-bootstrap';

export default function ProductsRow(props) {

    const enableCarousel = props.enableCarousel;
    const productsToDisplay = props.products ?? [...Array(props.placeholderNumbers)];

    return (
        <div>
            <Carousel interval={null} className={enableCarousel ? "carousel" : "carousel hide"}>
                {productsToDisplay.map((product, i) => <ProductCard key={i} product={product} /> )}
            </Carousel>

        <div className={enableCarousel ? "productRow hide" : "productRow"}>
            <Row xs={1} md={2} lg={4} >
                {productsToDisplay.map((product, index) => ( 
                    <Col key={index} className="cardMargin">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
            

        </div>
    )
}