import React from 'react';
import ProductCard from '../../components/Cards/ProductCard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../utils/globalStyles.css';
import "./TGGRows.css";
import BlogCard from '../Cards/BlogCard';

export default function BlogsRow(props) {

    const blogsToDisplay = props.blogs ?? [...Array(props.placeholderNumbers)];

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {blogsToDisplay.map((blog, index) => ( 
                <Col key={index} className="cardMargin">
                    <BlogCard md blog={blog} />
                </Col>
            ))}
        </Row>
    );
}
