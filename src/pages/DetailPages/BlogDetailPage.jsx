import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBlogDetail } from '../../reducers/blogsReducer';

import "./DetailPages.css";
        

export default function BlogDetailPage(props) {
    const dispatch = useDispatch();

    const blogId = props.match.params.blogId;
    
    const [blogDetail, setBlogDetail] = useState(undefined);

    useEffect(() => {
        dispatch(getBlogDetail(blogId)).then((res) => setBlogDetail(res));
    }, [blogId]);

    return (
        <div className="marginTop blogDetailPage" >
            <main>
                <div className="title">{blogDetail?.title}</div>

                {blogDetail?.mainImage  
                    ? (<img className="image" src={blogDetail.mainImage} />)
                    : (<div className="placeholder" />)}

                <div className="body">{blogDetail?.body}</div>
            </main>            
        </div>
    );
}
