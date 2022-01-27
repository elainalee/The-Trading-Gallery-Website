import React, { useRef, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import CustomButton from '../../components/Buttons/CustomButton';
import Footer from '../../components/Footer';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useDispatch } from 'react-redux';
import { submitFeedback } from '../../reducers/contentsReducer';
import { SUCCESS } from '../../utils/constants';

import "../../utils/globalStyles.css";
import "./AboutUsPages.css";
import { ContactPageRoute } from '../../utils/routes';
import { Link } from 'react-router-dom';

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
            firstNameRef.current.value, 
            lastNameRef.current.value,
            emailRef.current.value,
            subjectRef.current.value,
            messageRef.current.value))
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

    return (
        <div className="marginTop contactPage">
            <div className="marginHorizontal">
            <main>
                {submitted
                    ? (
                        <div>
                            <h2>Your information has been received.</h2>
                            <p>We will contact you as soon as possible. To submit another response, click <Link className="underline link" to={ContactPageRoute}>here</Link>.</p>
                        </div>)
                    : (
                        <div>
                            <div className="left">
                                <h2>We are here for you.</h2>
                                <p>How can we help? Send us a message!</p>

                                <h4>hello@theTradingGallery.ca</h4>
                            </div>

                            <div className="right">
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id="name">
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

                                    <Form.Group id="email">
                                        <Form.Label>Email *</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required />
                                    </Form.Group>

                                    <Form.Group id="subject">
                                        <Form.Label>Subject *</Form.Label>
                                        <Form.Control type="text" ref={subjectRef} required />
                                    </Form.Group>

                                    <Form.Group id="message">
                                        <Form.Label>Message *</Form.Label>
                                        <Form.Control as="textarea" type="text" style={{ height: '100px' }} ref={messageRef} required />
                                    </Form.Group>
                                    
                                    <CustomButton disabled={loading} type="submit" buttonStyle="primary" buttonDetail="contactUs" marginTop="20px">Send</CustomButton>
                                </Form>
                            </div>
                        </div>
                    )}
                </main>
            </div>
            
            <Footer />
        </div>
    );
}