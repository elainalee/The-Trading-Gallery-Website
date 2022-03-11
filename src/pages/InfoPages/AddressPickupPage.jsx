import React, { useEffect, useState } from 'react';

import "./InfoPages.css";
import { ADDRESS_GOOGLE_MAP, ADDRESS_PICKUP, ADDRESS_SECTION_1, ADDRESS_SECTION_2, PICKUP, PICKUP_SECTION, TTG_ADDRESS } from '../../utils/contents';

export default function AddressPickupPage() {

    return (
        <div className="vertical-lg horizontal-lg specialFont body-sm">
            <div className="vertical-sm">
                <h2 className="sm">{ADDRESS_PICKUP}</h2>
                <p>{ADDRESS_SECTION_1}</p>
                <p>{ADDRESS_SECTION_2}</p>
            </div>

            <div className="vertical-sm">
                <h2 className="sm"><a href={ADDRESS_GOOGLE_MAP} rel="noreferrer" target="_blank" className="underline link">{TTG_ADDRESS}</a></h2>
            </div>

            <div className="vertical-sm">
                <h2 className="sm">{PICKUP}</h2>
                <p>{PICKUP_SECTION}</p>
            </div>
        </div>
    );
}
