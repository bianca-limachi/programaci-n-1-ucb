// Clase Pasajero
class Pasajero {
  constructor(nombre, edad, genero, tipoBoleto) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.tipoBoleto = tipoBoleto;
  }

  mostrarInfo() {
    return `${this.nombre}, ${this.edad} años, ${this.genero}, ${this.tipoBoleto}`;
  }
}

// Clase BoteRescate
class BoteRescate {
  constructor(capacidad) {
    this.capacidad = capacidad;
    this.ocupantes = [];
  }

  agregarPasajero(pasajero) {
    if (this.ocupantes.length < this.capacidad) {
      this.ocupantes.push(pasajero);
      return true;
    } else {
      return false; // bote lleno
    }
  }

  mostrarOcupantes() {
    return this.ocupantes.map(p => p.mostrarInfo()).join("\n");
  }
}

// Algoritmo de evacuación
function evacuar(pasajeros, botes) {
  // Orden de prioridad: Mujeres primero, luego niños (<12), después tipo de boleto
  pasajeros.sort((a, b) => {
    // Género
    if (a.genero !== b.genero) {
      return a.genero === "Femenino" ? -1 : 1;
    }
    // Edad (niños primero)
    if (a.edad < 12 && b.edad >= 12) return -1;
    if (a.edad >= 12 && b.edad < 12) return 1;
    // Tipo de boleto (1ra < 2da < 3ra)
    const prioridad = { "1ra Clase": 1, "2da Clase": 2, "3ra Clase": 3 };
    return prioridad[a.tipoBoleto] - prioridad[b.tipoBoleto];
  });

  let noSubieron = [];

  for (let pasajero of pasajeros) {
    let subio = false;
    for (let bote of botes) {
      if (bote.agregarPasajero(pasajero)) {
        subio = true;
        break;
      }
    }
    if (!subio) noSubieron.push(pasajero);
  }

  return noSubieron;
}

// Simulación
let pasajeros = [
  new Pasajero("Ana", 25, "Femenino", "1ra Clase"),
  new Pasajero("Luis", 8, "Masculino", "2da Clase"),
  new Pasajero("Marta", 30, "Femenino", "3ra Clase"),
  new Pasajero("Pedro", 40, "Masculino", "1ra Clase"),
  new Pasajero("Sofía", 10, "Femenino", "2da Clase"),
  new Pasajero("Carlos", 60, "Masculino", "3ra Clase"),
  new Pasajero("Lucía", 15, "Femenino", "1ra Clase"),
  new Pasajero("Diego", 35, "Masculino", "2da Clase"),
  new Pasajero("María", 50, "Femenino", "3ra Clase"),
  new Pasajero("Andrés", 12, "Masculino", "1ra Clase")
];

// Crear botes
let bote1 = new BoteRescate(4);
let bote2 = new BoteRescate(3);
let bote3 = new BoteRescate(2);

let botes = [bote1, bote2, bote3];

// Ejecutar evacuación
let noSubieron = evacuar(pasajeros, botes);

// Mostrar resultados
botes.forEach((bote, i) => {
  console.log(`\nBote ${i + 1} (capacidad ${bote.capacidad}):`);
  console.log(bote.mostrarOcupantes() || "Vacío");
});

console.log("\nPasajeros que quedaron fuera:");
console.log(noSubieron.map(p => p.mostrarInfo()).join("\n") || "Ninguno");
