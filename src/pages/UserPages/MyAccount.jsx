import React, { useEffect, useState } from 'react';

import { Card, Container, Alert, Row, Col } from 'react-bootstrap';

import UpdateProfile from './UpdateProfile';
import RecentOrders from './RecentOrders';
import { Redirect, useHistory } from 'react-router-dom';
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
        <div className="marginTop myAccount">
            <Row>
                <Col md={3} className="selection">
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
