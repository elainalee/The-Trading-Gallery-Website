import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoadingBox from '../../components/Utils/LoadingBox';
import QuantityBox from '../../components/Utils/QuantityBox';
import CustomButton from "../../components/Buttons/CustomButton";
import { getProductInfo } from '../../reducers/productsReducer';
import { getBlogDetail } from '../../reducers/blogsReducer';

import Footer from '../../components/Footer';

import "./DetailPages.css";
        

export default function BlogDetailPage(props) {
    const dispatch = useDispatch();

    const blogId = props.match.params.blogId;
    
    const [blogDetail, setBlogDetail] = useState(undefined);


    useEffect(() => {
        dispatch(getBlogDetail(blogId)).then((res) => setBlogDetail(res));
    }, []);


    if (blogDetail === undefined) {
        return <LoadingBox />;
    }

    return (
        <div className="marginTop blogDetailPage" >
            <main>
                <div className="title">{blogDetail.title}</div>

                <img className="image" src={blogDetail.mainImage} />

                <div className="body">{blogDetail.body}</div>
                {/* <div className="title">
                    {blogDetail.title}
                </div>
                <img className="image" src={blogDetail.mainImage} />
                <div className="title">
                    {blogDetail.body} */}
                {/* </div> */}
            </main>
            

            <Footer />
            
        </div>
    );
}
