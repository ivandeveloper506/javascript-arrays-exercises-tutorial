let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

const mergeTwoList = (flist_of_numbers) => {
    oddArray = [];
    evenArray = [];
    newArray = [];

    for (i=0; i<flist_of_numbers.length; i++){
        // console.log(flist_of_numbers[i]);
        if (flist_of_numbers[i] % 2 === 0){
            evenArray.push(flist_of_numbers[i]);
        }else{
            oddArray.push(flist_of_numbers[i]);
        }
    }

    // Se asigna el primer array a uno nuevo
    newArray = evenArray;

    // Se le concatena otro array al que ya se tenía
    newArray = evenArray.concat(oddArray);

    return newArray
}

console.log(mergeTwoList(list_of_numbers))