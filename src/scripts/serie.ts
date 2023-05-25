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

    constructor(imagen: string, nombre: string, categoria: string[], persona: Persona[], episodios: Episodios[], plataforma: Plataforma[]) {
        this.imagen = imagen
        this.nombre = nombre
        this.categoria = categoria
        this.persona = persona
        this.episodios = episodios
        this.plataforma = plataforma
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