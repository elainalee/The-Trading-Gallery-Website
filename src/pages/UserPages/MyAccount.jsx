import React, { useEffect, useState } from 'react';

import { Card, Container, Alert, Row, Col } from 'react-bootstrap';

import UpdateProfile from './UpdateProfile';
import RecentOrders from './RecentOrders';
import { useHistory } from 'react-router-dom';
import { AccountInfoSubRoute, MyAccountRoute, RecentOrdersSubRoute } from '../../utils/routes';
import { useDispatch, useSelector } from 'react-redux';

import '../../utils/globalStyles.css';
import './UserPages.css';

export default function MyAccountPage(props) {
    const type = '/' + props?.match?.params?.type;
    const dispatch = useDispatch();
    const history = useHistory();
    
    const selections = [{ route: AccountInfoSubRoute, name: "Account Information" }, { route: RecentOrdersSubRoute, name: "Recent Orders" }];

    return (
        <div className="vertical-md myAccount">
            <Row className="w-100">
                <Col md={3} className="selection grayBorderRight">
                    {selections.map((selection, index) => (
                        <div key={index} className="title links" onClick={() => { history.push(MyAccountRoute + selection.route); }}>
                            {selection.name}
                        </div>
                    ))}
                </Col>
                <Col md={9} className="info">
                    {type === AccountInfoSubRoute && <UpdateProfile />}
                    {type === RecentOrdersSubRoute && <RecentOrders />}
                </Col>
            </Row>
            
        </div>
    );
}
