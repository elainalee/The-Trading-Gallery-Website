import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton } from '../../components/Buttons/IconButton';
import Footer from '../../components/Footer';
import BlogsRow from '../../components/Rows/BlogsRow';
import { getBlogs } from '../../reducers/blogsReducer';
import { getReceiptDetail } from '../../reducers/paymentReducer';

export default function ReceiptPage(props) {
    const dispatch = useDispatch();
    const receiptId = props.match.params.receiptId;

    const [receiptDetail, setReceiptDetail] = useState(undefined);

    console.log("receiptDetail" , receiptDetail);

    useEffect(() => {
        dispatch(getReceiptDetail(receiptId)).then((res) => setReceiptDetail(res));
    }, [receiptId]);


    return (
        <div className="">
            Payment was successful!
        </div>        
    );
}
