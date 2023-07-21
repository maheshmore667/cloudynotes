const express = require('express');
const router = express?.Router();
const User = require('../models/User');

router.get('/createUser', (req, res)=>{
    try{
        console.log(req.body);
        const user = new User(req.body);
        user.save();
        res.send({status : 200, description : "SuccessFul"});
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    } 
    
});

module.exports = router;