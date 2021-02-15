let people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];
let newPeople = [];

function deletePerson(personName)
{
    //your code here
    
     for (i=0; i < people.length; i++){
        if (people[i].toUpperCase() != personName.toUpperCase()){
            newPeople.push(people[i]);
        }
    }
}

console.log(deletePerson('daniella'));
console.log('Arreglo sin la persona [daniella]:')
console.log(newPeople);

console.log(deletePerson('juan'));
console.log('Arreglo sin la persona [juan]:')
console.log(newPeople);

console.log(deletePerson('emilio'));
console.log('Arreglo sin la persona [emilio]:')
console.log(newPeople);