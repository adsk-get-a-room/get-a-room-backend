$(document).ready(() => {
    let roomEntryTemplate = Handlebars.compile(document.getElementById("room-entry-template").innerHTML);
    let getStatus = () => {
        $.get('/status', (data) => {
            console.log(data);
            let sortedRooms = data.sort((a, b) => a["id"] - b["id"]);
            let elements = [];
            for (let room of sortedRooms) {
                let roomStatus = "Unknown";
                let roomStatusImage = 'https://hds.static.autodesk.com/images/table-status-bad.svg';
                if (room["isOccupied"] === true) {
                    roomStatusImage = 'https://hds.static.autodesk.com/images/table-status-worst.svg';
                    roomStatus = 'Occupied';
                }
                if (room["isOccupied"] === false) {
                    roomStatusImage = 'https://hds.static.autodesk.com/images/table-status-good.svg';
                    roomStatus = 'Free\'';
                }
                elements.push(roomEntryTemplate({
                    roomName: room["name"],
                    roomNumber: room["id"],
                    roomStatusName: roomStatus,
                    roomStatusImage: roomStatusImage,
                    roomStatusClass: `room-status-${roomStatus.toLowerCase()}`
                }));
            }
            $('main #rooms-list').html(elements);
        });
    };
    getStatus();
    setInterval(getStatus, 2000);
});