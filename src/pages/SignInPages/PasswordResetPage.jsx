import React, { useRef, useState } from 'react';
import {
 Form, Card, Alert,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components/Buttons/CustomButton';
import { checkResetCode, requestForResetCode, resetPassword } from '../../reducers/authReducer';
import { SUCCESS } from '../../utils/constants';

import '../../utils/globalStyles.css';
import { LogInRoute } from '../../utils/routes';

export default function PasswordResetPage() {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const codeRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const [stage, setStage] = useState(0);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setMessage('');
            setLoading(true);
            if (stage === 0) {
                dispatch(requestForResetCode(emailRef?.current?.value))
                .then((res) => {
                    if (res === SUCCESS) {
                        setStage(1);
                        setMessage("The code has been sent to the email address. Please check your inbox.");
                    } else {
                        setError(res);
                    }
                    setLoading(false);
                });
            } else if (stage === 1) {
                dispatch(checkResetCode(emailRef?.current?.value, codeRef?.current?.value))
                .then((res) => {
                    if (res === SUCCESS) {
                        setStage(2);
                    } else {
                        setError(res);
                    }
                    setLoading(false);
                });
            } else if (stage === 2) {
                dispatch(resetPassword(emailRef?.current?.value, codeRef?.current?.value, passwordRef?.current?.value))
                .then((res) => {
                    if (res === SUCCESS) {
                        setStage(3);
                    } else {
                        setError(res);
                    }
                    setLoading(false);
                });
            }
        } catch (msg) {
            setError(`${msg}`);
        }
        setLoading(false);
    }

    return (
        <div className="vertical-lg">
          <Card>
              <Card.Body>
                <h2 className="text-center mb-4">
                    {stage === 1
                        ? "Enter Code"
                        : stage === 2
                            ? ""
                            : "Password Reset"}
                </h2>

                  {error && <Alert variant="danger">{error}</Alert>}
                  {message && <Alert variant="success">{message}</Alert>}
                  {stage === 3
                    ? <div>
                        The password has been resetted.
                    </div>
                    : <Form onSubmit={handleSubmit}>
                        {(stage === 1)
                        ? (<Form.Group id="reset-code" className="mb-3">
                            <Form.Label>Reset Code</Form.Label>
                            <Form.Control type="password" ref={codeRef} required />
                        </Form.Group>)
                        : (stage === 2)
                            ? (<Form.Group id="reset-password" className="mb-3">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>)
                            : (<Form.Group id="email" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>)}
                        
                        <CustomButton disabled={loading} type="submit" buttonStyle="outline" buttonDetail="default-size" marginTop="4px">Reset Password</CustomButton>
                    </Form>}
                  
                  <div className="w-100 text-center mt-4">
                      {' '}
                      <Link to={LogInRoute} className="emphasis-links no-underline">Back to Log In</Link>
                  </div>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Need an account?
              {' '}
              <Link to={LogInRoute} className="emphasis-links no-underline">Sign Up</Link>
          </div>
        </div>
    );
}
