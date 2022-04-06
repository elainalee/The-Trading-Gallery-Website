import React from "react";

import "../../utils/globalStyles.css";
import './OverflowText.css'

export default function OverflowText({numberOfLines, children}) {
    return (
        <div className="overflowText">
            <div className={`numberOfLines${numberOfLines}`}>
                {children}
            </div>
        </div>
    );
}
