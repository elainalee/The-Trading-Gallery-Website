import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton } from '../../components/Buttons/IconButton';
import Footer from '../../components/Footer';
import BlogsRow from '../../components/Rows/BlogsRow';
import { getBlogs } from '../../reducers/blogsReducer';
import { AddBlogPageRoute } from '../../utils/routes';

export default function BlogPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const { blogs } = useSelector((state) => state);

    const allBlogs = blogs.blogs;

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    const handleAddClick = () => {
        history.push(AddBlogPageRoute);
    }


    return (
        <div className="marginTop listingsPage">
            <div className="marginHorizontal">
                <div className="myProductsTitle">
                    <h2>All Blogs</h2>
                    <IconButton buttonIcon="add-btn" onClick={handleAddClick}/>
                </div>
                <BlogsRow blogs={allBlogs} placeholderNumbers={8}/>
                {/* <ProductsRow products={sellerProducts} placeholderNumbers={8}/> */}
            </div>

            <Footer />
        </div>        
    );
}
