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

    listarCategoria(serie: Serie){
        console.log(`La serie ${serie.nombre} tiene las categorías ${serie.categoria}`)
    }

    listaActor(serie: Serie){
        console.log(`La serie ${serie.nombre} tiene los siguientes actores:`)
        serie.persona.map((value) => {
            if(value.rol === "Actor"){
                console.log(value.nombre)
            }
        })
    }

    listaDirector(serie: Serie){
        console.log(`El director de la serie ${serie.nombre} es:`)
        serie.persona.map((value) => {
            if(value.rol === "Director"){
                console.log(value.nombre)
            }
        })
    }

    listaEpisodios(serie: Serie){
        serie.episodios.forEach((value) => {
            console.log(value)
        })
    }
}
let arraySeries: Serie[] = []

export function series(serie: Serie){
    arraySeries.push(serie)
}

export function mostrarSeries(){
    if (arraySeries != undefined) {
        arraySeries.forEach((value) => {
            console.log(value)
        })
    }
}