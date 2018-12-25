$(document).ready(() => {
    let roomEntryTemplate = Handlebars.compile(document.getElementById("room-entry-template").innerHTML);
    let getStatus = () => {
        $.get('/status', (data) => {
            console.log(data);
            /*let debugData = [
                {
                    "id": 123,
                    "name": "Luigi",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 1456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 2456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 3456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 4456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 5456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 6456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 1456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 2456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 3456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 4456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 5456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 6456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 7456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 4556,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 4656,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 456,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 4756,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 4056,
                    "name": "Zelda",
                    "is_occupied": false
                },
                {
                    "id": 4456,
                    "name": "Zelda",
                    "is_occupied": false
                }
            ];*/
            let sortedRooms = data.sort((a, b) => a["id"] - b["id"]);
            let elements = [];
            for (let room of sortedRooms) {
                let roomStatus = "Unknown";
                roomStatus = room["is_occupied"] === true ? 'Occupied' : 'Free';
                let roomStatusImage = 'https://hds.static.autodesk.com/images/table-status-bad.svg';
                roomStatusImage = room["is_occupied"] === true ? 'https://hds.static.autodesk.com/images/table-status-worst.svg' : 'https://hds.static.autodesk.com/images/table-status-good.svg';
                elements.push(roomEntryTemplate({
                    roomName: room["name"],
                    roomNumber: room["id"],
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