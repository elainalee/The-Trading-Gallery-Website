/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import {
 Form, Button, Card, Alert,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { CustomButton } from '../../components/Buttons/CustomButton';
import { updateUser } from '../../reducers/userReducer';
import { SUCCESS } from '../../utils/constants';

import '../../utils/globalStyles.css';
import { ProfileRoute } from '../../utils/routes';

export default function UpdateProfile() {
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    // const passwordRef = useRef();
    // const passwordConfirmRef = useRef();


    const state = useSelector((state) => state);
    const currentUser = state.user.user;

    const dispatch = useDispatch();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    // eslint-disable-next-line consistent-return
    function handleSubmit(e) {
        e.preventDefault();

        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //     return setError('Passwords do not match');
        // }

        setLoading(true);
        setError('');

        const userInfo = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
        }

        dispatch(updateUser(userInfo))
            .then((res) => {
                if (res === SUCCESS) {
                    history.push('/');
                } else {
                    setError(res);
                }
            });
    }

    function goToUserProfile() {
        history.push(ProfileRoute);
    }

    return (
        <div className="userPages">
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Update Profile</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="first-name">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="text" ref={firstNameRef} required defaultValue={currentUser.firstName} />
                      </Form.Group>
                      <Form.Group id="last-name">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="text" ref={lastNameRef} required defaultValue={currentUser.lastName} />
                      </Form.Group>
                      <Form.Group id="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                      </Form.Group>
                      {/* <Form.Group id="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
                      </Form.Group>
                      <Form.Group id="password-confirm">
                          <Form.Label>Password Confirmation</Form.Label>
                          <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" />
                      </Form.Group> */}
                      <CustomButton disabled={loading} type="submit" buttonStyle="outline" buttonDetail="userpages updateprofile">Update</CustomButton>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2 links">
              <CustomButton buttonStyle="link" onClick={goToUserProfile} marginTop="10px">Cancel</CustomButton>
          </div>
        </div>
    );
}
