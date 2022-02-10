import React from 'react';

import './Utils.css';

export default function PlaceholderBox({ page, size }) {
    return (
        <div className="placeholderBox">
            <div className={page ? ("pagebox " + size) : ("cardbox " + size)} />
        </div>
    );
}
