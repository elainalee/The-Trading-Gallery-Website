import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import mainImage from "../../assets/shonen_jump.jpeg";

import "../../utils/globalStyles.css";

import './BlogCard.css';

export default function BlogCard(props) {
    const sizeName = props.sm ? "sm" : props.lg ? "lg" : "md";
    const hasGrayBorderBottom = props.sm && !props.last;

    return (
        <Link className="blogCard" to={'#'}>
            <div className={sizeName + (hasGrayBorderBottom ? " grayBorderBottom" : "") + " gap"}>
                <div className="image-section">
                    <Card.Img
                        className="image"
                        src={props?.blog?.mainImage}
                        alt="product-image"
                    />
                </div>
                <div className="title-section">
                    <Card.Title className="title">{props.blog?.title}</Card.Title>
                </div>
            </div>
            
        </Link>
        
    );
}
