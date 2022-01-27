import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/Buttons/CustomButton';
import { addBlog, addSellerProduct } from '../../reducers/sellerReducer';
import { SUCCESS } from '../../utils/constants';

import "../../utils/globalStyles.css";
import "./SellerPages.css";

export default function AddBlogPage() {
    const dispatch = useDispatch();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const mainImageRef = useRef();
    const titleRef = useRef();
    const bodyRef = useRef();

    const [isMainBlog, setIsMainBlog] = useState(false);
    const [isSubBlog, setIsSubBlog] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();        

        setError('');
        setLoading(true);
        dispatch(addBlog(
            titleRef.current.value, 
            mainImageRef.current.value, 
            bodyRef.current.value,
            isMainBlog,
            isSubBlog))
            .then((res) => {
            if (res === SUCCESS) {
                console.log("blog added");
                window.location.href = '/';
            } else {
                console.log("error adding the blog.")
            }
            setLoading(false);
            });
    }


    return (
        <div className="marginTop addListingPage">
            <main>
                <div className="productShowing marginHorizontal">
                    <Form onSubmit={handleSubmit}>

                        <Form.Group id="titles">
                            <Form.Check type="checkbox" checked={isMainBlog} onChange={() => {setIsMainBlog(!isMainBlog)}} label="Do you want this to be the new main blog?" />
                            <Form.Check type="checkbox" checked={isSubBlog} onChange={() => {setIsSubBlog(!isSubBlog)}} label="Do you want this to be the new sub blog?" />
                            
                        </Form.Group>

                        <Form.Group id="title">
                            <Form.Label>Title *</Form.Label>                        
                            <Form.Control type="text" ref={titleRef} required />
                        </Form.Group>

                        <Form.Group id="mainImage">
                            <Form.Label>Main Image URL *</Form.Label>
                            <Form.Control type="text" ref={mainImageRef} required />
                        </Form.Group>

                        <Form.Group id="body">
                            <Form.Label>Body *</Form.Label>
                            <Form.Control as="textarea" type="text" style={{ height: '400px' }}  ref={bodyRef} required />
                        </Form.Group>

                        <CustomButton disabled={loading} type="submit" buttonStyle="primary" buttonDetail="productDetail" marginTop="20px">Upload</CustomButton>
                    </Form>
            
                </div>
            </main>
        </div>
        
    );
}
