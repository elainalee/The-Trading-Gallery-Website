import React from "react";

import "../../utils/globalStyles.css";
import './Text.css'

export default function Text({numberOfLines, children}) {
    console.log(`text numberOfLines${numberOfLines}`);
    return (
        <div className="text">
            <div className={`numberOfLines${numberOfLines}`}>
                {children}
            </div>
        </div>
    );
}
