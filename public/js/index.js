$(document).ready(() => {
    let roomEntryTemplate = Handlebars.compile(document.getElementById("room-entry-template").innerHTML);
    let getStatus = () => {
        $.get('/status', (data) => {
            console.log(data);
            let sortedRooms = data.sort((a, b) => a["id"] - b["id"]);
            let elements = [];
            for (let room of sortedRooms) {
                let roomStatus = "Unknown";
                roomStatus = room["isOccupied"] === true ? 'Occupied' : 'Free';
                let roomStatusImage = 'https://hds.static.autodesk.com/images/table-status-bad.svg';
                roomStatusImage = room["isOccupied"] === true ? 'https://hds.static.autodesk.com/images/table-status-worst.svg' : 'https://hds.static.autodesk.com/images/table-status-good.svg';
                elements.push(roomEntryTemplate({
                    roomName: room["name"],
                    roomNumber: room["id"],
                    roomStatusName: roomStatus,
                    roomStatusImage: roomStatusImage,
                    roomStatusClass: `room-status-${roomStatus.toLowerCase()}`
                }));
            }
            $('main').html(elements);
        });
    };
    getStatus();
    setInterval(getStatus, 2000);
});