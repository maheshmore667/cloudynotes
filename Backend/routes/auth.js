const express = require('express');
const router = express?.Router();

router.get('/', (req, res)=>{
    res.send({status : 200, description : "SuccessFul"});
});

module.exports = router;