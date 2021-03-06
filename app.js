const express = require('express');
const app = express();
const indexRouter = require('./routes/index')
const dbRouter = require('./routes/dbroter')
app.set('port', process.env.PORT || 8080);

// app.get('/', (req, res) => {
//     // res.send('Hello, Express');
//     res.sendFile(path.join(__dirname, '/index.html'));
// });


app.use('/',indexRouter)
app.use('/',dbRouter)





app.use((req,res,next) => {
    res.status(404).send('Not Found');
});

app.use((err,req,res,next) => {
    console.error(err);
    res.status(500).send(err.message);
});
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});

