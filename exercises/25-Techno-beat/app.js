
function lyricsGenerator(notes) {
    let sing = '';
    let countOne = 0;

    for (i = 0; i < notes.length; i++) {
        switch (notes[i]) {
            case 0:
                sing += 'Boom ';

                break;
            case 1:
                countOne++;
                sing += 'Drop the base ';

                break;
        }

        if (countOne === 3) {
            sing += '!!!Break the base!!! ';
            countOne = 0;
        }
    }

    return sing;
}


console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]));
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]));
console.log(lyricsGenerator([0, 0, 0]));
console.log(lyricsGenerator([1, 0, 1]));
console.log(lyricsGenerator([1, 1, 1]));