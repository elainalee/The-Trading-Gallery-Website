import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadingBox from '../../components/Utils/LoadingBox';
import QuantityBox from '../../components/Utils/QuantityBox';
import CustomButton from "../../components/Buttons/CustomButton";
import { getProductInfo } from '../../reducers/productsReducer';

import Footer from '../../components/Footer';

import "./DetailPages.css";
import { Col, Row } from 'react-bootstrap';
        

export default function ProductDetailPage(props) {
    const dispatch = useDispatch();

    const productId = props.match.params.productId;
    
    const [productInfo, setProductInfo] = useState(undefined);


    useEffect(() => {
        dispatch(getProductInfo(productId)).then((res) => setProductInfo(res));
    }, []);

    const handleAddCart = () => {

    }

    if (productInfo === undefined) {
        return <LoadingBox />;
    }

    return (
        <div className="marginTop productDetailPage" >
            <main>
                <div className="productShowing marginHorizontal">
                    <Row xs={1} md={2}>
                        <Col>
                            <img className="image" src={productInfo.mainImage} />

                        </Col>
                        <Col>
                            <div className="brand">
                                {productInfo.brand}
                            </div>

                            <div className="title">
                                {productInfo.title}
                            </div>

                            <div className="price">
                                {"$" + productInfo.price}
                            </div>

                            <div className="description">
                                {productInfo.description}
                            </div>

                            <div className="quantity">
                                <h6>Quantity: </h6>
                                <QuantityBox quantity="1" />
                            </div>

                            <CustomButton
                                marginTop="15px"
                                buttonDetail="default-size"
                                onClick={handleAddCart}>
                                Add To Cart
                            </CustomButton>

                        </Col>
                    </Row>
                </div>
            </main>
            {/* <div className="divider"></div> */}
            

            <Footer />
            
        </div>
    );
}
