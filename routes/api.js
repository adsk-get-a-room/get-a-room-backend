var express = require('express');
var router = express.Router();
var app = require('../app');

router.post('/', function(req, res, next) {
    var status = {id: req.body.id, is_occupied: req.body.is_occupied };
    app.status[status.id] = status;
    res.send(status);
});

router.get('/', function(req, res, next) {
    res.send(app.status);
});

module.exports = router;

