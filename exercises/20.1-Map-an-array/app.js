let arrayOfCelsiusValues = [-2,34,56,-10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	return value + "°C = " + ((value * 1.8) + 32) + '°F';
	
});

console.log(arrayOfFahrenheitValues);