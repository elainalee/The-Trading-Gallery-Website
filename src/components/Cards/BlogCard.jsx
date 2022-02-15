import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../../utils/globalStyles.css";
import { AddBlogPageRoute } from "../../utils/routes";

import './BlogCard.css';

export default function BlogCard(props) {
    const { seller } = useSelector((state) => state);
    const blog = props.blog;

    const currentSeller = seller?.seller;
    const linkOnClick = currentSeller ? `${AddBlogPageRoute}/${blog?._id}` : blog?._id ? `/blog/${blog?._id}` : '#';

    const sizeName = props.sm ? "sm" : props.lg ? "lg" : "md";

    const hasGrayBorderBottom = props.sm && !props.last;

    return (
        <Link to={linkOnClick} className={`blogCard links ${!blog && "disabledCursor"}`}>
            {blog && currentSeller &&  (
                <div className="blogType">
                    {blog.mainBlog ? "(main)": blog.subBlog ? "(sub)" : "-"}
                </div>
            )}
            <div className={sizeName + (hasGrayBorderBottom ? " grayBorderBottom" : "") + " gap"}>
                <div className="image-section">
                    {blog 
                        ? (<Card.Img
                            className="image"
                            src={blog?.mainImage}
                            alt="blog-image"
                        />)
                    : (<div className="placeholder" />)}
                </div>
                <div className="title-section">
                    {/* {props.blog?.title
                        ? <Card.Title className="title">{props.blog?.title}</Card.Title>
                        : <placeholderBox page={false} size="title" />} */}
                    <Card.Title className="title">{props.blog?.title}</Card.Title>
                </div>
            </div>
            
        </Link>
        
    );
}
