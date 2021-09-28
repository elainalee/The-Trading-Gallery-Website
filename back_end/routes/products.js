import express from 'express';

import { firebaseDB } from '../utils/auth.js';
import { collection, getDocs } from 'firebase/firestore/lite';


const router = express.Router();
const productsCollection = collection(firebaseDB, 'products');

import { auth } from '../utils/auth.js';

// interface Product {
//      ...
// }


router.get("/getItems", async (req, res) => {
    console.log("2----", "what");
    try {
        console.log("1=======");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map(doc => doc.data());

        // res.send(productsList);
        res.status(200).json(productsList);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});


export default router;
