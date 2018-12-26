const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/', [],
    (req, res) => {
        res.json('hello');
    });

module.exports = router;