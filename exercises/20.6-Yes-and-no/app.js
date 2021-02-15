let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

//your code here

let yesAndNo = function (number) {
    let textDecision = '';

    switch (number) {
        case 0:
            return 'woko';

            break;
        case 1:
            return 'wiki';

            break;
    }
}

console.log(theBools.map(yesAndNo));