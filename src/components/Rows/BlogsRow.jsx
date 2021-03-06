import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BlogCard from '../Cards/BlogCard';
import { AddBlogPageRoute } from '../../utils/routes';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconButton } from '../Buttons/IconButton';

import '../../utils/globalStyles.css';
import "./TGGRows.css";

export default function BlogsRow(props) {
    const history = useHistory();
    const { seller, blogs } = useSelector((state) => state);
    const currentSeller = seller?.seller;

    const blogsToDisplay = props.blogs ?? [...Array(props.placeholderNumbers)];

    const handleAddClick = () => {
        history.push(AddBlogPageRoute);
    }

    return (
        <div className="blogsRow">
            {currentSeller && (
                <h2 className="vertical-sm">
                    {props.title}
                    <IconButton buttonIcon="add-btn" onClick={handleAddClick}/>
                </h2>
            )}

            <Row xs={1} md={2} lg={4} className="g-4">
                {blogsToDisplay.map((blog, index) => ( 
                    <Col key={index} className="cardMargin">
                        <BlogCard md blog={blog} />
                    </Col>
                ))}
            </Row>
        </div>
        
    );
}
