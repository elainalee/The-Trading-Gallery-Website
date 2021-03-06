import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '../../components/Cards/ProductCard';
import { Col, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { IconButton } from '../Buttons/IconButton';
import { AddListingPageRoute, ShopPageRoute } from '../../utils/routes';
import { useHistory } from 'react-router-dom';
import { getStatus } from '../../Axios/asyncStorage';

import '../../utils/globalStyles.css';
import "./TGGRows.css";
import CustomPagination from '../Utils/CustomPagination';

export default function ProductsRow(props) {
    const [status, setStatus] = useState(undefined);

    useEffect(async () => {
        let curStatus = await getStatus();
        setStatus(curStatus);
    }, []);

    const history = useHistory();

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
                {(status === "seller") ? "MY LISTINGS" : props.title}
                {(status === "seller") && (
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



                <Row xs={1} sm={2} md={4} lg={5} xl={7}>
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