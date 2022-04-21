import React, { useEffect, useState } from 'react';

import CustomPagination from '../../components/Utils/CustomPagination';

export default function ManageOrdersPage(props) {
    // const { products } = useSelector((state) => state);
    // const dispatch = useDispatch();

    // const allProducts = products.items;

    // useEffect(() => {
    //     dispatch(getProducts());
    // }, []);

    // const handleAddClick = () => {
    //     window.location.href = AddListingPageRoute;
    // }

    return (
        <div className="page-md horizontal-md manageListingsPage">
            <CustomPagination />
        </div>
);
}
