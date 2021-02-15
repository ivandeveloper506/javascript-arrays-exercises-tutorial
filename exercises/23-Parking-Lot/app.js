let parking_state = [
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 2]
]

// Code goes here

function getParkingLotState(parkingState) {
    let outputObject = new Object;
    let rowSlots = [];
    let totalSlots = 0;
    let availableSlots = 0;
    let occupiedSlots = 0;

    for (i = 0; i < parkingState.length; i++) {
        rowSlots = parkingState[i];

        for (x = 0; x < rowSlots.length; x++) {
            totalSlots++;

            switch (parkingState[i][x]) {
                case 0:
                    // totalSlots++;

                    break;
                case 1:
                    occupiedSlots++;

                    break;
                case 2:
                    availableSlots++;

                    break;
            }
        }

        // rowSlots = parkingState[i];

        // console.log(rowSlots);
    }

    outputObject['totalSlots'] = totalSlots;
    outputObject['availableSlots'] = availableSlots;
    outputObject['occupiedSlots'] = occupiedSlots;

    return outputObject;
}

console.log(getParkingLotState(parking_state))