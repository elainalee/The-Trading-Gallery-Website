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
import { LogInRoute } from '../../utils/routes';

export default function SignUpPage() {
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
                    console.log("registered user");
                    history.push('/');
                } else {
                    console.log("error logging in.")
                }
                setLoading(false);
            });
    }

    return (
        <div className="userPages">
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Sign Up</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="first-name">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" ref={firstNameRef} required />
                      </Form.Group>
                      <Form.Group id="last-name">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" ref={lastNameRef} required />
                      </Form.Group>
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
                      <CustomButton disabled={loading} type="submit" buttonStyle="outline" buttonDetail="userpages signup" marginTop="4px">Sign Up</CustomButton>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Already have an account?
              {' '}
              <Link to={LogInRoute} className="links">Log In</Link>
          </div>
        </div>
    );
}
