import React, { useRef, useState } from 'react';
import {
    Form, Card, Alert, Row, Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components/Buttons/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { SUCCESS } from '../../utils/constants';
import { logInUser, logInSeller } from '../../reducers/authReducer';

import '../../utils/globalStyles.css';
import './SignInPages.css';

export default function LogInForm() {
    const state = useSelector((state) => state);

    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const isSellerEmail = (email) => {
        return email.split("@")?.[1] === "thetradinggallery.ca";
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setError('');
        setLoading(true);
        if (isSellerEmail(emailRef.current.value)) {
            dispatch(logInSeller(emailRef.current.value, passwordRef.current.value))
            .then((res) => {
            if (res === SUCCESS) {
                window.location.href = '/';
            } else {
                console.log("error logging in.")
            }
            setLoading(false);
            });
        } else {
            dispatch(logInUser(emailRef.current.value, passwordRef.current.value))
            .then((res) => {
            if (res === SUCCESS) {
                console.log("signed in");
                window.location.href = '/';
            } else {
                console.log("error logging in.")
            }
            setLoading(false);
            });
        }
    }

    return (
        <div className="logInForm">
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password" className="mb-3"> 
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <CustomButton disabled={loading} type="submit" buttonStyle="outline" buttonDetail="default-size">Log In</CustomButton>  
            </Form>
        </div>
    );
}
