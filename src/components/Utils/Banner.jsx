import React, { useEffect, useRef, useState } from 'react';
import { BANNER_FIRST, BANNER_FIRST_CONTENT, BANNER_SECOND, BANNER_SECOND_CONTENT, BANNER_THIRD, BANNER_THIRD_CONTENT } from '../../utils/contents';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import './Utils.css';

export default function Banner() {

    const sectionNumRef = useRef();
    const [sectionNum, setSectionNum] = useState(0);
    const [isMobile, setIsMobile] = useState(window?.innerWidth <= 767);

    const handleResize = () => {
        setIsMobile(window?.innerWidth <= 767);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    });

    useEffect(() => {
        sectionNumRef.current.swiper.slideTo(sectionNum);
      }, [sectionNum]);

    return (
        <div className="banner grayBorderTop grayBorderBottom">

            <div className="title">A Little About Our Company </div>

            <Swiper
                className={"explanations"}
                slidesPerView={isMobile ? 1 : 3}
                centeredSlide={true}
                ref={sectionNumRef}
                onSlideChange={(info) => setSectionNum(info.activeIndex)}
                >
                    <SwiperSlide>
                        <div className="section">
                            <div className="subTitle">{BANNER_FIRST}</div>
                            <div className="description">{BANNER_FIRST_CONTENT}</div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="section">
                            <div className="subTitle">{BANNER_SECOND}</div>
                            <div className="description">{BANNER_SECOND_CONTENT}</div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="section">
                            <div className="subTitle">{BANNER_THIRD}</div>
                            <div className="description">{BANNER_THIRD_CONTENT}</div>
                        </div>
                    </SwiperSlide>
            </Swiper>

            <div className="selection">
                <i className={"fas fa-angle-left " + (sectionNum === 0 && "disable")} onClick={() => { if (sectionNum > 0) setSectionNum(sectionNum - 1) }}/>
                <i className={"fas fa-angle-right " + (sectionNum === 2 && "disable")} onClick={() => { if (sectionNum < 2) setSectionNum(sectionNum + 1) }}/>
            </div>
        </div>
    );
}
