import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { Card, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CustomButton } from '../../components/Buttons/CustomButton/CustomButton';
import './SignIn.css';
import { getUser } from '../../reducers/userReducer';
import { logOut } from '../../reducers/authReducer';

export default function UserProfilePage() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state);
    const currentUser = state.user.user;
    console.log('--in UserProfilePage: ', currentUser);
    
    
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleLogOut() {

        setError('');
        dispatch(logOut()).then((res) => {
            history.push('/logIn');
        })
        // try {
        //     await logOut();
        //     history.pushState('/logIn');
        // } catch {
        //     setError('Failed to log out');
        // }
    }

    function goToUpdateProfile() {
        history.push('/update-profile');
    }
    

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div>
                        <strong>Name: </strong>
                        {currentUser.firstName + " " + currentUser.lastName}
                    </div>
                    <div>
                        <strong>Email: </strong>
                        {currentUser.email}
                    </div>
                    <CustomButton buttonStyle="btn--outline" buttonSize="btn--signin" buttonDetail="userprofile" marginTop="10px" onClick={goToUpdateProfile}>Update Profile</CustomButton>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 links">
                <CustomButton buttonStyle="btn--link" onClick={handleLogOut} marginTop="10px">Log Out</CustomButton>
            </div>
        </>
    );
}
