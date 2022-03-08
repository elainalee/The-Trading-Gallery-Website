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
import LoadingBox from '../../components/Utils/LoadingBox';

export default function SignUpForm() {
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
            return setError('Passwords do not match. Please try again');
        }

        setError('');
        setLoading(true);

        const userInfo = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        dispatch(signUp(userInfo)).then((res) => {
            if (res === SUCCESS) {
                // console.log("registered user");
                // history.push(MyAccountRoute);
                window.location.href = MyAccountRoute;
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
                {error && <div className="failedMsg">{error + "."}</div>}
            </div>

            <Form onSubmit={handleSubmit}>
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

                <CustomButton disabled={loading} type="submit" buttonStyle="outline" buttonDetail="default-size" marginTop="4px">
                    <span id="button-text">
                        {loading ? <LoadingBox text="Signing Up..." /> : "Sign Up"}
                    </span>
                </CustomButton>
            </Form>
        </div>
    );
}
