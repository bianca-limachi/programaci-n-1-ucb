# **Informe Final – Programación 1**

**Universidad:** Universidad Católica Boliviana (UCB)
**Asignatura:** Programación 1 (SIS-112)
**Docente:** Ing. Eddy Escalante
**Carrera:** Ingeniería Industrial
**Fecha de presentación:** 12/12/2024


## **Integrantes**

* Rafael Ríos
* Bianca Limachi
* Isabela Barbery


## **2. Introducción**

El presente informe documenta el desarrollo del videojuego **Camba’s Invaders**, creado como proyecto final de la asignatura **Programación 1 (SIS-112)**. El objetivo principal del proyecto consiste en implementar un videojuego funcional utilizando **JavaScript**, aplicando conceptos de estructuras de datos, matrices, eventos del teclado, renderizado mediante `<canvas>` y programación orientada a objetos.

El juego incorpora la temática política de Bolivia, representando un enfrentamiento entre los movimientos masistas y los cambas de Santa Cruz. El jugador controla un **somosero**, símbolo tradicional de la ciudad, y debe derrotar a enemigos icónicos de la política boliviana (García Linera, Luis Arce y Evo Morales) a través de niveles progresivos.

Además, se integró el robot **Dobot MG400**, que permite controlar el movimiento del personaje mediante las teclas izquierda y derecha, demostrando la interacción entre software y hardware. El proyecto fomenta el aprendizaje completo del ciclo de desarrollo de videojuegos: diseño, programación, recursos gráficos, integración de dispositivos externos y documentación técnica.


## **3. Desarrollo del Proyecto**

### **3.1 Diseño del Videojuego**

#### **Concepto general**

**Camba’s Invaders** es una reinterpretación del clásico *Space Invaders*. La nave tradicional es reemplazada por un carrito somosero que se mueve lateralmente y dispara “somos” automáticamente cada 2 segundos. Los enemigos disparan bolsas de coca que deben ser esquivadas. El jugador dispone de **6 vidas** y pierde una cada vez que es alcanzado por un disparo enemigo.


#### **Historia / narrativa**

El juego refleja la tensión política en Bolivia:

* **Nivel 1:** Enfrentamiento contra **García Linera**
* **Nivel 2:** Enfrentamiento contra **Luis Arce**
* **Nivel 3 (Jefe final):** Enfrentamiento contra **Evo Morales**

El jugador representa la resistencia camba, mientras los enemigos representan la corriente masista.

#### **Personaje principal**

* **Nombre:** Somosero
* **Control:** Flechas izquierda y derecha (también simuladas por Dobot MG400)
* **Ataque:** Disparo automático de somo cada 2 segundos
* **Vidas:** 6

#### **Objetivo del juego**

Derrotar a todos los enemigos en cada nivel sin perder todas las vidas, avanzando progresivamente hacia el jefe final.

#### **Mecánicas principales**

* **Movimiento lateral:** Flechas izquierda/derecha, controladas manualmente o mediante Dobot.
* **Disparo automático:** Cada 2 segundos el somosero dispara “somos” hacia los enemigos.
* **Enemigos disparan:** Bolsas de coca descendentes que restan vidas.
* **Colisiones:**

  * Bala del jugador elimina enemigos.
  * Disparo enemigo elimina vidas si toca al jugador.
* **Victoria/derrota:**

  * Se gana al eliminar todos los enemigos de un nivel.
  * Se pierde si se acaban las 6 vidas.


### **3.1.1 Descripción de los Niveles**

#### **Nivel 1 – García Linera**

* **Dificultad:** Baja
* **Enemigos:** 5 iniciales (aliens) + jefe García Linera
* **Velocidad disparo enemigos:** 1000 ms
* **Características:** Introducción al movimiento, disparo automático y esquiva básica.

#### **Nivel 2 – Luis Arce**

* **Dificultad:** Media
* **Enemigos:** Mayor cantidad y disparos más frecuentes
* **Características:** Mayor desafío estratégico para esquivar y atacar.

