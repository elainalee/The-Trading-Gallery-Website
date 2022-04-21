import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { Card, Container, Alert } from 'react-bootstrap';

import CustomButton from '../../components/Buttons/CustomButton';
import { logOut } from '../../reducers/authReducer';

export default function SellerProfilePage() {
    const dispatch = useDispatch();
    
    const state = useSelector((state) => state);
    const currentSeller = state.seller.seller;

    async function handleLogOut() {

        dispatch(logOut()).then((res) => {
            window.location.href = '/';
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
                <CustomButton buttonStyle="outline" onClick={handleLogOut} marginTop="10px">Log Out</CustomButton>
            </div>
        </div>
    );
}
