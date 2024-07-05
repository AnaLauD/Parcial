// Ejercicio 2

// Crea una función que recibe dos parametros, un número, superficieEdificio y un array maquinas de objetos con el siguiente formato:

// Definición de la función que recibe dos parámetros

function calcularSuperficie(superficieEdificio, maquinas) {
    let superficieTotalMaquinas = 0;

    for (let maquina of maquinas) {
        superficieTotalMaquinas += maquina.superficieDeOperacionRequerida;
    }

    if (superficieTotalMaquinas > superficieEdificio) {
        return "Las maquinas ocupan mas superficie de la disponible. Muy mal";
    } else {
        return "Las maquinas no ocupan mas superficie. Muy bien!";
    }
}

let superficieEdificio = 50; 

let maquinas = [
    { nombreMaquina: "Torno industrial", superficieDeOperacionRequerida: 40 },
]

let resultado = calcularSuperficie(superficieEdificio, maquinas);
console.log(resultado);
