import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { Card, Container, Alert } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import CustomButton from '../../components/Buttons/CustomButton';
import Footer from '../../components/Footer';
import { logOut } from '../../reducers/authReducer';
import { LogInRoute } from '../../utils/routes';

export default function SellerProfilePage() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const state = useSelector((state) => state);
    const currentSeller = state.seller.seller;

    async function handleLogOut() {

        dispatch(logOut()).then((res) => {
            history.push(LogInRoute);
        })
    }

    return (
        <div className="userPages">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    <div>
                        <strong>Email: </strong>
                        {currentSeller?.email}
                    </div>
                    {/* <div>
                        <strong>Email: </strong>
                        {currentUser.email}
                    </div> */}
                    {/* <CustomButton buttonStyle="outline" buttonDetail="userpages userprofile" onClick={goToUpdateProfile}>Update Profile</CustomButton> */}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 links">
                <CustomButton buttonStyle="link" onClick={handleLogOut} marginTop="10px">Log Out</CustomButton>
            </div>
        </div>
    );
}