import React, { useRef, useState } from 'react';
import {
    Form, Card, Alert,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { CustomButton } from '../Buttons/CustomButton/CustomButton';
import { useAuth } from '../../contexts/AuthContext';
import './SignIn.css';

export default function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { logIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await logIn(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch (msg) {
            setError(`${msg}`);
        }
        setLoading(false);
    }

    return (
        <>
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
                    <CustomButton disabled={loading} type="submit" buttonStyle="btn--outline" buttonSize="btn--signin" buttonDetail="login" marginTop="4px">Log In</CustomButton>
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
