import React, { useRef, useState } from 'react';
import {
 Form, Card, Alert,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { CustomButton } from '../../components/Buttons/CustomButton';
import { useDispatch } from 'react-redux';
import { signUp } from '../../reducers/authReducer';
import { SUCCESS } from '../../utils/constants';

import '../../utils/globalStyles.css';
import { MyAccountRoute } from '../../utils/routes';

export default function SignUpForm() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const dispatch = useDispatch();

    // eslint-disable-next-line consistent-return
    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        setError('');
        setLoading(true);

        const userInfo = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        dispatch(signUp(userInfo))
            .then((res) => {
                if (res === SUCCESS) {
                    // console.log("registered user");
                    history.push(MyAccountRoute);
                } else {
                    setError(res);
                    console.log("error signing up.")
                }
                setLoading(false);
            });
    }

    return (
        <div className="signUpForm">

            <div className="mb-4">
            <h2 className="text-center">Sign Up</h2>
                {error && <div className="failedMsg">{error + ". Please try again."}</div>}
            </div>

            <Form onSubmit={handleSubmit}>
                {/* <Form.Group id="first-name" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" ref={firstNameRef} required />
                </Form.Group>
                <Form.Group id="last-name" className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" ref={lastNameRef} required />
                </Form.Group> */}
                <Form.Group id="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} isInvalid={error} required />
                </Form.Group>
                <Form.Group id="password-confirm" className="mb-3">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} isInvalid={error} required />
                </Form.Group>
                <CustomButton disabled={loading} type="submit" buttonStyle="outline" buttonDetail="default-size" marginTop="4px">Sign Up</CustomButton>
            </Form>
        </div>
    );
}
