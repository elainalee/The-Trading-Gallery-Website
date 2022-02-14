import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton } from '../../components/Buttons/IconButton';
import Footer from '../../components/Footer';
import BlogsRow from '../../components/Rows/BlogsRow';
import { getBlogs } from '../../reducers/blogsReducer';
import { AddBlogPageRoute } from '../../utils/routes';

export default function BlogsPage() {

    const dispatch = useDispatch();

    const { blogs } = useSelector((state) => state);

    const allBlogs = blogs.blogs;

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    return (
        <div className="marginTop blogsPage">
            <main>
                <div className="marginHorizontal">
                    <BlogsRow blogs={allBlogs} title="THE TRADING GALLERY BLOGS" placeholderNumbers={8}/>
                </div>
            </main>
        </div>        
    );
}
