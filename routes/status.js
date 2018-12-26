const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const models = require('../models');

const getAllRoomsStatus = require('../statusManager')

router.post('/', [
        check('id').isNumeric(),
        check('name').isString().isLength({ max:200 }),
        check('isOccupied').optional({nullable: true}).isBoolean()
    ],
    async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    status = await models.Status.create(req.body);
    res.json(status);
});

router.get('/', async function (req, res, next) {
    const allRoomStatus = await getAllRoomsStatus();
    res.json(allRoomStatus);
});

module.exports = router;