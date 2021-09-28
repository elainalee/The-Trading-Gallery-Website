import express from 'express';

import { auth } from '../utils/auth.js';

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
// router.post("/addUser", async (req, res) => {
//     // STILL TODO
//     console.log("add user on backend called!");
//     // console.log("req is: ", req);
//     res.status(400).json({success: "addUser was successfully called"});
// });

router.get("/getUser", async (req, res) => {

    try {
        console.log('---');
        console.log("----", auth);

        res.send({"productsList": "ex"});
    } catch (err) {
        res.status(400).json({ error: err });
    }
});


export default router;
