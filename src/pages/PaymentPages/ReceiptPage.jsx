import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton } from '../../components/Buttons/IconButton';
import Footer from '../../components/Footer';
import BlogsRow from '../../components/Rows/BlogsRow';
import { getBlogs } from '../../reducers/blogsReducer';
import { AddBlogPageRoute } from '../../utils/routes';

export default function ReceiptPage() {

    const dispatch = useDispatch();


    return (
        <div className="">
            Payment was successful!
        </div>        
    );
}
