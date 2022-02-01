import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import mainImage from "../../assets/shonen_jump.jpeg";

import "../../utils/globalStyles.css";

import './BlogCard.css';

export default function BlogCard(props) {
    const blog = props.blog;

    const sizeName = props.sm ? "sm" : props.lg ? "lg" : "md";
    console.log(blog, sizeName);

    const hasGrayBorderBottom = props.sm && !props.last;

    return (
        <Link to={blog?._id ? `/blog/${blog?._id}` : '#'} className={`blogCard links ${!blog && "disabledCursor"}`}>
            <div className={sizeName + (hasGrayBorderBottom ? " grayBorderBottom" : "") + " gap"}>
                <div className="image-section">
                    {blog 
                        ? (<Card.Img
                            className="image"
                            src={blog?.mainImage}
                            alt="blog-image"
                        />)
                    : (<div className="placeholder" />)
                    }
                </div>
                <div className="title-section">
                    <Card.Title className="title">{props.blog?.title}</Card.Title>
                </div>
            </div>
            
        </Link>
        
    );
}
