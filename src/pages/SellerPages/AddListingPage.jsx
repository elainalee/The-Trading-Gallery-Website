import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/Buttons/CustomButton';
import { addSellerProduct } from '../../reducers/sellerReducer';
import { SUCCESS } from '../../utils/constants';

import "../../utils/globalStyles.css";
import "./SellerPages.css";

export default function AddListingPage() {
    const dispatch = useDispatch();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const brandRef = useRef();
    const titleRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const tagRef = useRef();

    const [mainImage, setMainImage] = useState(undefined);

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
            mainImage))
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

    const hiddenFileInput = useRef();

    const handleAddImageClick = () => {
        hiddenFileInput.current.click();
    }

    const handleSelectPhoto = (event) => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded);
        setMainImage(fileUploaded);
    }


    return (
        <div className="marginTop addListingPage">
            <main>
                <div className="productShowing marginHorizontal">
                        <Form onSubmit={handleSubmit}>
                            <div className="left">
                                <Form.Group id="image">
                                    {mainImage 
                                        ? <img className="image" src={URL.createObjectURL(mainImage)} onClick={handleAddImageClick}/>
                                        : <div className="image" onClick={handleAddImageClick}>+</div>}
                                    <Form.Control type="file" onChange={handleSelectPhoto} multiple ref={hiddenFileInput} style={{display:'none'}} required />
                                </Form.Group>
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
                                
                                <CustomButton disabled={loading} type="submit" buttonStyle="primary" buttonDetail="productDetail" marginTop="20px">Upload</CustomButton>
                            </div>
                        </Form>
                    
                </div>
            </main>
        </div>
        
    );
}
