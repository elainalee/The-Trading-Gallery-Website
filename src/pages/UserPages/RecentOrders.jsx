import React, { useEffect, useState } from 'react';

import { Card, Container, Alert, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import '../../utils/globalStyles.css';
import './UserPages.css';

export default function RecentOrders(props) {

    const state = useSelector((state) => state);
    const currentUser = state.user?.user;

    console.log(currentUser?.receipts);


    return (
        <div className="marginTop userPages">
            <div className="title">{"My orders"}</div>

            {currentUser?.receipts?.map((receipt, index) => (
                <div key={index}>{receipt}</div>
            ))}
            
        </div>
    );
}
