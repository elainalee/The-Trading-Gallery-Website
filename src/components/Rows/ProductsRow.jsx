import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../../components/Cards/ProductCard';
import { Col, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { IconButton } from '../Buttons/IconButton';
import { useSelector } from 'react-redux';
import { AddListingPageRoute, ShopPageRoute } from '../../utils/routes';
import { useHistory } from 'react-router-dom';

import '../../utils/globalStyles.css';
import "./TGGRows.css";

export default function ProductsRow(props) {
    const history = useHistory();
    
    const { seller } = useSelector((state) => state);
    const currentSeller = seller?.seller;

    const rowPageRef = useRef();
    const [rowPage, setRowPage] = useState(0);
    const [isMobile, setIsMobile] = useState(window?.innerWidth <= 767);

    const enableCarousel = props.enableCarousel;
    const productsToDisplay = props.products ?? [...Array(props.placeholderNumbers)];

    const handleResize = () => {
        setIsMobile(window?.innerWidth <= 767);
    }

    const handleTitleOnClick = () => {
        window.location.href = ShopPageRoute;
    }

    const handleAddClick = () => {
        history.push(AddListingPageRoute);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    useEffect(() => {
        rowPageRef.current.swiper.slideTo(rowPage);
    }, [rowPage]);


    return (
        <div className="productsRow">
            <h2 className="vertical-sm">
                {props.title}
                {currentSeller && (
                    <IconButton buttonIcon="add-btn" onClick={handleAddClick}/>
                )}
                <div className={enableCarousel ? "selection" : "selection hide"}>
                    <i className={"fas fa-angle-left " + (rowPage === 0 && "disable")} onClick={() => { if (rowPage > 0) setRowPage(rowPage - 1) }}/>
                    <i className={"fas fa-angle-right " + (rowPage === 2 && "disable")} onClick={() => { if (rowPage < 2) setRowPage(rowPage + 1) }}/>
                </div>
            </h2>

            <Swiper
                className={enableCarousel ? "carousel" : "carousel hide"}
                spaceBetween={50}
                slidesPerView={isMobile ? 1 : 3}
                // centeredSlide={isMobile}
                ref={rowPageRef}
                onSlideChange={(info) => setRowPage(info.activeIndex)}
                >
                    {productsToDisplay.map((product, index) => ( 
                        <SwiperSlide key={index}><ProductCard product={product} /></SwiperSlide>
                    ))}
            </Swiper>

            <div className={enableCarousel ? "productCards hide" : "productCards"}>
                <Row xs={1} md={3} lg={5} >
                    {productsToDisplay.map((product, index) => ( 
                        <Col key={index}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}