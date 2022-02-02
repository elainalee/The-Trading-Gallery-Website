import React, { useState } from 'react';
import { BANNER_FIRST, BANNER_FIRST_CONTENT, BANNER_SECOND, BANNER_SECOND_CONTENT, BANNER_THIRD, BANNER_THIRD_CONTENT } from '../../utils/contents';

import './Utils.css';

export default function Banner() {

    const [sectionNum, setSectionNum] = useState(0);

    return (
        <div className="banner grayBorderTop grayBorderBottom">

            <div className="title">A Little About Our Company </div>

            <div className="explanations">
                <div className={(sectionNum == 0) ? "section" : "section hide"}>
                    <div className="subTitle">{BANNER_FIRST}</div>
                    <div className="description">{BANNER_FIRST_CONTENT}</div>
                </div>

                <div className={(sectionNum == 1) ? "section" : "section hide"}>
                    <div className="subTitle">{BANNER_SECOND}</div>
                    <div className="description">{BANNER_SECOND_CONTENT}</div>
                </div>

                <div className={(sectionNum == 2) ? "section" : "section hide"}>
                    <div className="subTitle">{BANNER_THIRD}</div>
                    <div className="description">{BANNER_THIRD_CONTENT}</div>
                </div>
            </div>

            <div className="selection">
                <i className={"fas fa-angle-left " + (sectionNum === 0 && "disable")} onClick={() => { if (sectionNum > 0) setSectionNum(sectionNum - 1) }}/>
                <i className={"fas fa-angle-right " + (sectionNum === 2 && "disable")} onClick={() => { if (sectionNum < 2) setSectionNum(sectionNum + 1) }}/>
            </div>
        </div>
    );
}
