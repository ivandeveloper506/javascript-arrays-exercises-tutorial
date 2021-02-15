var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];


console.log('Elementos del array del inicio al final.')
for(var i = 0; i<mySampleArray.length; i = i + 1)
{
	console.log(mySampleArray[i]);
}

console.log('\nElementos del array del final al inicio.')
for(i = mySampleArray.length; i != 0; i--)
{
	console.log(mySampleArray[i -1]);
}