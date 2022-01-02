const router = require('express').Router();
const pool = require('../db/pool_connect');

router.use("/create",require('./create'));

module.exports = router;