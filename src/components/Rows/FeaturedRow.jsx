import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeaturedCard from '../Cards/FeaturedCard';

import '../../utils/globalStyles.css';
import "./TGGRows.css";

export default function FeaturedRow(props) {
    const [rowPage, setRowPage] = useState(0);

    const productsToDisplay = props.products ?? [...Array(props.placeholderNumbers)];

    return (
        <div className="featuredRow horizontal-sm">
            <h3 className="vertical-sm horizontal-sm">
                {props.title}
                <div className="selection">
                    <i className={"fas fa-angle-left " + (rowPage === 0 && "disable")} onClick={() => { if (rowPage > 0) setRowPage(rowPage - 1) }}/>
                    <i className={"fas fa-angle-right " + (rowPage === 2 && "disable")} onClick={() => { if (rowPage < 2) setRowPage(rowPage + 1) }}/>
                </div>
            </h3>

            <Row xs={1} md={2} lg={3} className="horizontal-sm">
                {productsToDisplay?.map((product, index) => (
                    <Col key={index} className={"vertical-sm" + ((index !== rowPage && index !== rowPage +1 && index !== rowPage +2 && index !== rowPage +3) ? " hide-some" : "")}>
                        <FeaturedCard sm product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}


