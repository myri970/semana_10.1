export class Planes {
    constructor(nombre, descripcion, precio, plataforma) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.plataforma = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma.push(plataforma);
    }
}
