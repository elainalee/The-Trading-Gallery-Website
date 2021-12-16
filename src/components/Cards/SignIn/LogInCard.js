import React, { useRef, useState } from 'react';
import {
    Form, Card, Alert, Button
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { CustomButton } from '../../Buttons/CustomButton/CustomButton';
import { useAuth } from '../../../contexts/AuthContext';
import './SignIn.css';
import { useDispatch, useSelector } from 'react-redux';
import { ERROR, SUCCESS } from '../../../utils/constants';
import { logIn } from '../../../reducers/authReducer';


export default function LogInCard() {
    const state = useSelector((state) => state);
    const user = state.user;

    console.log("in login: ", user);
    // console.log("in login: ", user.user.email);

    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();
    const { logInFB } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    // async function handleSubmit(e) {
    //     e.preventDefault();

    //     try {
    //         setError('');
    //         setLoading(true);
    //         await logInFB(emailRef.current.value, passwordRef.current.value);
    //         history.push('/');
    //     } catch (msg) {
    //         setError(`${msg}`);
    //     }
    //     setLoading(false);
    // }

    async function thisExample() {
        console.log("clicked");
        dispatch(logIn("ex1", "1111")).then((res) => {
            if (res === ERROR) {
                console.log("error logging in.")
            }
        });

    }

    async function handleSubmit(e) {
        e.preventDefault();

        setError('');
        setLoading(true);
        console.log("clicked");
        dispatch(logIn(emailRef.current.value, passwordRef.current.value))
            .then((res) => {
            if (res === SUCCESS) {
                console.log("signed in");
                history.push('/');
            } else {
                console.log("error logging in.")
            }
            setLoading(false);
        });
    }

    return (
        <>
        <div>{user.email}</div>
        <button onClick={thisExample}>
            BUTTTTTTTTON
        </button>
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
                    <CustomButton disabled={loading} type="submit" buttonStyle="btn--outline" buttonSize="btn--signin" buttonDetail="loginFB" marginTop="4px">Log In</CustomButton>
                  </Form>
                  <div className="w-100 text-center mt-4">
                      <Link to="/password-reset" className="links">Forgot password?</Link>
                  </div>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Need an account?
              {' '}
              <Link to="/signUp" className="links">Sign Up</Link>
          </div>
        </>
    );
}
