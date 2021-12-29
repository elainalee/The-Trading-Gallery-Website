import React, { useRef, useState } from 'react';
import {
    Form, Card, Alert
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components/Buttons/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { SUCCESS } from '../../utils/constants';
import { logIn, logInSeller } from '../../reducers/authReducer';

import '../../utils/globalStyles.css';
import { PasswordResetRoute, SignUpRoute } from '../../utils/routes';


export default function LogInPage() {
    const state = useSelector((state) => state);
    const user = state.user;

    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const isSellerEmail = (email) => {
        return email.split("@")?.[1] === "seller";
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
            dispatch(logIn(emailRef.current.value, passwordRef.current.value))
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
        <div className="userPages">
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Log In</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} required />
                      </Form.Group>
                      <Form.Group id="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" ref={passwordRef} required />
                      </Form.Group>
                    <CustomButton disabled={loading} type="submit" buttonStyle="outline" buttonDetail="userpages updateprofile">Log In</CustomButton>  
                  </Form>
                  {/* <div className="w-100 text-center mt-4">
                      <Link to={PasswordResetRoute} className="links">Forgot password?</Link>
                  </div> */}
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Need an account?
              {' '}
              <Link to={SignUpRoute} className="links">Sign Up</Link>
          </div>
        </div>
    );
}
