import React from 'react';
import ProductCard from '../../components/Cards/ProductCard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../utils/globalStyles.css';
import "./TGGRows.css";
import BlogCard from '../Cards/BlogCard';
import { AddBlogPageRoute } from '../../utils/routes';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconButton } from '../Buttons/IconButton';
import ReceiptCard from '../Cards/ReceiptCard';

export default function ReceiptsRow(props) {
    const state = useSelector((state) => state);
    const currentUser = state.user?.user;


    return (
        <div className="receiptsRow">
            {currentUser?.receipts?.map((receipt, index) => (
                <ReceiptCard key={index} receiptID={receipt} />
            ))}

        </div>
        
    );
}
