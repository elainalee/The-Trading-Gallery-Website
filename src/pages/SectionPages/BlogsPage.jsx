import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BlogsRow from '../../components/Rows/BlogsRow';
import { getBlogs } from '../../reducers/blogsReducer';

export default function BlogsPage() {

    const dispatch = useDispatch();

    const { blogs } = useSelector((state) => state);

    const allBlogs = blogs.blogs;

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    return (
        <div className="vertical-md horizontal-md">
            <BlogsRow blogs={allBlogs} title="THE TRADING GALLERY BLOGS" placeholderNumbers={8}/>
        </div>        
    );
}
