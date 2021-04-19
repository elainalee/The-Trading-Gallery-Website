import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    {
    id: 1, name: 'Bread', price: '$5', description: 'Fresh Breads', image: 'https://firebasestorage.googleapis.com/v0/b/my-app-leej.appspot.com/o/items_images%2F000cc760-4d53-4367-9118-c603dbac482a67094153447582073.jpg?alt=media&token=460bdf9a-91c8-4e00-aeef-6c5563d24fe9',
    },
    {
    id: 2, name: 'Mask', price: '$6', description: 'Handmade masks', image: 'https://firebasestorage.googleapis.com/v0/b/my-app-leej.appspot.com/o/items_images%2F000cc760-4d53-4367-9118-c603dbac482a67094153447582073.jpg?alt=media&token=460bdf9a-91c8-4e00-aeef-6c5563d24fe9',
    },
];

export default function Products() {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}
