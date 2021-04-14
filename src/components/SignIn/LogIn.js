import React, { useRef, useState } from 'react';
import {
    Button, Form, Card, Alert,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { CustomButton } from '../../buttons/CustomButton/CustomButton';
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
                    <CustomButton>Log In</CustomButton>
                    <Button disabled={loading} type="submit" className="w-100 mt-3" style={{ backgroundColor: 'white', color: 'black', border: '1px solid #5c5959' }}>Log In</Button>
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
