import React, { useRef, useState } from 'react';
import {
 Form, Card, Alert,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { CustomButton } from '../../buttons/CustomButton/CustomButton';
import { useAuth } from '../../contexts/AuthContext';
import './SignIn.css';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    // eslint-disable-next-line consistent-return
    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
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
                  <h2 className="text-center mb-4">Sign Up</h2>
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
                      <Form.Group id="password-confirm">
                          <Form.Label>Password Confirmation</Form.Label>
                          <Form.Control type="password" ref={passwordConfirmRef} required />
                      </Form.Group>
                      <CustomButton disabled={loading} type="submit" buttonStyle="btn--outline" buttonSize="btn--signin" buttonDetail="signup" marginTop="4px">Sign Up</CustomButton>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Already have an account?
              {' '}
              <Link to="/logIn" className="links">Log In</Link>
          </div>
        </>
    );
}
