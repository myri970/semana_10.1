import { Episodios } from "./episodios.js";
import { Persona } from "./persona.js";
import { Plataforma } from "./plataforma.js";

export class Serie {
    imagen: string;
    nombre: string;
    categoria: string[];
    persona: Persona[];
    episodios: Episodios[];
    plataforma: Plataforma[];

    constructor(imagen: string, nombre: string, categoria: string[], persona: Persona[]) {
        this.imagen = imagen
        this.nombre = nombre
        this.categoria = categoria
        this.persona = persona
        this.episodios = []
        this.plataforma = []
    }
    agregarEpisodios(episodio:Episodios){
        this.episodios.push(episodio)
    }

    agregarPlataforma(plataforma:Plataforma){
        this.plataforma.push(plataforma)
    }

    listarCategoria(){

    }

    listaAutor(){

    }

    listaDirector(){

    }

    listaEpisodios(){

    }
}

function listarSerie(){
    console.log()
}