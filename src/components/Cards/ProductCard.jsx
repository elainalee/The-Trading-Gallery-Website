import React from 'react';
import Card from 'react-bootstrap/Card'

import './ProductCard.css';

export default function ProductCard({ product }) {

    return (
        <Card>
            <Card.Img variant="top" src={product.mainImage} alt="product-image" />
            <Card.Body>
                <Card.Title>{product.title + " $" + product.price}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
            </Card.Body>
        </Card>
    )
    // );
        // return (
    //     <Card className={classes.root}>
    //         <CardMedia className={classes.media} image={product.mainImage} title={product.title} />
    //         <CardContent>
    //             <div className={classes.cardContent}>
    //                 <Typography variant="h5" gutterBottom>
    //                     {product.title}
    //                 </Typography>
    //                 <Typography variant="h5">
    //                     {product.price}
    //                 </Typography>
    //             </div>
    //             <Typography variant="body2" color="textSecondary">{product.description}</Typography>
    //         </CardContent>
    //         <CardActions disableSpacing className={classes.cardActions}>
    //             <IconButton aria-label="Add to Cart">
    //                 <AddShoppingCart />
    //             </IconButton>
    //         </CardActions>
    //     </Card>
    // );
}
