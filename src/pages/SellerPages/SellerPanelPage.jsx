import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IconButton } from '../../components/Buttons/IconButton';
import Footer from '../../components/Footer';
import BlogsRow from '../../components/Rows/BlogsRow';
import ProductsRow from '../../components/Rows/ProductsRow';
import { getSellerBlogs, getSellerProducts } from '../../reducers/sellerReducer';

import "../../utils/globalStyles.css";
import { AddBlogPageRoute, AddListingPageRoute } from '../../utils/routes';
import "./SellerPages.css";

export default function SellerPanelPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [showProducts, setShowProducts] = useState(true);
    const [showBlogs, setShowBlogs] = useState(true);

    const { seller } = useSelector((state) => state);

    const sellerProducts = seller.products;
    const sellerBlogs = seller.blogs;

    useEffect(() => {
        dispatch(getSellerProducts());
        dispatch(getSellerBlogs());
    }, []);

    const handleAddProductClick = () => {
        history.push(AddListingPageRoute);
    }

    const handleAddBlogClick = () => {
        history.push(AddBlogPageRoute);
    }


    return (
        <div className="marginTop sellerPanelPage">
            <div className="horizontal-md">
                <div className="section">
                    <h2 className="title" onClick={() => setShowProducts(!showProducts)}>
                        My Products
                        <IconButton buttonIcon="add-btn" onClick={handleAddProductClick}/>
                    </h2>
                    {showProducts && (
                        <ProductsRow 
                            products={sellerProducts} 
                            placeholderNumbers={8}/>
                    )}
                </div>

                <div className="section">
                    <h2 className="title" onClick={() => setShowBlogs(!showBlogs)}>
                        My Blogs
                        <IconButton buttonIcon="add-btn" onClick={handleAddBlogClick}/>
                    </h2>
                    {showBlogs && (
                        <BlogsRow blogs={sellerBlogs} placeholderNumbers={8}/>
                    )}
                </div>

                
            </div>
        </div>
        
    );
}
