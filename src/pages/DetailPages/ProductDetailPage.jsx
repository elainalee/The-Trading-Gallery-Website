import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from "../../components/Buttons/CustomButton";
import { getProductInfo } from '../../reducers/productsReducer';

import PlaceholderBox from "../../components/Utils/PlaceholderBox";
import LoadingBox from "../../components/Utils/LoadingBox";
import { Col, Row } from 'react-bootstrap';
import ChooseQuantityBox from '../../components/Utils/ChooseQuantityBox';
import { addItem } from '../../reducers/cartReducer';
import CartPopUp from '../../components/Utils/CartPopUp';
import { SUCCESS } from '../../utils/constants';
import { showCartPopUpTimeOut } from '../../utils/Helper';
        
import "./DetailPages.css";

export default function ProductDetailPage(props) {
    const dispatch = useDispatch();

    const productId = props.match.params.productId;
    
    const [productInfo, setProductInfo] = useState(undefined);
    const [quantity, setQuantity] = useState(1);
    const [updating, setUpdating] = useState(false);

    const [addToCartErr, setAddToCartErr] = useState(undefined);

    const [showCartPopup, setShowCartPopup] = useState(false);


    useEffect(() => {
        dispatch(getProductInfo(productId)).then((res) => setProductInfo(res));
    }, [productId]);


    const handleAddCart = () => {
        setUpdating(true);
        setAddToCartErr(undefined);
        dispatch(addItem(productId, quantity)).then((res) => {
            setUpdating(false);
            setAddToCartErr(res === SUCCESS ? undefined : res);
            setShowCartPopup(true);
            showCartPopUpTimeOut().then(() => {
                setShowCartPopup(false);
            })    
        });
    }

    return (
        <div className="vertical-lg horizontal-md productDetailPage" >
            {!updating && (
                <CartPopUp show={showCartPopup} product={productInfo} quantity={quantity} error={addToCartErr}/>
            )}

            <div className="productShowing">
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
                            <ChooseQuantityBox 
                                quantity={quantity} 
                                maxQuantity={productInfo?.quantity}
                                setQuantity={setQuantity}
                                seperateButton={true}
                            />

                            <CustomButton marginTop="15px" buttonDetail="default-size" onClick={handleAddCart} disabled={(productInfo?.quantity == 0) || updating}>
                                <span id="button-text">
                                    {(productInfo?.quantity == 0)  ? "OUT OF STOCK" : updating ? <LoadingBox text="Adding" /> : "Add To Cart"}
                                </span>
                            </CustomButton>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );
}
