import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import ChooseQuantityBox from "../Utils/ChooseQuantityBox";
import PlaceholderBox from "../Utils/PlaceholderBox";
import OverflowText from "../Basics/OverflowText";
import { useDispatch } from "react-redux";
import { addUpdateSellerBlog, addUpdateSellerProduct } from "../../reducers/sellerReducer"
import { SUCCESS } from "../../utils/constants";

import "../../utils/globalStyles.css";
import "./ManageProductCard.css";


export default function ManageBlogCard(props) {
    const dispatch = useDispatch();
    const blog = props.blog;
    const index = props.index;

    console.log("blog", blog);

    const handleUpdateMainBlog = () => {
        dispatch(addUpdateSellerBlog(blog?._id, blog?.title, blog?.mainImage, blog?.body, true, false));
    }

    const handleUpdateSubBlog = () => {
        dispatch(addUpdateSellerBlog(blog?._id, blog?.title, blog?.mainImage, blog?.body, false, true));
    }

    const handleUpdateRegBlog = () => {
        dispatch(addUpdateSellerBlog(blog?._id, blog?.title, blog?.mainImage, blog?.body, false, false));
    }

    const hasGrayBorderBottom = !props.last;

    return (
        <div className={hasGrayBorderBottom ? "manageProductCard grayBorderBottom" : "manageProductCard"} >       
            {props.title
                ? <div className="checkbox title">Main Blog?</div>
                : <Form.Check className="checkbox" type="radio" name={`blog-${index}`} checked={blog?.mainBlog} onChange={handleUpdateMainBlog} label="" />
            }

            {props.title
                ? <div className="checkbox title">Sub Blog?</div>
                : <Form.Check className="checkbox" type="radio" name={`blog-${index}`} checked={blog?.subBlog} onChange={handleUpdateSubBlog} label="" />
            }

            {props.title
                ? <div className="checkbox title">None</div>
                : <Form.Check className="checkbox" type="radio" name={`blog-${index}`} checked={!(blog?.mainBlog || blog?.subBlog)} onChange={handleUpdateRegBlog} label="" />
            }

            <Link to={blog?._id ? `/add-blog/${blog?._id}` : '#'} className={`links ${!blog && "disabledCursor"}`} style={{ textDecoration: 'none' }}>
                <div className="section-sm">
                    {props.title
                        ? <div className="image-width title">Item</div>
                        : <Card className="image-section">
                            {blog?.mainImage
                                ? (<Card.Img
                                    className="image"
                                    src={blog?.mainImage}
                                    alt="product-image"
                                    />)
                                : <div className="placeholder" />}
                            </Card>}
                </div>
            </Link>

            <div className="section-lg">
                {props.title
                    ? <div className="title" />
                    : <Link to={blog?._id ? `/add-blog/${blog?._id}` : '#'} className={`links ${!blog && "disabledCursor"}`} style={{ textDecoration: 'none' }}>
                        {blog?.title
                            ? <Card.Title className="title">{blog?.title}</Card.Title>
                            : <PlaceholderBox size="title" />}

                        {/* {blog?.brand
                            ? <Card.Subtitle className="subtitle">{blog?.brand}</Card.Subtitle> 
                            : <PlaceholderBox size="subtitle" />} */}

                        {blog?.body
                            ? <OverflowText className="subtitle" numberOfLines={3}><Card.Subtitle className="subtitle">{blog?.body}</Card.Subtitle> </OverflowText>
                            : <PlaceholderBox size="subtitle" />}
                    </Link>}
            </div>

            {/* <div className="section-md">
                {props.title
                    ? <div className="title">Price</div>
                    : <Card.Text>
                        <div className="price">$<Form.Control type="number" min="0" value={modifiedPrice || ""} onChange={e => {console.log(e.target.value); setModifiedPrice(e.target.value)}} /></div>
                        <div className={`links update ${(modifiedPrice == originalPrice) ? "disable disabledCursor" : ""}`} onClick={() => { console.log(modifiedPrice);  console.log(originalPrice); if (modifiedPrice != originalPrice) handleUpdatePrice(); }}>
                            {loading ? <i className="fa fa-spinner fa-spin" /> : "Update Price"}
                        </div>
                    </Card.Text>
                }
            </div> */}

            {/* <div className="section-sm">
                {props.title
                    ? <div className="quantitybox-width title">Quantity</div>
                    : <ChooseQuantityBox quantity={blog?.quantity} handleUpdateButton={handleUpdateQuantity}/>}
            </div> */}
        </div>
        
    );
}
