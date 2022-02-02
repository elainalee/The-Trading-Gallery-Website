import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { Card, Container, Alert } from 'react-bootstrap';

// import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CustomButton } from '../../components/Buttons/CustomButton';
import { getUser } from '../../reducers/userReducer';
import { logOut } from '../../reducers/authReducer';

import '../../utils/globalStyles.css';
import { LogInRoute, UpdateProfileRoute } from '../../utils/routes';

export default function UserProfilePage() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state);
    const currentUser = state.user.user;
    // console.log('--in UserProfilePage: ', currentUser);
    
    
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleLogOut() {

        setError('');
        dispatch(logOut()).then((res) => {
            history.push(LogInRoute);
        })
        // try {
        //     await logOut();
        //     history.pushState('/logIn');
        // } catch {
        //     setError('Failed to log out');
        // }
    }

    function goToUpdateProfile() {
        history.push(UpdateProfileRoute);
    }
    

    return (
        <div className="userPages">
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
                    <CustomButton buttonStyle="outline" buttonDetail="default-size" onClick={goToUpdateProfile}>Update Profile</CustomButton>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 links">
                <CustomButton buttonStyle="link" onClick={handleLogOut} marginTop="10px">Log Out</CustomButton>
            </div>
        </div>
    );
}
