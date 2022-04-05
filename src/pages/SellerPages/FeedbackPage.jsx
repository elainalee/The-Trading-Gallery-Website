import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeedbackCard from '../../components/Cards/FeedbackCard';
import { getFeedbacks } from '../../reducers/adminReducer';

import "../../utils/globalStyles.css";
import "./SellerPages.css";

export default function FeedbackPage() {
    const dispatch = useDispatch();

    const { admin } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getFeedbacks());
    }, []);


    return (
        <div className="vertical-md horizontal-md feedbackPage">

            <h2 className="vertical-sm">
                USER FEEDBACKS
            </h2>

            {admin?.feedbacks?.map((feedback, index) => (
                <FeedbackCard 
                    key={index}
                    feedback={feedback}
                />
            ))}
            
        </div>
        
    );
}
