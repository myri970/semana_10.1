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
    listarCategoria() {
    }
    listaAutor() {
    }
    listaDirector() {
    }
    listaEpisodios() {
    }
}
function listarSerie() {
    console.log();
}
