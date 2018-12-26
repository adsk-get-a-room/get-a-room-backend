const models = require('./models');
const Op = models.Sequelize.Op;

const secAgoToRelevantStatus = 10;
const occupancyPercentage = 0.1;

module.exports = async function getAllRoomsStatus() {

    let lastRelevantStatusTime = new Date();
    lastRelevantStatusTime.setSeconds(lastRelevantStatusTime.getSeconds() - secAgoToRelevantStatus);

    return models.Status.findAll({
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
                let isInactive = status.filter(s => s.isOccupied != null && s.id === roomStatus.id).length > 0 ? false : true

                statusResult.push({
                    id: roomStatus.id,
                    name: roomStatus.name,
                    isOccupied: isInactive? null : occupiedStatusNum / totalNum > occupancyPercentage
                });
            }
        }

        return statusResult;
    })
}
