import React from 'react';
import './MessageBox.css';

export default function MessageBox(props) {
    console.log(props);
    return (
        <div className={`alert alert-${props.variant || 'error'}`}>
            {props.children}
        </div>
    );
}