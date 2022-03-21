import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategoryProducts, getProducts, searchProducts } from '../../reducers/productsReducer';
import ProductsRow from '../../components/Rows/ProductsRow';
import { ShopCategoryItems } from '../../components/NavBar/MenuItems';

import { doLinksMatch } from '../../utils/Helper';

export default function ShopPage(props) {
    const dispatch = useDispatch();

    // if from search
    const keyword = props?.match?.params?.keyword;

    // if from categories
    const mainCategory = props?.match?.params?.mainCategory;
    const subCategory = props?.match?.params?.subCategory;
    const { products } = useSelector((state) => state);

    const items = products.items;

    const [categoryID, setCategoryID] = useState("");

    useEffect(() => {
        ShopCategoryItems.forEach(category => (
            category.forEach((subcategory) => {
                if (doLinksMatch(subcategory.url, mainCategory, subCategory )) {
                    setCategoryID(subcategory.id);
                }
            })
        ));
    }, [mainCategory]);

    useEffect(() => {
        dispatch(getCategoryProducts(categoryID));
    }, [categoryID]);

    useEffect(() => {
        dispatch(searchProducts(keyword));
    }, [keyword]);

    return (
        <div className="page-md horizontal-md">
            {keyword
                ?  <ProductsRow products={products.searchItems} title={"Search For \"" + keyword + "\""} placeholderNumbers={8} enableCarousel={false}/>
                : mainCategory
                    ? <ProductsRow products={products.categoryItems} title="ITEMS" placeholderNumbers={8} enableCarousel={false}/>
                    : <ProductsRow products={items} title="FEATURED PRODUCTS" placeholderNumbers={8} enableCarousel={false}/>}
        </div>
);
}
