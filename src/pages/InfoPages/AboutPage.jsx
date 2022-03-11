import React, { useEffect, useState } from 'react';

import { ABOUT_US, OUR_GOAL, OUR_GOAL_CONTENT, OUR_TEAM, OUR_TEAM_CONTENT, THE_TRADING_GALLERY } from '../../utils/contents';

import "../../utils/globalStyles.css";
import "./InfoPages.css";

export default function AboutPage() {

    return (
        <div className="vertical-lg horizontal-xl infoPages">
            <div className="section marginBottom-section">             
                <div className="title">{THE_TRADING_GALLERY}</div>
                <div className="title">{ABOUT_US}</div>
            </div>

            <div className="section marginBottom-section">             
                <div className="title">{OUR_GOAL}</div>
                <div className="body marginTop-body">{OUR_GOAL_CONTENT}</div>
            </div>

            <div className="section marginBottom-section">
                <div className="title">{OUR_TEAM}</div>
                <div className="body marginTop-body">{OUR_TEAM_CONTENT}</div>
            </div>
        </div>
    );
}
