// const express = require("express");
import express from 'express';

const router = express.Router();

// interface User {
//     firstName: String,
//     lastName: String,
//     email: String,
//     id: String,
//     contactNumber: String,
//     password: String,
// }

// Create a new user
router.post("/addUser", async (req, res) => {
    // STILL TODO
    console.log("add user on backend called!");
    // console.log("req is: ", req);
    res.status(400).json({success: "addUser was successfully called"});
});

// module.exports = router;
export default router;
