import React, { useEffect, useState } from 'react';

import { ABOUT_US, OUR_GOAL, OUR_GOAL_CONTENT, OUR_TEAM, OUR_TEAM_CONTENT, THE_TRADING_GALLERY } from '../../utils/contents';

import "../../utils/globalStyles.css";
import "./InfoPages.css";

export default function AboutPage() {

    return (
        <div className="page-lg horizontal-xl specialFont body-sm">
            <div className="vertical-md">
                <h2 className="sm">{THE_TRADING_GALLERY}</h2>
                <h2 className="sm">{ABOUT_US}</h2>
            </div>

            <div className="vertical-md">
                <h3>{OUR_GOAL}</h3>          
                <p>{OUR_GOAL_CONTENT}</p>
            </div>

            <div className="vertical-md">
                <h3>{OUR_TEAM}</h3>
                <p>{OUR_TEAM_CONTENT}</p>
            </div>
        </div>
    );
}
