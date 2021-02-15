function sumTheElements(theArray){
	
	var total = 0;
	
    //your code here
    
    for (i=0; i < theArray.length; i++){
        total += theArray[i];
    }

	return total;
}

console.log(sumTheElements([2,13,34,5]))
//this should print 54