//Nombre: Ana Damasco.

// Un grupo inversor ha decidido fundar una empresa de producción de robots en Uruguay. Los siguientes ejercicios comprenden funciones importantes del proceso de evaluación de viabilidad del uso del complejo industrial Sudamtex de Colonia del Sacramento para la instalación de su primera planta de producción.

// Los robots que se producirán son robots industriales, a continuación se detallan las características de algunos de ellos:

// Robot Soldador: Robot de soldadura, se moviliza a una velocidad maxima de 5 km/h, tiene una autonomía de 8 horas y puede realizar 1000 operaciones por hora.
// Robot Triturador: Robot de trituración, se moviliza a una velocidad maxima de 2 km/h, tiene una autonomía de 12 horas y puede realizar 500 operaciones por hora.
// Robot Transportador: Robot de transporte de carga, se moviliza a una velocidad maxima de 3 km/h, tiene una autonomía de 10 horas y puede realizar 10 operaciones por hora.


// Ejercicio 1
// Crea una función que recibe un array (array de objteos), medidasGalpones con objetos con el siguiente formato:

// Las medidas corresponden a diferentes galpones de un complejo industrial y estan en metros.

// La función debe calcular el área de cada galpón y devolver la suma de todas las áreas.

let medidasGalpones = [
    {largo: 50, ancho: 100},
];

function calcularAreaTotal(galpones) {
    let areaTotal = 0;

    for (let galpon of galpones) {
        let areaGalpon = galpon.largo * galpon.ancho;
        areaTotal += areaGalpon;
    }

    return areaTotal;
}

let areaTotalCalculada = calcularAreaTotal(medidasGalpones);

console.log("El area total de los galpones es:", areaTotalCalculada);

