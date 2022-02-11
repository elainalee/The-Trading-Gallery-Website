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
    const history = useHistory();

    const { seller, blogs } = useSelector((state) => state);
    const currentSeller = seller?.seller;

    const allBlogs = blogs.blogs;

    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    const handleAddClick = () => {
        history.push(AddBlogPageRoute);
    }


    return (
        <div className="marginTop blogsPage">
            <main>
                <div className="marginHorizontal">
                    <div className="myProductsTitle">
                        {currentSeller && (
                            <p className="title" onClick={handleAddClick}>Click to Add Listing<IconButton buttonIcon="add-btn" onClick={handleAddClick}/></p>
                        )}
                    </div>
                    <BlogsRow blogs={allBlogs} placeholderNumbers={8}/>
                </div>
            </main>
        </div>        
    );
}
