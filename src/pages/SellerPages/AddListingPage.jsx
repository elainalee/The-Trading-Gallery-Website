import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/Buttons/CustomButton';
import { ShopCategoryItems } from '../../components/NavBar/MenuItems';
import LoadingBox from '../../components/Utils/LoadingBox';
import { getProductInfo } from '../../reducers/productsReducer';
import { addUpdateSellerProduct } from '../../reducers/sellerReducer';
import { SUCCESS } from '../../utils/constants';

import "../../utils/globalStyles.css";
import { ShopPageRoute } from '../../utils/routes';
import "./SellerPages.css";

export default function AddListingPage(props) {
    const productId = props.match.params.productId;

    const [productInfo, setProductInfo] = useState({});

    useEffect(() => {
        dispatch(getProductInfo(productId)).then((res) => setProductInfo(res));
    }, [productId]);


    const dispatch = useDispatch();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        setError('');
        setLoading(true);
        dispatch(addUpdateSellerProduct(
            productId,
            productInfo
            ))
            .then((res) => {
            if (SUCCESS) {
                // console.log("product added");
                window.location.href = ShopPageRoute;
            } else {
                setError(res);
                // console.log("error adding the product.")
            }
            setLoading(false);
            });
    }

    return (
        <div className="vertical-md horizontal-md addPostPages addListingPage">
            <div className="productShowing">
            {error && <div className="failedMsg">{error + ". Please try again."}</div>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group id="titles" className="mb-3">
                        <Form.Check type="checkbox" checked={productInfo?.bestSeller} onChange={() => {setProductInfo({...productInfo, bestSeller: !productInfo.bestSeller})}} label="Do you want this to be best seller?" />
                    </Form.Group>

                    <Row>
                        <Col md={6} className="mb-5">
                            <Form.Group id="mainImage" className="mb-3">
                                <Form.Label>Main Image URL *</Form.Label>
                                <Form.Control type="text" value={productInfo?.mainImage || ""} onChange={e => setProductInfo({...productInfo, mainImage: e.target.value})} required />
                            </Form.Group>

                            <div className="imgPlaceholder">
                                {productInfo?.mainImage && (
                                    <img className="image" src={productInfo?.mainImage} alt={"Rendering image failed. Please double check your url. (TIP: when you paste the link to your tab, only the image should show up.)"} />
                                )}
                            </div>
                        </Col>
                        <Col md={6}>

                            <Form.Group id="category" className="mb-3">
                                <Form.Label>Category *</Form.Label>
                                <Form.Select className="form-control" id="category" value={productInfo?.categoryID ||""} onChange={e => setProductInfo({...productInfo, categoryID: e.target.value})}>
                                    {ShopCategoryItems.map((category, index) => {
                                        return category.map((subcategory, ind) => {
                                            return <option key={ind} value={subcategory.id}>{"(" + category[0].title + ") " + subcategory.title}</option>
                                        })
                                    })}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group id="title" className="mb-3">
                                <Form.Label>Product Name *</Form.Label>                        
                                <Form.Control type="text" value={productInfo?.title || ""} onChange={e => setProductInfo({...productInfo, title: e.target.value})} required />
                            </Form.Group>

                            <Form.Group id="brand" className="mb-3">
                                <Form.Label>Brand *</Form.Label>
                                <Form.Control type="text" value={productInfo?.brand || ""} onChange={e => setProductInfo({...productInfo, brand: e.target.value})} required />
                            </Form.Group>

                            <Form.Group id="title" className="mb-3">
                                <Form.Label>Total Quantity *</Form.Label>                        
                                <Form.Control type="number" min={0} value={productInfo?.quantity} onChange={e => setProductInfo({...productInfo, quantity: e.target.value})} required />
                            </Form.Group>

                            <Form.Group id="price" className="mb-3">
                                <Form.Label>Price *</Form.Label>
                                <Form.Control type="number" min="0" value={productInfo?.price || ""} onChange={e => setProductInfo({...productInfo, price: e.target.value})} required />
                            </Form.Group>

                            <Form.Group id="description" className="mb-3">
                                <Form.Label>Description *</Form.Label>
                                <Form.Control as="textarea" type="text" style={{ height: '400px' }} value={productInfo?.description || ""} onChange={e => setProductInfo({...productInfo, description: e.target.value})} required />
                            </Form.Group>

                            {/* <Form.Group id="tag">
                                <Form.Label>Tag (Make it searchable!)</Form.Label>
                                {productInfo?.tag && (
                                    <Form.Control type="text" value={productInfo?.brand || ""} onChange={e => setProductInfo({...productInfo, brand: e.target.value})} />    
                                )}
                                <Form.Control type="text" value={productInfo?.brand || ""} onChange={e => setProductInfo({...productInfo, brand: e.target.value})} />
                            </Form.Group> */}
                            
                            <CustomButton disabled={loading} type="submit" buttonStyle="primary" buttonDetail="default-size" marginTop="20px" marginBottom={"30px"}>
                                <span id="button-text">
                                    {loading ? <LoadingBox text="Uploading" /> : "Upload"}
                                </span>
                            </CustomButton>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
        
    );
}
