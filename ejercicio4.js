// Crea una función que recibe un array de objetos con el siguiente formato: //Hecho

// { nombre: "Robot Triturador", cantidad: 5 } //Hecho
// Los objetos representan la cantidad de robots de cada tipo que ya se han encargado a construir.

// La función debe devolver un objeto <li> por cada objeto del array con el siguiente formato:

class Nombre {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

function recibir (recibirObjeros) {
    let arrayDeLosObjetos = [];

    recibirObjeros.forEach(objeto => {
        let li = `<li>${objeto.nombre}: ${objeto.cantidad}</li>`;
        arrayDeLosObjetos.push(li);
    });

    return arrayDeLosObjetos.join('');
}

let recibirObjeros = [
    { nombre: "Robot Triturador", cantidad: 5 },
];

let listaHTML = recibir(recibirObjeros);
console.log(listaHTML);

