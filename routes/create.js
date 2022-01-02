const router = require('express').Router();
const pool = require('../db/pool_connect');

router.get('/', function(req, res, next) {
    pool.query('Select * from test')
        .then(testData => {
            res.send(testData);
        })
});

module.exports = router;