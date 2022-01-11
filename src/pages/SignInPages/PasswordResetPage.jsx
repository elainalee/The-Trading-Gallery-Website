import React, { useRef, useState } from 'react';
import {
 Form, Card, Alert,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components/Buttons/CustomButton';

import '../../utils/globalStyles.css';
import { LogInRoute, SignUpRoute } from '../../utils/routes';

export default function PasswordResetPage() {
    const emailRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            // await resetPassword(emailRef.current.value);
            // setMessage('Check your inbox for further instructions');
            setMessage('This feature is not yet there. Please create an alternative account for further use.');
        } catch (msg) {
            setError(`${msg}`);
        }
        setLoading(false);
    }

    return (
        <div className="userPages">
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
                      <CustomButton disabled={loading} type="submit" buttonStyle="outline" buttonDetail="userpages resetpw" marginTop="4px">Reset Password</CustomButton>
                  </Form>
                  <div className="w-100 text-center mt-4">
                      <Link to={LogInRoute} className="links">Log in</Link>
                  </div>
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
