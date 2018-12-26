const express = require('express');
const router = express.Router();
const app = require('../app');
const { check, validationResult } = require('express-validator/check');
const models = require('../models');
const Op = models.Sequelize.Op;

const secAgoToRelevantStatus = 10;
const occupancyPercentage = 0.1;


router.post('/', [
        check('id').isNumeric(),
        check('name').isString().isLength({ max:200 }),
        check('isOccupied').optional({nullable: true}).isBoolean()
    ],
    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // status = await models.Status.create(req.body);
    // res.json(status);

    models.Status.create(req.body)
            .then(status => res.json(status))
});

router.get('/', function(req, res, next) {

    let lastRelevantStatusTime = new Date();
    lastRelevantStatusTime.setSeconds(lastRelevantStatusTime.getSeconds() - secAgoToRelevantStatus);

    models.Status.findAll({
        where: {
            createdAt: {
                [Op.gt]: lastRelevantStatusTime
            }
        }
    }).then(status => {

        const statusResult = [];
        const map = new Map();
        for (const roomStatus of status) {
            if(!map.has(roomStatus.id)){
                map.set(roomStatus.id, true);

                let occupiedStatus = status.filter(s => s.isOccupied === true && s.id === roomStatus.id);
                let occupiedStatusNum = (occupiedStatus) ? occupiedStatus.length : 0;
                let totalNum = status.filter(s => s.id === roomStatus.id).length;
                let isInactive = status.filter(s => s.isOccupied != null)? false : true

                statusResult.push({
                    id: roomStatus.id,
                    name: roomStatus.name,
                    isOccupied: isInactive? null : occupiedStatusNum / totalNum > occupancyPercentage
                });
            }
        }

        res.json(statusResult)
    })
});

module.exports = router;