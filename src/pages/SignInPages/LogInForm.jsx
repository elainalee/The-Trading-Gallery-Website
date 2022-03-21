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
import { PasswordResetRoute } from '../../utils/routes';
import LoadingBox from '../../components/Utils/LoadingBox';

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
                setError(res);
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
                setError(res);
                console.log("error logging in.")
            }
            setLoading(false);
            });
        }
    }

    return (
        <div className="logInForm">
            <div className="mb-4">
                <h2 className="text-center">Log In</h2>
                {error && <div className="failedMsg">{error + ". Please try again."}</div>}
            </div>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} isInvalid={error} required />
                </Form.Group>
                <Form.Group id="password" className="mb-3"> 
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} isInvalid={error} required />
                </Form.Group>

                <CustomButton disabled={loading} type="submit" buttonStyle="outline" buttonDetail="default-size">
                    <span id="button-text">
                        {loading ? <LoadingBox text="" /> : "Log In"}
                    </span>
                </CustomButton>

            </Form>
            {/* <div className="w-100 text-center mt-4">
              {' '}
              <Link to={PasswordResetRoute} className="emphasis-links">Forgot your Password?</Link>
          </div> */}
        </div>
    );
}
