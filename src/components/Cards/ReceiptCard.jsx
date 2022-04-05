import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getReceiptDetail } from "../../reducers/paymentReducer";
import { PICKED_UP, PROCESSING, READY_FOR_PICKUP, RECEIVED, SHIPPED } from "../../utils/constants";

import "../../utils/globalStyles.css";
import { formatDateToClient } from "../../utils/Helper";
import { ReceiptPageRoute } from "../../utils/routes";
import PlaceholderBox from "../Utils/PlaceholderBox";

import './ReceiptCard.css';

export default function ReceiptCard(props) {
    const dispatch = useDispatch();
    const receiptID = props.receiptID;

    const [receiptInfo, setReceiptInfo] = useState(undefined);

    useEffect(() => {
        dispatch(getReceiptDetail(receiptID)).then((res) => setReceiptInfo(res));
    }, [receiptID]);


    return (
        <Link to={`${ReceiptPageRoute}/${receiptID}`} className={"links"} style={{ textDecoration: "none" }}>
            <Card className="receiptCard">
                <Card.Body>
                    {receiptInfo?.createdAt
                        ? <Card.Title className="cardTitle">{"Order Date: " + formatDateToClient(receiptInfo?.createdAt)}</Card.Title>
                        : <PlaceholderBox page={false} size="title" />}

                    {receiptInfo?._id
                        ? <Card.Subtitle className="cardSubtitle">{"Order #: " + receiptInfo?._id}</Card.Subtitle>
                        : <PlaceholderBox page={false} size="subtitle" />}
                    
                    {receiptInfo?.amount?.total
                        ? <Card.Subtitle className="cardSubtitle">{"Order Total: $" + receiptInfo?.amount?.total?.toFixed(2)}</Card.Subtitle>
                        : <PlaceholderBox page={false} size="subtitle" />}
                    
                    {receiptInfo
                        ? <Card.Subtitle className="cardSubtitle">
                            {"Status: "}
                            <div className={`statusText ${receiptInfo?.paid ? receiptInfo?.processed ? "processed" : receiptInfo?.received ? "received" : "processing" : "unpaid"}`}>
                                {receiptInfo?.paid
                                    ? receiptInfo?.shippingChoice
                                        ? receiptInfo?.processed ? receiptInfo?.received ? RECEIVED : SHIPPED : PROCESSING
                                        : receiptInfo?.processed ? receiptInfo?.received ? PICKED_UP : READY_FOR_PICKUP : PROCESSING
                                    : "NOT PAID"}
                            </div>
                            </Card.Subtitle>
                        : <PlaceholderBox page={false} size="subtitle" />}
                </Card.Body>
            </Card>      
        </Link>
        
    );
}
