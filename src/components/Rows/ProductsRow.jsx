import React, { useState } from 'react';
import ProductCard from '../../components/Cards/ProductCard';

import '../../utils/globalStyles.css';
import "./TGGRows.css";


import Carousel from 'react-material-ui-carousel';
import { Col, Row } from 'react-bootstrap';

export default function ProductsRow(props) {

    const [rowPage, setRowPage] = useState(0);

    const enableCarousel = props.enableCarousel;
    const productsToDisplay = props.products ?? [...Array(props.placeholderNumbers)];

    return (
        <div className="productsRow">
            <div className="title">
                <div className="titleText">{props.title}</div>
                <div className="selection">
                    <i className={"fas fa-angle-left " + (rowPage === 0 && "disable")} onClick={() => { if (rowPage > 0) setRowPage(rowPage - 1) }}/>
                    <i className={"fas fa-angle-right " + (rowPage === 2 && "disable")} onClick={() => { if (rowPage < 2) setRowPage(rowPage + 1) }}/>
                </div>
            </div>
            <Carousel className={enableCarousel ? "carousel" : "carousel hide"}>
                {productsToDisplay.map((product, i) => <ProductCard key={i} product={product} /> )}
            </Carousel>
            
            <div className={enableCarousel ? "productCards hide" : "productCards"}>
                <Row xs={1} md={2} lg={4} >
                    {productsToDisplay.map((product, index) => ( 
                        <Col key={index} className={"cardMargin" + ((index !== rowPage && index !== rowPage +1) ? " hide-some" : "")}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}