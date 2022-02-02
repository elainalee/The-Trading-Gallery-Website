import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/Buttons/CustomButton';
import { addBlog, addSellerProduct } from '../../reducers/sellerReducer';
import { SUCCESS } from '../../utils/constants';

import "../../utils/globalStyles.css";
import { formatGoogleDriveLink } from '../../utils/Helper';
import "./SellerPages.css";

export default function AddBlogPage() {
    const dispatch = useDispatch();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [isGoogleDriveLink, setIsGoogleDriveLink] = useState(false);
    const [mainImageLink, setMainImageLink] = useState(undefined);

    const [isMainBlog, setIsMainBlog] = useState(false);
    const [isSubBlog, setIsSubBlog] = useState(false);

    const mainImageRef = useRef();
    const titleRef = useRef();
    const bodyRef = useRef();

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

    async function handleRenderImage(e) {
        e.preventDefault();
        setMainImageLink(mainImageRef?.current?.value);
    }


    return (
        <div className="marginTop addPostPages addBlogPage">
            <main>
                <div className="productShowing marginHorizontal">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="titles">
                            <Form.Check type="checkbox" checked={isMainBlog} onChange={() => {setIsMainBlog(!isMainBlog)}} label="Do you want this to be the new main blog?" />
                            <Form.Check type="checkbox" checked={isSubBlog} onChange={() => {setIsSubBlog(!isSubBlog)}} label="Do you want this to be the new sub blog?" />
                            
                        </Form.Group>

                        <div className="left">
                            

                            <Form.Group id="mainImage">
                                <Form.Label>Main Image URL *</Form.Label>
                                <Form.Control type="text" ref={mainImageRef} required />
                                <div id="googleDriveCheckbox"><Form.Check type="checkbox" checked={isGoogleDriveLink} onChange={() => {setIsGoogleDriveLink(!isGoogleDriveLink)}} label="this link is from google drive" /></div>
                            </Form.Group>

                            <CustomButton className="nav-top-menu-item-name" buttonStyle="outline" buttonDetail="renderImg" marginTop="2.5rem" marginBottom="1rem" onClick={handleRenderImage}>Click to Preview Image</CustomButton>

                            <div className="imgPlaceholder">
                                {mainImageLink && (
                                    <img className="image" src={isGoogleDriveLink ? formatGoogleDriveLink(mainImageLink) : mainImageLink} alt={"Rendering image failed. Please double check your url. (TIP: when you paste the link to your tab, only the image should show up.)"} />
                                )}
                            </div>
                        </div>

                        <div className="right">

                            <Form.Group id="title">
                                <Form.Label>Title *</Form.Label>                        
                                <Form.Control type="text" ref={titleRef} required />
                            </Form.Group>

                            {/* <Form.Group id="mainImage">
                                <Form.Label>Main Image URL *</Form.Label>
                                <Form.Control type="text" ref={mainImageRef} required />
                            </Form.Group> */}

                            <Form.Group id="body">
                                <Form.Label>Body *</Form.Label>
                                <Form.Control as="textarea" type="text" style={{ height: '400px' }}  ref={bodyRef} required />
                            </Form.Group>

                            <CustomButton disabled={loading} type="submit" buttonStyle="primary" buttonDetail="default-size" marginTop="20px">Upload</CustomButton>
                        </div>
                    </Form>
            
                </div>
            </main>
        </div>
        
    );
}
