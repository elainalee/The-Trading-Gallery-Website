import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { Card, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CustomButton } from '../../components/Buttons/CustomButton/CustomButton';
import { useAuth } from '../../contexts/AuthContext';
import './SignIn.css';
import { getUser } from '../../reducers/userReducer';

export default function UserProfilePage() {
    const dispatch = useDispatch();
    
    const [error, setError] = useState('');
    const { currentUser, logOut } = useAuth();
    const history = useHistory();

    async function handleLogOut() {

        setError('');
        try {
            await logOut();
            history.pushState('/logIn');
        } catch {
            setError('Failed to log out');
        }
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
                    <strong>Email: </strong>
                    {currentUser.email}
                    <CustomButton buttonStyle="btn--outline" buttonSize="btn--signin" buttonDetail="userprofile" marginTop="10px" onClick={goToUpdateProfile}>Update Profile</CustomButton>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 links">
                <CustomButton buttonStyle="btn--link" onClick={handleLogOut} marginTop="10px">Log Out</CustomButton>
            </div>
        </>
    );
}
