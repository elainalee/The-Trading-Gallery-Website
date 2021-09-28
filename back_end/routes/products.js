import express from 'express';

import { firebaseDB } from '../utils/auth.js';
import { collection, getDocs } from 'firebase/firestore/lite';


const router = express.Router();
const productsCollection = collection(firebaseDB, 'products');

// interface Product {
//      ...
// }


router.get("/getItems", async (req, res) => {
    try {
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map(doc => doc.data());

        res.send(productsList);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});


export default router;
