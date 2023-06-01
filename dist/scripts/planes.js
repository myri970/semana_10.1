export class Planes {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
}
