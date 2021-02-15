const express = require('express');
const path = require('path');
const {spawn} = require('child_process');
const { PythonShell } = require("python-shell");
const http = require('http');
dotenv.config();
const app = express();
const indexRouter = require('./routes')
app.set('port', process.env.PORT || 8080);

// app.get('/', (req, res) => {
//     // res.send('Hello, Express');
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

app.use(function(req, res, next) {

    res.send({name:'test', age:'20'});
});


