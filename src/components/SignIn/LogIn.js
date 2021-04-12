import React, { useRef, useState } from 'react';
import {
 Form, Button, Card, Alert,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function LogIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { logIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    // eslint-disable-next-line consistent-return
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await logIn(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch {
            setError('Failed to sign in');
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
                      <Button disabled={loading} type="submit" className="w-100">Log In</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Need an account?
              {' '}
              <Link to="/signUp">Sign Up</Link>
          </div>
        </>
    );
}
