import React, { useRef, useState } from 'react';
import {
 Form, Card, Alert,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../buttons/CustomButton/CustomButton';
import { useAuth } from '../../contexts/AuthContext';
import './SignIn.css';

export default function PasswordReset() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
        } catch (msg) {
            setError(`${msg}`);
        }
        setLoading(false);
    }

    return (
        <>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Password Reset</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  {message && <Alert variant="success">{message}</Alert>}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} required />
                      </Form.Group>
                      <CustomButton disabled={loading} type="submit" buttonStyle="btn--outline" buttonSize="btn--signin" buttonDetail="resetpw" marginTop="4px">Reset Password</CustomButton>
                  </Form>
                  <div className="w-100 text-center mt-4">
                      <Link to="/logIn" className="links">Log in</Link>
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
