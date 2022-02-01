import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer';

import "./InfoPages.css";
import { ABOUT_US, OUR_GOAL, OUR_GOAL_CONTENT, OUR_TEAM, OUR_TEAM_CONTENT, THE_TRADING_GALLERY } from '../../utils/contents';

export default function AboutPage() {

    return (
        <div className="marginTop infoPages">
            <main>
                <div className="section">             
                    <div className="title">{THE_TRADING_GALLERY}</div>
                    <div className="title">{ABOUT_US}</div>
                </div>

                <div className="section">             
                    <div className="title">{OUR_GOAL}</div>
                    <div className="body">{OUR_GOAL_CONTENT}</div>
                </div>

                <div className="section">             
                    <div className="title">{OUR_TEAM}</div>
                    <div className="body">{OUR_TEAM_CONTENT}</div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
