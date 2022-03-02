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
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

export default function LogInPage() {
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
        <div className="logInPage paddingHorizontal marginTop">
            <Row>
                <Col md={6} className="grayBorderRight">
                    <LogInForm />
                </Col>
                <Col md={6} className="">
                    <SignUpForm />
                </Col>
            </Row>
          
        </div>
    );
}
