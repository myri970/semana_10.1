export class Serie {
    constructor(imagen, nombre, categoria, persona) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.categoria = categoria;
        this.persona = persona;
        this.episodios = [];
        this.plataforma = [];
    }
    agregarEpisodios(episodio) {
        this.episodios.push(episodio);
    }
    agregarPlataforma(plataforma) {
        this.plataforma.push(plataforma);
    }
    listarCategoria(serie) {
        console.log(`La serie ${serie.nombre} tiene las categorías ${serie.categoria}`);
    }
    listaActor(serie) {
        console.log(`La serie ${serie.nombre} tiene los siguientes actores:`);
        serie.persona.map((value) => {
            if (value.rol === "Actor") {
                console.log(value.nombre);
            }
        });
    }
    listaDirector(serie) {
        console.log(`El director de la serie ${serie.nombre} es:`);
        serie.persona.map((value) => {
            if (value.rol === "Director") {
                console.log(value.nombre);
            }
        });
    }
    listaEpisodios(serie) {
        serie.episodios.forEach((value) => {
            console.log(value);
        });
    }
}
let arraySeries = [];
export function series(serie) {
    arraySeries.push(serie);
}
export function mostrarSeries() {
    if (arraySeries != undefined) {
        arraySeries.forEach((value) => {
            console.log(value);
        });
    }
}
