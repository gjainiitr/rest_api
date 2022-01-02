require('dotenv').config();
const pool = require('./db/pool_connect');
const app = require('./app');



// app.get('/testdata', (req, res, next) => {
//     console.log("TEST DATA :");
//     pool.query('Select * from test')
//         .then(testData => {
//             res.send(testData);
//         })
// })

const server = app.listen(process.env.SERVER_PORT, function () {
    let host = server.address().address
    let port = server.address().port
})