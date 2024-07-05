//Ejercicio 5

// Crea una clase Robot con al menos 3 propiedades, 2 métodos de instancia y 3 métodos estáticos. //Hecho
// Al menos uno de los métodos de instancia debe llamar al otro. //Hecho
// Cada uno de los métodos estáticos debe devlover una instancia de la clase. Estas instancias deben tener ya cargadas propiedades acordes a los tipos de robots mencionados,
// al principio del documento. //Hecho

class Robot {
    constructor(nombre, tipo, actividad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.actividad = actividad;
    }

    mostrarActividad() {
        console.log(`El robot ${this.nombre} (${this.tipo}) está ${this.actividad}.`);
    }

    cambiarActividad(nuevaActividad) {
        console.log(`Cambiando estado de ${this.nombre} a ${nuevaActividad}.`);
        this.estado = nuevaActividad;
        this.mostrarActividad; 
    }

    static crearRobotPixar() {
        return new Robot('Wall-E', 'explorador', 'En la Luna');
    }

    static crearRobotDaniado() {
        return new Robot('404', 'sargento', 'nula, anda daniado');
    }

    static crearRobotUltimaGeneracion() {
        return new Robot('Robotina', 'cientifica', 'investigando');
    }
}

let robotReferenciaVieja = Robot.crearRobotPixar();
let robotLastimado = Robot.crearRobotDaniado();
let robotListo = Robot.crearRobotUltimaGeneracion();

robotReferenciaVieja.cambiarActividad('Perdido'); 
robotLastimado.cambiarActividad('Daniado'); 
robotListo.cambiarActividad('Ayudando Wall-e');
