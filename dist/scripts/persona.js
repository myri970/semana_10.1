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
    listaSeriesPersona(persona) {
        console.log(`${persona.nombre} participa en las siguientes series: `);
        persona.series.forEach((value) => {
            console.log(value.nombre);
        });
    }
    listarSeries() {
    }
}
