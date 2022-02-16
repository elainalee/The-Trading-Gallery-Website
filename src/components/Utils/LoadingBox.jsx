import React from 'react';

export default function LoadingBox(props) {
    return (
        <div className="loadingBox">
            <i className="fa fa-spinner fa-spin" /> {props.text ?? "Loading..."}
        </div>
    );
}
