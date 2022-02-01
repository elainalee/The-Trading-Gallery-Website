import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer';

import "./InfoPages.css";
import { ADDRESS, ADDRESS_GOOGLE_MAP, ADDRESS_PICKUP, ADDRESS_SECTION_1, ADDRESS_SECTION_2, PICKUP, PICKUP_SECTION } from '../../utils/contents';

export default function AddressPickupPage() {

    return (
        <div className="marginTop infoPages">
            <main>
                <div className="section">             
                    <div className="title">{ADDRESS_PICKUP}</div>
                    <div className="body">{ADDRESS_SECTION_1}</div>
                    <div className="body">{ADDRESS_SECTION_2}</div>
                </div>

                <div className="section">             
                    <div className="title"><a href={ADDRESS_GOOGLE_MAP} rel="noreferrer" target="_blank" className="underline link">{ADDRESS}</a></div>
                </div>

                <div className="section">             
                    <div className="title">{PICKUP}</div>
                    <div className="body">{PICKUP_SECTION}</div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
