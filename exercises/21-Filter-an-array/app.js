let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here

let onlyFirstR = allNames.filter(function(word){
    return (word.substring(0,1) === 'R');
});

console.log(onlyFirstR);