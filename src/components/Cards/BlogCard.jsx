import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddBlogPageRoute } from "../../utils/routes";
import PlaceholderBox from "../../components/Utils/PlaceholderBox";

import "../../utils/globalStyles.css";
import './BlogCard.css';


export default function BlogCard(props) {
    const { seller } = useSelector((state) => state);
    const blog = props.blog;

    const currentSeller = seller?.seller;
    const linkOnClick = currentSeller ? `${AddBlogPageRoute}/${blog?._id}` : blog?._id ? `/blog/${blog?._id}` : '#';

    const sizeName = props.sm ? "sm" : props.lg ? "lg" : "md";

    const hasGrayBorderBottom = props.sm && !props.last;

    return (
        <Link to={linkOnClick} className={`blogCard links ${!blog && "disabledCursor"}`} style={{ textDecoration: 'none' }}>
            {blog && currentSeller &&  (
                <div className="blogType">
                    {blog.mainBlog ? "(main)": blog.subBlog ? "(sub)" : "-"}
                </div>
            )}
            <div className={sizeName + (hasGrayBorderBottom ? " grayBorderBottom" : "") + " gap"}>

                <Card className="image-section">
                    {blog?.mainImage
                        ? (<Card.Img
                            className="image"
                            src={blog?.mainImage}
                            alt="blog-image"
                        />)
                    : (<div className="placeholder" />)}
                </Card>

                <div className="title-section">
                    {/* {blog?.title
                        ? <Card.Title className="title links">{props.blog?.title}</Card.Title>
                        : <PlaceholderBox page={false} size="title" />} */}
                    <Card.Title className="title">{blog?.title}</Card.Title>
                </div>
            </div>
            
        </Link>
        
    );
}
