let coordinatesArray = [[33.747252, -112.633853],
[-33.867886, -63.987],
[41.303921, -81.901693],
[-33.350534, -71.653268]];

//The first coordinate latitude
let latitude = coordinatesArray[0][0];
//The first coordinate longitude
let longitude = coordinatesArray[0][1];

for (i = 0; i < coordinatesArray.length; i++) {
    for (x = 0; x < 2; x++) {
        if (x === 1) {
            console.log(coordinatesArray[i][x]);
        }
    }
}