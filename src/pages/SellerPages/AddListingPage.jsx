import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/Buttons/CustomButton';
import { addSellerProduct } from '../../reducers/sellerReducer';
import { SUCCESS } from '../../utils/constants';

import "../../utils/globalStyles.css";
import { formatGoogleDriveLink } from '../../utils/Helper';
import "./SellerPages.css";

export default function AddListingPage() {
    const dispatch = useDispatch();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const brandRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const mainImageRef = useRef();
    const tagRef = useRef();

    const [isGoogleDriveLink, setIsGoogleDriveLink] = useState(false);
    const [mainImageLink, setMainImageLink] = useState(undefined);

    const { seller } = useSelector((state) => state);

    async function handleSubmit(e) {
        e.preventDefault();

        setError('');
        setLoading(true);
        dispatch(addSellerProduct(
            titleRef.current.value, 
            brandRef.current.value, 
            descriptionRef.current.value, 
            priceRef.current.value,
            isGoogleDriveLink ? formatGoogleDriveLink(mainImageLink) : mainImageLink
            ))
            .then((res) => {
            if (res === SUCCESS) {
                console.log("product added");
                window.location.href = '/';
            } else {
                console.log("error adding the product.")
            }
            setLoading(false);
            });
    }

    async function handleRenderImage(e) {
        e.preventDefault();
        setMainImageLink(mainImageRef?.current?.value);
    }


    return (
        <div className="marginTop addPostPages addListingPage">
            <main>
                <div className="productShowing marginHorizontal">
                        <Form onSubmit={handleSubmit}>
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
                                    <Form.Label>Product Name *</Form.Label>                        
                                    <Form.Control type="text" ref={titleRef} required />
                                </Form.Group>

                                <Form.Group id="brand">
                                    <Form.Label>Brand *</Form.Label>
                                    <Form.Control type="text" ref={brandRef} required />
                                </Form.Group>

                                <Form.Group id="price">
                                    <Form.Label>Price *</Form.Label>
                                    <Form.Control type="number" min="0" ref={priceRef} required />
                                </Form.Group>

                                <Form.Group id="description">
                                    <Form.Label>Description *</Form.Label>
                                    <Form.Control as="textarea" type="text" style={{ height: '400px' }}  ref={descriptionRef} required />
                                </Form.Group>

                                {/* <Form.Group id="tag">
                                    <Form.Label>Tag (Make it searchable!)</Form.Label>
                                    <Form.Control type="text" ref={tagRef} required />
                                </Form.Group> */}
                                
                                <CustomButton disabled={loading} type="submit" buttonStyle="primary" buttonDetail="default-size" marginTop="20px">Upload</CustomButton>
                            </div>
                        </Form>
                    
                </div>
            </main>
        </div>
        
    );
}
