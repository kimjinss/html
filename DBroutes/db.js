const constRouter = require('./DBroutes/const')
const { Pool, Client } = require('pg');



const client = new Client({
    user: constRouter.user,
    password: constRouter.password,
    host: constRouter.host,
    port: constRouter.port,
    database: constRouter.db
});



function GetUserList() {
    client.connect();
    client.query('SELECT * FROM users', (err, res) => {
        console.log(res);
        client.end();
    });
};

module.exports = { getUserList: GetUserList }
