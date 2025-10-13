class Matrix {
  constructor(rows, cols, defaultValue = 0) {
    this.rows = rows;
    this.cols = cols;
    this.data = Array.from({ length: rows }, () => Array(cols).fill(defaultValue));
  }

  setValue(r, c, v) {
    if (this.isValid(r, c)) this.data[r][c] = v;
  }

  getValue(r, c) {
    return this.isValid(r, c) ? this.data[r][c] : null;
  }

  isValid(r, c) {
    return r >= 0 && r < this.rows && c >= 0 && c < this.cols;
  }

  fill(v) {
    for (let i = 0; i < this.rows; i++) this.data[i].fill(v);
  }

  clear() {
    this.fill(0);
  }

  draw(ctx, canvas) {
    const w = (canvas.width = canvas.clientWidth);
    const h = (canvas.height = canvas.clientHeight);
    const cw = w / this.cols;
    const ch = h / this.rows;

    ctx.clearRect(0, 0, w, h);
    ctx.font = `${Math.min(cw, ch) / 2}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const x = j * cw;
        const y = i * ch;
        ctx.strokeRect(x, y, cw, ch);
        ctx.fillText(this.data[i][j], x + cw / 2, y + ch / 2);
      }
    }
  }
}
