import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/Buttons/CustomButton';
import LoadingBox from '../../components/Utils/LoadingBox';
import { getBlogDetail } from '../../reducers/blogsReducer';
import { addBlog, addUpdateSellerBlog } from '../../reducers/sellerReducer';
import { SUCCESS } from '../../utils/constants';

import "../../utils/globalStyles.css";
import { BlogsPageRoute } from '../../utils/routes';
import "./SellerPages.css";

export default function AddBlogPage(props) {
    const dispatch = useDispatch();

    const blogId = props.match.params.blogId;

    const [blogDetail, setBlogDetail] = useState(undefined);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // const alertUser = (e) => {     
    //     e.preventDefault();
    //     e.returnValue = "";
    // };

    // useEffect(() => {
    //     window.addEventListener("beforeunload", alertUser);
    //     return () => {
    //       window.removeEventListener("beforeunload", alertUser);
    //     };
    // }, []);

    useEffect(() => {
        dispatch(getBlogDetail(blogId)).then((res) => setBlogDetail(res));
    }, [blogId]);

    async function handleSubmit(e) {
        e.preventDefault();        

        setError('');
        setLoading(true);
        dispatch(addUpdateSellerBlog(
            blogId,
            blogDetail?.title,
            blogDetail?.mainImage,
            blogDetail?.body,
            blogDetail?.mainBlog,
            blogDetail?.subBlog))
            .then((res) => {
            if (res === SUCCESS) {
                // console.log("blog added");
                window.location.href = BlogsPageRoute;
            } else {
                setError(res);
                // console.log("error adding the blog.")
            }
            setLoading(false);
            });
    }

    return (
        <div className="vertical-md horizontal-md addPostPages addBlogPage">
            <div className="productShowing">
                {error && <div className="failedMsg">{error + ". Please try again."}</div>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group id="titles" className="mb-3">
                        <Form.Check type="checkbox" checked={blogDetail?.mainBlog} onChange={() => {setBlogDetail({...blogDetail, mainBlog: !blogDetail.mainBlog})}} label="Do you want this to be the new main blog?" />
                        <Form.Check type="checkbox" checked={blogDetail?.subBlog} onChange={() => {setBlogDetail({...blogDetail, subBlog: !blogDetail.subBlog})}} label="Do you want this to be the new sub blog?" />
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group id="mainImage" className="mb-3">
                                <Form.Label>Main Image URL *</Form.Label>
                                <Form.Control type="text" value={blogDetail?.mainImage || ""} onChange={e => setBlogDetail({...blogDetail, mainImage: e.target.value})} required />
                            </Form.Group>
                            <div className="imgPlaceholder">
                                    {blogDetail?.mainImage && (
                                        <img className="blog-image" src={blogDetail?.mainImage} alt={"Rendering image failed. Please double check your url. (TIP: when you paste the link to your tab, only the image should show up.)"} />
                                    )}
                                </div>
                        </Col>

                        <Col md={6}>
                            <Form.Group id="title" className="mb-3">
                                <Form.Label>Title *</Form.Label>                        
                                <Form.Control type="text" value={blogDetail?.title || ""} onChange={e => setBlogDetail({...blogDetail, title: e.target.value})} required />
                            </Form.Group>

                            <Form.Group id="body" className="mb-3">
                                <Form.Label>Body *</Form.Label>
                                <Form.Control as="textarea" type="text" style={{ height: '400px' }}  value={blogDetail?.body || ""} onChange={e => setBlogDetail({...blogDetail, body: e.target.value})} required />
                            </Form.Group>

                            <CustomButton disabled={loading} type="submit" buttonStyle="primary" buttonDetail="default-size" marginTop="20px">
                                <span id="button-text">
                                    {loading ? <LoadingBox text="Uploading" /> : "Upload"}
                                </span>
                            </CustomButton>
                        </Col>
                    </Row>

                </Form>
        
            </div>
        </div>
        
    );
}
