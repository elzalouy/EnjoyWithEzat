// express library
const express = require("express");
const { admins: Admin } = require("../models/admin");
const { generateJWT }=require("../services/jwt");
const bcrypt = require("bcrypt");
//handle error middleware
const handle = require("./../middleware/handle");
// http new router for admin routes with middleares to be executed with each router should be built.
const router = express.Router();

/**
 * Login to the admin panel.
 */

router.post(
    "/login",
    handle(async(req, res, next) => {
        // check  email and password are valid
        const { email, password } = req.body;
        // isLoginValid?
        if (email && password) {
            // find the email
            await Admin.findOne({ email: email }, ["email", "password"], {},
                (error, doc) => {
                    if (error || !doc) return res.status(404).send('Invalid Email or Password');
                    // isPasswordCorrect ? 
                    const validPassword = bcrypt.compare(doc.password, password);
                    if (!validPassword) return res.status(404).send('Invalid Email or Password');
                    // response is an access token
                    const token=generateJWT({_id:doc._id, name : doc.name, email: doc.email});        
                    res.send({token:token});
                }
            );
        } else return res.status(404).send('email and password are reuqired');
    })
);


module.exports = router;