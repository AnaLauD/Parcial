//Ejercicio 3

//Crea una función llamada filtrarInversoresVIP que recibe un array inversores con objetos con el siguiente formato:

// Los objetos representan inversores del proyecto y cuanto capital están dispuestos a aportar.

// La función debe devolver un array solo con aquellos inversores que aportan más de 1 millon de dólares.

class Inversor {
    constructor(nombre, capital) {
        this.nombre = nombre;
        this.capital = capital;
    }

    esVIP() {
        return this.capital > 1000000;
    }
}

function filtrarInversoresVIP(inversores) {
    let inversoresVIP = inversores.filter(inversor => inversor.esVIP());

    return inversoresVIP;
}

let inversores = [
    new Inversor('Inversor 1', 800000),
    new Inversor('Inversor 2', 1500000),
];

let inversoresVIP = filtrarInversoresVIP(inversores);

console.log("Inversores VIP:");
console.log(inversoresVIP);

