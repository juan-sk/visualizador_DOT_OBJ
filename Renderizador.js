class Renderizador {

    constructor(parametros) {
        this.escala = parametros.escala;
        this.offsetY = parametros.offsetY;
        this.offsetX = parametros.offsetX;
        this.modelo = parametros.modelo;
        this.vista = parametros.vista;
        this.canvas = parametros.canvas;

        this.canvasHeig = this.canvas.height;
        this.canvasWidth = this.canvas.width;
        if (parametros.color) {

            this.color = parametros.color;
        } else {
            this.color = `rgba(${255}, ${255}, ${255})`;
        }
        if (parametros.pointSize) {

            this.pointSize = parametros.pointSize;
        } else {
            this.pointSize = 1;
        }
    }

    renderizar() {
        this.limpiarPantalla()
        for (let i = 0; i < this.modelo.length; i = i + 1) {
            let v1 = this.modelo[i][this.vista.a];
            let v2 = this.modelo[i][this.vista.b];
            let x = ((this.canvasWidth / 2) + (-v1 * this.escala)) + this.offsetX;
            let y = ((this.canvasWidth / 2) + (-v2 * this.escala)) + this.offsetY;
            this.drawPointCanvas(x, y)
        }
    }
    limpiarPantalla() {

        var ctx = this.canvas.getContext("2d");
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    drawPointCanvas(x, y) {
        var ctx = this.canvas.getContext("2d");

        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, this.pointSize, this.pointSize);
    }
}