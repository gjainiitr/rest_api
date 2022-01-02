require('dotenv').config();
const pool = require('./db/pool_connect');
const app = require('./app');

app.use('/', require('./routes/index'));

const server = app.listen(process.env.SERVER_PORT, function () {
    let host = server.address().address
    let port = server.address().port
})