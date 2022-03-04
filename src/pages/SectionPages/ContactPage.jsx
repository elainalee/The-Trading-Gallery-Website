import React, { useRef, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/Buttons/CustomButton';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch } from 'react-redux';
import { submitFeedback } from '../../reducers/contentsReducer';
import { SUCCESS } from '../../utils/constants';
import { ContactPageRoute } from '../../utils/routes';
import { TTG_EMAIL } from '../../utils/contents';

import "../../utils/globalStyles.css";
import "./SectionPages.css";


export default function ContactPage() {
    const dispatch = useDispatch();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        setError('');
        setLoading(true);
        dispatch(submitFeedback(
            firstNameRef?.current?.value, 
            lastNameRef?.current?.value,
            emailRef?.current?.value,
            subjectRef?.current?.value,
            messageRef?.current?.value))
        .then((res) => {
            if (res === SUCCESS) {
                console.log("form submitted");
                setSubmitted(true);
            } else {
                setError(res);
                console.log("error submitting the form");
            }
            setLoading(false);
        });
    }

    const handleAnotherSubmitClick = () => {
        window.location.href = ContactPageRoute;
    }

    return (
        <div className="marginTop contactPage">
            <div className="marginHorizontal">
                {submitted
                    ? (
                        <div>
                            <div className="title">Your information has been received.</div>
                            <div className="body">We will contact you as soon as possible. To submit another response, click <Link className="underline link" onClick={handleAnotherSubmitClick} to={ContactPageRoute}>here</Link>.</div>
                        </div>)
                    : (
                        <div className="submitForm">
                            <Row >
                                <Col md={6} className="mb-3">
                                    <div className="title">What's Up?</div>
                                    <div className="subtitle">We’d love to hear from you,</div>
                                    <div className="body">
                                        We are always looking to grow and meet the standards of our clients. If you have any feedback, or need help, we encourage you to fill out the form.
                                    </div>

                                    <div className="sub-body">
                                    If you have questions don't hesitate to reach out to us at:
                                    </div>
                                    <div className="sub-body">
                                    Email: {TTG_EMAIL}
                                    </div>
                                    <div className="sub-body">
                                    Please allow 24-48 hours for us to get back to you. Thank you!
                                    </div>
                                </Col>
                                <Col md={6} className="form mb-3">
                                    {error && <Alert variant="danger">{error}</Alert>}
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group id="name" className="mb-3">
                                            <Row className="g-2">
                                                <Col>
                                                    <Form.Label>First Name *</Form.Label>
                                                    <Form.Control type="text" ref={firstNameRef} required />
                                                </Col>
                                                <Col>
                                                    <Form.Label>Last Name *</Form.Label>                        
                                                    <Form.Control type="text" ref={lastNameRef} required />
                                                </Col>
                                            </Row>
                                        </Form.Group>

                                        <Form.Group id="email" className="mb-3">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control type="email" ref={emailRef} required />
                                        </Form.Group>

                                        <Form.Group id="subject" className="mb-3">
                                            <Form.Label>Subject *</Form.Label>
                                            <Form.Control type="text" ref={subjectRef} required />
                                        </Form.Group>

                                        <Form.Group id="message" className="mb-3">
                                            <Form.Label>Message *</Form.Label>
                                            <Form.Control as="textarea" type="text" style={{ height: '100px' }} ref={messageRef} required />
                                        </Form.Group>
                                        
                                        <CustomButton disabled={loading} type="submit" buttonStyle="primary" buttonDetail="default-size" marginTop="20px" marginBottom="20px">Send</CustomButton>
                                    </Form>
                                </Col>
                            </Row>
                        </div>
                    )}
            </div>
        </div>
    );
}
