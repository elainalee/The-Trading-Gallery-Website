import React from 'react';
import { Row, Col } from 'react-bootstrap';


import '../../utils/globalStyles.css';
import './SignInPages.css';
import LogInForm from './LogInForm';
import SignUpForm from './SignUpForm';

export default function LogInPage() {

    return (
        <div className="vertical-lg horizontal-md logInPage">
            <Row>
                <Col md={6} className="grayBorderRight">
                    <LogInForm />
                </Col>
                <Col md={6}>
                    <SignUpForm />
                </Col>
            </Row>
          
        </div>
    );
}
