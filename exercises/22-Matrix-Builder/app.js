// Code goes here

function matrixBuilder(numberParameter) {
    let outputMatrix = [];
    // let valueMatrix = [];

    for (a = 0; a < numberParameter; a++) {
        let valueMatrix = [];

        for (b = 0; b < numberParameter; b++) {
            valueMatrix.push(Math.floor(Math.random() * 2));
        }

        outputMatrix.push(valueMatrix);
    }

    return outputMatrix
}

// do not change anything from this line down
console.log(matrixBuilder(5))