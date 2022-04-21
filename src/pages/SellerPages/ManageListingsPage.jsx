import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerProducts } from '../../reducers/sellerReducer';
import ManageProductCard from '../../components/Cards/ManageProductCard';
import { IconButton } from '../../components/Buttons/IconButton';
import { AddListingPageRoute } from '../../utils/routes';
import { getProducts } from '../../reducers/productsReducer';
import CustomPagination from '../../components/Utils/CustomPagination';

export default function ManageListingsPage(props) {
    const { products } = useSelector((state) => state);
    const dispatch = useDispatch();

    const allProducts = products.items;

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const handleAddClick = () => {
        window.location.href = AddListingPageRoute;
    }

    return (
        <div className="page-md horizontal-md manageListingsPage">
            <h2 className="vertical-sm">
                Add Listing
                <IconButton buttonIcon="add-btn" onClick={handleAddClick}/>
            </h2>

            <CustomPagination countPerPage={10}>
                {allProducts?.map((product, index) => ( 
                    <ManageProductCard key={index} product={product} last={index == allProducts?.length - 1} />
                ))}
            </CustomPagination>

        </div>
);
}
