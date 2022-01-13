import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../../components/Footer';

export default function BlogPage() {
    return (
        <div className="marginTop">
            <div className="marginLeft">
                BlogPage Page Placeholder
            </div>
            <Row xs={1} md={2} lg={4} className="g-4">
                {[].map((blog, index) => ( 
                    <Col key={index} className="cardMargin">
                    </Col>
                ))}
            </Row>
            <Footer />
        </div>
        
    );
}
