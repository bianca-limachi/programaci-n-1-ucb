// --- Inicialización ---
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
const matrix = new Matrix(10, 10, 0);

// --- Elementos del DOM ---
const select = document.getElementById("exerciseSelect");
const runBtn = document.getElementById("runBtn");
const clearBtn = document.getElementById("clearBtn");

// --- Lista de ejercicios 1 a 11 ---
const ejercicios = [
  "1: Cuadrado Relleno",
  "2: Marco Interno",
  "3: Cruces",
  "4: Bordes y Diagonales",
  "5: Bandera",
  "6: Relleno Alterno",
  "7: Zig-Zag Horizontal",
  "8: Espiral",
  "9: Triángulo Superior Izquierdo",
  "10: Triángulo Inferior Derecho",
  "11: Cuadrícula",
];

ejercicios.forEach((e, i) => {
  const opt = document.createElement("option");
  opt.value = i + 1;
  opt.textContent = e;
  select.appendChild(opt);
});

// --- Funciones de ejercicios 1–11 ---
const funcs = {
  1: () => matrix.fill(1),

  2: () => {
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 10; j++)
        matrix.setValue(i, j, i === 0 || i === 9 || j === 0 || j === 9 ? 0 : 1);
  },

  3: () => {
    const mid = Math.floor(10 / 2);
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 10; j++)
        matrix.setValue(i, j, i === mid || j === mid ? 1 : 0);
  },

  4: () => {
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 10; j++) {
        if (i === 0 || i === 9 || j === 0 || j === 9) matrix.setValue(i, j, 1);
        else if (i === j || i + j === 9) matrix.setValue(i, j, 2);
        else matrix.setValue(i, j, 0);
      }
  },

  5: () => {
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 10; j++)
        matrix.setValue(i, j, i < 3 ? 1 : i < 6 ? 2 : 0);
  },

  6: () => {
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 10; j++)
        matrix.setValue(i, j, i % 2 === 0 ? 1 : 0);
  },

  7: () => {
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 10; j++)
        matrix.setValue(i, j, i === j ? 1 : 0);
  },

  8: () => {
    matrix.fill(0);
    let top = 0, bottom = 9, left = 0, right = 9;
    while (top <= bottom && left <= right) {
      for (let j = left; j <= right; j++) matrix.setValue(top, j, 1);
      top++;
      for (let i = top; i <= bottom; i++) matrix.setValue(i, right, 1);
      right--;
      for (let j = right; j >= left; j--) matrix.setValue(bottom, j, 1);
      bottom--;
      for (let i = bottom; i >= top; i--) matrix.setValue(i, left, 1);
      left++;
    }
  },

  9: () => {
    for (let i = 0; i < 10; i++)
      for (let j = 0; j <= i; j++)
        matrix.setValue(i, j, 1);
  },

  10: () => {
    for (let i = 0; i < 10; i++)
      for (let j = 9 - i; j < 10; j++)
        matrix.setValue(i, j, 1);
  },

  11: () => {
    for (let i = 0; i < 10; i++)
      for (let j = 0; j < 10; j++)
        matrix.setValue(i, j, i % 2 === 0 || j === 0 || j === 9 ? 1 : 0);
  },
};

// --- Eventos ---
runBtn.addEventListener("click", () => {
  matrix.clear();
  const n = parseInt(select.value);
  funcs[n]();
  matrix.draw(ctx, canvas);
});

clearBtn.addEventListener("click", () => {
  matrix.clear();
  matrix.draw(ctx, canvas);
});

// Dibujo inicial
matrix.draw(ctx, canvas);
