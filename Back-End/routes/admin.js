// express library
const express = require('express');
const Admin = require('../models/admin');
//handle error middleware
const handle = require('./../middleware/handle');
// http new router for admin routes with middleares to be executed with each router should be built.
const router = express.Router();
/**
 * Login to the admin panel.
 */
router.post('/login', handle(async(req, res, next) => {
    // check  email and password are valid
    const {email,password}=req.body;
    if(email && password){
        // find the email
        const isAdmin=await Admin.findOne(doc=>doc.email===email);
    }
}));

module.exports = router;