import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerBlogs, getSellerProducts } from '../../reducers/sellerReducer';
import ManageProductCard from '../../components/Cards/ManageProductCard';
import { IconButton } from '../../components/Buttons/IconButton';
import { AddBlogPageRoute, AddListingPageRoute } from '../../utils/routes';
import ManageBlogCard from '../../components/Cards/ManageBlogCard';
import { getBlogs } from '../../reducers/blogsReducer';

export default function ManageBlogsPage(props) {
    const { blogs } = useSelector((state) => state);
    const dispatch = useDispatch();

    const allBlogs = blogs?.blogs;

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    const handleAddClick = () => {
        window.location.href = AddBlogPageRoute;
    }

    return (
        <div className="page-md horizontal-md manageListingsPage">
            <h2 className="vertical-sm">
                Add Blog
                <IconButton buttonIcon="add-btn" onClick={handleAddClick}/>
                {/* <div className={enableCarousel ? "selection" : "selection hide"}>
                    <i className={"fas fa-angle-left " + (rowPage === 0 && "disable")} onClick={() => { if (rowPage > 0) setRowPage(rowPage - 1) }}/>
                    <i className={"fas fa-angle-right " + (rowPage === 2 && "disable")} onClick={() => { if (rowPage < 2) setRowPage(rowPage + 1) }}/>
                </div> */}
            </h2>
            <div className="vertical-sm">Note: <strong>only 1 main blog and 4 sub blog</strong> selected in order from the bottom</div>
            
            <div className="product-title"><ManageBlogCard title={true} /></div>
            {allBlogs?.map((blog, index) => ( 
                <ManageBlogCard key={index} index={index} blog={blog} last={index == allBlogs?.length - 1} />
            ))}
        </div>
);
}
