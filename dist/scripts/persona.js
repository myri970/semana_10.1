export class Persona {
    constructor(nombre, foto, descripcion, rol) {
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.rol = rol;
        this.series = [];
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
    listarSerie() {
    }
}
