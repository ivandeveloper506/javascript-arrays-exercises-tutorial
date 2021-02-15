let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

// Se recorre el array para crear las propiedas del objeto
for (i = 0; i < par.length; i++) {
    if (par.substring(i, i + 1).trim() != '') {

        // El valor de la primera propiedad siempre tendrá minimo una ocurrencia.
        if (i === 1) {
            counts[par.substring(i, i + 1)] = 1;
        } else {
            counts[par.substring(i, i + 1)] = 0;
        }
    }
}

// Se recorre el objeto para actualizar sus valores.
for (element in counts) {
let pos = 0;

// Se buscan las letras con un ciclo
while (pos != -1) {
    pos = par.indexOf(element, pos + 1);

    if (pos > 0) {
        counts[element] = counts[element] + 1;
    }
}
}

console.log('Estas son as ocurrencias de las letras en la frase [' + par + ']:\n');
console.log(counts);