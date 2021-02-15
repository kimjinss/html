const express = require('express');
const router = express.Router();
const { Client } = require('pg');

// 기본적인 DB 세팅
const client = new Client({
    user: 'test1',
    host: '59.3.55.93',
    database: 'test1db',
    password: 'test1',
    port: '5432'
});




module.exports = router;