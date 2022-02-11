import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadingBox from '../../components/Utils/LoadingBox';
import QuantityBox from '../../components/Utils/QuantityBox';
import CustomButton from "../../components/Buttons/CustomButton";
import { getProductInfo } from '../../reducers/productsReducer';

import PlaceholderBox from "../../components/Utils/PlaceholderBox";

import Footer from '../../components/Footer';

import "./DetailPages.css";
import { Col, Row } from 'react-bootstrap';
import ChooseQuantityBox from '../../components/Utils/ChooseQuantityBox';
import { addItem } from '../../reducers/cartReducer';
        

export default function ProductDetailPage(props) {
    const dispatch = useDispatch();

    const productId = props.match.params.productId;
    
    const [productInfo, setProductInfo] = useState(undefined);
    const [quantity, setQuantity] = useState(1);
    const [updating, setUpdating] = useState(false);


    useEffect(() => {
        dispatch(getProductInfo(productId)).then((res) => setProductInfo(res));
    }, []);

    const handleAddCart = (quantity) => {
        setUpdating(true);
        dispatch(addItem(productId, quantity)).then((res) => setUpdating(false));
    }

    console.log(productInfo?.description);

    return (
        <div className="marginTop productDetailPage" >
            <main>
                <div className="productShowing marginHorizontal">
                    <Row xs={1} md={2}>
                        <Col className="image-section">
                            {productInfo?.mainImage
                                ? <img className="image" alt="product-image" src={productInfo.mainImage} />
                                : <div className="placeholder" />}
                        </Col>
                        <Col>
                            {productInfo?.brand
                                ? <div className="brand">{productInfo?.brand}</div>
                                : <PlaceholderBox page={true} size="subtitle" />}

                            {productInfo?.title
                                ? <div className="title">{productInfo?.title}</div>
                                : <PlaceholderBox page={true} size="title" />}

                            {productInfo?.price
                                ? <div className="price">{"$" + productInfo?.price}</div>
                                : <PlaceholderBox page={true} size="body" />}

                            {productInfo?.description
                                ? <div className="description">{productInfo?.description}</div>
                                : <PlaceholderBox page={true} size="body-lg" />}



                            <div className="quantity">
                                <h6>Quantity: </h6>
                                <ChooseQuantityBox 
                                    quantity={quantity} 
                                    setQuantity={setQuantity}
                                    handleUpdateButton={handleAddCart}
                                    updateButton={
                                        <CustomButton
                                            marginTop="15px"
                                            buttonDetail="default-size"
                                            // onClick={handleAddCart}
                                            disabled={updating}
                                        >
                                            Add To Cart
                                        </CustomButton>
                                    }/>
                            </div>

                        </Col>
                    </Row>
                </div>
            </main>
            {/* <div className="divider"></div> */}
            

            <Footer />
            
        </div>
    );
}
