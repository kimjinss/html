const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/',(req,res) =>{
    res.send('Hellow, Express');
});

module.exports = router;