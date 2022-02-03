import React, { useState } from 'react';
import ProductCard from '../../components/Cards/ProductCard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../utils/globalStyles.css';
import "./TGGRows.css";
import FeaturedCard from '../Cards/FeaturedCard';

export default function FeaturedRow(props) {
    const [rowPage, setRowPage] = useState(0);

    const productsToDisplay = props.products ?? [...Array(props.placeholderNumbers)];

    return (
        <div className="featuredRow marginTop paddingHorizontalSm">
            <div className="title paddingHorizontalSm">
                <div className="titleText">{props.title}</div>
                <div className="selection">
                    <i className={"fas fa-angle-left " + (rowPage === 0 && "disable")} onClick={() => { if (rowPage > 0) setRowPage(rowPage - 1) }}/>
                    <i className={"fas fa-angle-right " + (rowPage === 2 && "disable")} onClick={() => { if (rowPage < 2) setRowPage(rowPage + 1) }}/>
                </div>
            </div>

            <Row xs={1} md={2} lg={3} className="marginTop paddingHorizontalSm">
                {productsToDisplay?.map((product, index) => ( 
                    <Col key={index} className={"cardMargin" + ((index !== rowPage && index !== rowPage +1 && index !== rowPage +2 && index !== rowPage +3) ? " hide-some" : "")}>
                        <FeaturedCard sm product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}


