const express = require('express');
const router = express.Router();
const app = require('../app');
const { check, validationResult } = require('express-validator/check');


router.post('/', [
        check('id').isNumeric(),
        check('name').isString().isLength({ max:200 }),
        check('is_occupied').optional({nullable: true}).isBoolean()
    ],
    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let status = {
        id: req.body.id,
        name: req.body.name,
        is_occupied: req.body.is_occupied
    };
    app.status[status.id] = status;
    res.json(status);
});

router.get('/', function(req, res, next) {
    res.send(app.status);
});

module.exports = router;

