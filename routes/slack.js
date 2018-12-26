const express = require('express');
const router = express.Router();
const getAllRoomsStatus = require('../statusManager')


router.post('/', [],
    async (req, res) => {
        let slackResult = '*Those rooms are free now:*\n';
        const allRoomStatus = await getAllRoomsStatus();
        allRoomStatus.filter(s => s.isOccupied === false)
            .forEach(status => slackResult += '\n:jenkins_success: Room ' + status.id + ' (' + status.name + ')')

        res.json({'text': slackResult});
    });

module.exports = router;