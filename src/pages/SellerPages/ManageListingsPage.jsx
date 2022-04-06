import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerProducts } from '../../reducers/sellerReducer';
import ManageProductCard from '../../components/Cards/ManageProductCard';
import { IconButton } from '../../components/Buttons/IconButton';
import { AddListingPageRoute } from '../../utils/routes';

export default function ManageListingsPage(props) {
    const { seller } = useSelector((state) => state);
    const dispatch = useDispatch();

    const sellerProducts = seller.products;

    console.log("sellerproduct ", sellerProducts);

    useEffect(() => {
        dispatch(getSellerProducts());
    }, []);

    const handleAddClick = () => {
        window.location.href = AddListingPageRoute;
    }

    return (
        <div className="page-md horizontal-md manageListingsPage">
            <h2 className="vertical-sm">
                Add Listing
                <IconButton buttonIcon="add-btn" onClick={handleAddClick}/>
                {/* <div className={enableCarousel ? "selection" : "selection hide"}>
                    <i className={"fas fa-angle-left " + (rowPage === 0 && "disable")} onClick={() => { if (rowPage > 0) setRowPage(rowPage - 1) }}/>
                    <i className={"fas fa-angle-right " + (rowPage === 2 && "disable")} onClick={() => { if (rowPage < 2) setRowPage(rowPage + 1) }}/>
                </div> */}
            </h2>
            
            <div className="product-title"><ManageProductCard title={true} /></div>
            {sellerProducts?.map((product, index) => ( 
                <ManageProductCard key={index} product={product} last={index == sellerProducts?.length - 1} />
            ))}
        </div>
);
}