#### **Nivel 3 – Evo Morales (Jefe final)**

* **Dificultad:** Alta
* **Enemigos:** Jefe final con disparos frecuentes
* **Características:** Desafío máximo; requiere precisión y estrategia.

### **3.2 Herramientas Utilizadas**

* **Lenguaje de Programación:** JavaScript (ES6)
* **Editor:** Visual Studio Code
* **Repositorio:** GitHub para control de versiones y colaboración
* **Recursos gráficos:** PNG en `/assets/` (nave, enemigos, balas, fondo)
* **Integración con robot:** Dobot MG400 mediante DobotStudio Pro
* **Conversión Markdown → PDF:** [cloudconvert.com](https://cloudconvert.com/md-to-pdf)


### **3.3 Integración con el Dobot MG400**

#### **Objetivo**

Permitir que el Dobot simule el teclado para mover el somosero.

#### **Configuración**

* Se conectó el Dobot al computador y se configuró en **DobotStudio Pro** para que movimientos laterales enviaran las teclas **ArrowLeft** y **ArrowRight**.
* El Dobot **no controla el disparo**, ya que este ocurre automáticamente cada 2 segundos.

#### **Resultado**

El robot puede jugar el juego, moviendo el personaje hacia izquierda o derecha, validando la integración hardware–software.

---

### **3.4 Organización del Trabajo**

| Integrante      | Tareas principales                                                                |
| --------------- | --------------------------------------------------------------------------------- |
| Rafael Ríos     | Programación de la lógica del juego (movimiento, disparos, colisiones, enemigos)  |
| Bianca Limachi  | Diseño de niveles, historia, sprites y pruebas de Dobot                           |
| Isabela Barbery | Diseño de niveles, historia, sprites, pruebas de Dobot, documentación y redacción |
| Todos           | Organización del repositorio y carpetas del proyecto                              |



## **4. Resultados**

* **Juego ejecutable** en navegador, con canvas mostrando al somosero, enemigos y balas.
* **Disparo automático y movimiento** correctamente implementados.
* **Integración con Dobot** exitosa: controla lateralmente al personaje.
* **Pruebas de niveles:**

  * Nivel 1: Jugabilidad fluida, enemigo fácil
  * Nivel 2: Mayor dificultad y estrategia
  * Nivel 3: Jefe final con disparos frecuentes y reto máximo



## **5. Conclusiones y Lecciones Aprendidas**

### **Conclusiones**

* El juego cumple con todos los objetivos planteados en la rúbrica.
* La integración con Dobot MG400 demuestra interacción efectiva entre software y hardware.
* Trabajo en equipo eficiente, con división clara de responsabilidades.

### **Lecciones Aprendidas**

* Manejo de matrices para representar niveles y enemigos
* Uso de clases y POO para lógica de juego
* Control de intervalos y temporización de disparos
* Sincronización de eventos del teclado con dispositivos externos
* Documentación profesional en Markdown para proyectos reales

### **Recomendaciones**

* Implementar disparos controlables por el Dobot
* Añadir más niveles y enemigos
* Incorporar menú de inicio y guardado de puntaje



## **6. Anexos**
*Enemigo 1
![](https://github.com/bianca-limachi/programaci-n-1-ucb/blob/main/cambas%20invaders%202/assets/alien.png)
*Enemigo 2
![](https://github.com/bianca-limachi/programaci-n-1-ucb/blob/main/cambas%20invaders%202/assets/alien2.png)
*Enemigo 3
![](https://github.com/bianca-limachi/programaci-n-1-ucb/blob/main/cambas%20invaders%202/assets/alien3.png)
*Icon coca
![](https://github.com/bianca-limachi/programaci-n-1-ucb/blob/main/cambas%20invaders%202/assets/coca.png)
*Icon somo
![](https://github.com/bianca-limachi/programaci-n-1-ucb/blob/main/cambas%20invaders%202/assets/icon2.png)






### **6.1 player.js**

```javascript
class Bala {
  constructor(x, y, direccion, tipo) {
    this.x = x;
    this.y = y;
    this.direccion = direccion;
    this.tipo = tipo;
    this.velocidad = 5;
    this.width = 20;
    this.height = 25;
  }

  mover() {
    this.y += this.velocidad * this.direccion;
  }

  dibujar(ctx) {
    const img = new Image();
    img.src = 'assets/icon2.png';
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  fueraDelCanvas(canvas) {
    return this.y < -this.height || this.y > canvas.height;
  }
}

export default class Player {
  constructor(matriz, columnas, filas, celdaSize, balasNave) {
    this.matriz = matriz;
    this.columnas = columnas;
    this.filas = filas;
    this.celdaSize = celdaSize;
    this.balasNave = balasNave;

    this.matriz.colocar(6, 11, 'nave');
    this.imagenActual = 'assets/nave_derecha.png';

    setInterval(() => this.disparar(), 2000);
  }

  encontrarNave() {
    for (let j = 0; j < this.filas; j++) {
      for (let i = 0; i < this.columnas; i++) {
        if (this.matriz.obtener(i, j) === 'nave') return { i, j };
      }
    }
    return null;
  }

  disparar() {
    const pos = this.encontrarNave();
    if (pos) {
      const px = pos.i * this.celdaSize + this.celdaSize / 2 - 5;
      const py = pos.j * this.celdaSize;
      this.balasNave.push(new Bala(px, py, -1, 'nave'));
    }
  }

  mover(direccion) {
    const pos = this.encontrarNave();
    if (pos) {
      const nuevaX = pos.i + direccion;
      const j = pos.j;
      if (nuevaX >= 0 && nuevaX < this.columnas) {
        this.matriz.colocar(pos.i, j, null);
        this.matriz.colocar(nuevaX, j, 'nave');
        this.imagenActual = direccion === -1
          ? 'assets/nave_izquierda.png'
          : 'assets/nave_derecha.png';
      }
    }
  }
}
```

---

### **6.2 enemigo.js**

```javascript
class BalaEnemigo {
  constructor(x, y, direccion, tipo) {
    this.x = x;
    this.y = y;
    this.direccion = direccion;
    this.tipo = tipo;
    this.velocidad = 4;
    this.width = 20;
    this.height = 20;
  }

  mover() {
    this.y += this.velocidad * this.direccion;
  }

  dibujar(ctx) {
    const img = new Image();
    img.src = 'assets/icon2.png';
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  fueraDelCanvas(canvas) {
    return this.y < -this.height || this.y > canvas.height;
  }
}

export default class Enemigo {
  constructor(matriz, filas, columnas, celdaSize, balasAlien) {
    this.matriz = matriz;
    this.filas = filas;
    this.columnas = columnas;
    this.celdaSize = celdaSize;
    this.balasAlien = balasAlien;
    this.lastShot = 0;
    this.shotCooldown = 1000;

    for (let k = 5; k > 0; k--) {
      const i = Math.floor(Math.random() * columnas);
      const j = Math.floor(Math.random() * (filas - 7));
      if (!this.matriz.obtener(i, j)) this.matriz.colocar(i, j, 'alien');
    }
  }

  disparar() {
    const now = Date.now();
    if (now - this.lastShot < this.shotCooldown) return;
    this.lastShot = now;

    for (let j = 0; j < this.filas; j++) {
      for (let i = 0; i < this.columnas; i++) {
        if (this.matriz.obtener(i, j) === 'alien' && Math.random() < 0.25) {
          const px = i * this.celdaSize + this.celdaSize / 2 - 10;
          const py = j * this.celdaSize + this.celdaSize;
          this.balasAlien.push(new BalaEnemigo(px, py, 1, 'alien'));
        }
      }
    }
  }

  mover() {
    const snapshot = [];
    for (let j = 0; j < this.filas; j++) {
      snapshot[j] = [];
      for (let i = 0; i < this.columnas; i++) {
        snapshot[j][i] = this.matriz.obtener(i, j);
      }
    }

    const movimientos = [];
    const limiteY = Math.floor(this.filas * 2 / 3);

    for (let j = this.filas - 1; j >= 0; j--) {
      for (let i = 0; i < this.columnas; i++) {
        if (snapshot[j][i] === 'alien') {
          if (Math.random() < 0.01) {
            const dx = Math.random() < 0.4 ? -1 : 1;
            const dy = Math.random() < 0.01 ? 1 : 0;
            const nuevaX = i + dx;
            const nuevaY = j + dy;
            if (
              nuevaX >= 0 && nuevaX < this.columnas &&
              nuevaY >= 0 && nuevaY <= limiteY &&
              snapshot[nuevaY][nuevaX] === null &&
              this.matriz.obtener(nuevaX, nuevaY) === null
            ) movimientos.push({ fromX: i, fromY: j, toX: nuevaX, toY: nuevaY });
          }
        }
      }
    }

    for (const m of movimientos) {
      this.matriz.colocar(m.fromX, m.fromY, null);
      this.matriz.colocar(m.toX, m.toY, 'alien');
    }
  }
}
```

---

### **6.3 game.js**

```javascript
import Player from "./player.js";
import Enemigo from "./enemigo.js";

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const filas = 12, columnas = 12, celdaSize = 50;

const alienImg = new Image(), fondoImg = new Image();
let alienCargado = false, fondoCargado = false;

alienImg.src = 'assets/alien.png';
fondoImg.src = 'assets/fondo.png';

alienImg.onload = () => { alienCargado = true; verificarCarga(); };
fondoImg.onload = () => { fondoCargado = true; verificarCarga(); };

let matriz, balasNave = [], balasAlien = [], player, enemigo;

function verificarCarga() {
  if (alienCargado && fondoCargado) iniciarJuego();
}

class Matriz {
  constructor(filas, columnas) {
    this.filas = filas; this.columnas = columnas;
    this.grid = Array.from({ length: filas }, () => Array(columnas).fill(null));
  }

  colocar(i, j, tipo) { if (this.enRango(i, j)) this.grid[j][i] = tipo; }
  obtener(i, j) { return this.enRango(i, j) ? this.grid[j][i] : null; }
  enRango(i, j) { return i >= 0 && i < this.columnas && j >= 0 && j < this.filas; }

  dibujar(ctx) {
    for (let j = 0; j < this.filas; j++) {
      for (let i = 0; i < this.columnas; i++) {
        const tipo = this.grid[j][i], px = i * celdaSize, py = j * celdaSize;
        if (tipo === 'nave') {
          const naveImg = new Image(); naveImg.src = player.imagenActual;
          ctx.drawImage(naveImg, px, py, celdaSize, celdaSize);
        } else if (tipo === 'alien' && alienCargado) {
          ctx.drawImage(alienImg, px, py, celdaSize, celdaSize);
        }
      }
    }
  }
}

function iniciarJuego() {
  matriz = new Matriz(filas, columnas);
  player = new Player(matriz, columnas, filas, celdaSize, balasNave);
  enemigo = new Enemigo(matriz, filas, columnas, celdaSize, balasAlien);

  setInterval(() => enemigo.disparar(), 1000);
  gameLoop();
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') player.mover(-1);
  else if (e.code === 'ArrowRight') player.mover(1);
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (fondoCargado) ctx.drawImage(fondoImg, 0, 0, canvas.width, canvas.height);
  if (matriz) matriz.dibujar(ctx);

  enemigo.mover();

  for (let b of balasNave) { b.mover(); b.dibujar(ctx); }
  for (let b of balasAlien) { b.mover(); b.dibujar(ctx); }

  balasNave = balasNave.filter(b => !b.fueraDelCanvas(canvas));
  balasAlien = balasAlien.filter(b => !b.fueraDelCanvas(canvas));

  requestAnimationFrame(gameLoop);
}

