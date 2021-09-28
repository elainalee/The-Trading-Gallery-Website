// const express = require("express");
import express from 'express';
import { data } from '../data.js';

const router = express.Router();

// interface Product {
//      ...
// }


router.get("/getItems", async (req, res) => {
    console.log("get products on backend called!");
    try {
        res.send(data.products);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});


export default router;
