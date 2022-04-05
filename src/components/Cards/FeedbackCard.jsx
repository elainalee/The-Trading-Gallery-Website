import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { formatDateToClient } from "../../utils/Helper";
import PlaceholderBox from "../Utils/PlaceholderBox";

import "../../utils/globalStyles.css";
import './FeedbackCard.css';
import { Modal } from "react-bootstrap";
import Text from "../Basics/Text";

export function ModalBody(props) {
    const feedback = props.feedback;

    return (
        <div className="feedbackCard">
            <div className="modalBody">
                {feedback?.message}
            </div>
        </div>  
    );
}

export default function FeedbackCard(props) {
    const feedback = props.feedback;

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <Card className="feedbackCard">
            <Modal 
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} 
                onHide={handleClose} 
                dialogClassName="feedback-modal"
            >
                <Modal.Header closeButton>
                    <div>
                        <Modal.Title>
                            {feedback?.subject}
                        </Modal.Title>
                        <div>
                            {feedback?.lastName + ', ' + feedback?.firstName + ' (' + feedback?.email + ')'}
                        </div>
                        <div>
                            {formatDateToClient(feedback?.createdAt)}
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className="body">
                    <ModalBody feedback={feedback} />
                </Modal.Body>
            </Modal>

            <Card.Body onClick={handleShow} className="body">
                {feedback?.subject
                    ? <Card.Title className="cardTitle">{feedback?.subject}</Card.Title>
                    : <PlaceholderBox page={false} size="title" />}
                {feedback?.createdAt
                    ? <Card.Subtitle className="cardSubtitle">{formatDateToClient(feedback?.createdAt)}</Card.Subtitle>
                    : <PlaceholderBox page={false} size="subtitle" />}

                {feedback
                    ? <Card.Subtitle className="cardSubtitle">
                        {feedback?.lastName + ', ' + feedback?.firstName + ' (' + feedback?.email + ')'}
                    </Card.Subtitle>
                    : <PlaceholderBox page={false} size="subtitle" />}
                
                <Text numberOfLines={1}>
                    {feedback?.message}
                </Text>

            </Card.Body>
        </Card>
        
    );
}
