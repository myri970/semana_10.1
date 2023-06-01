import { Serie } from "./serie.js";

export class Persona {
    nombre: string;
    foto: string;
    descripcion: string;
    rol: "Director" | "Actor"
    series: Serie[]

    constructor(nombre: string, foto:string, descripcion: string, rol: "Director" | "Actor"){
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.rol = rol
        this.series = []
    }

    agregarSerie(serie: Serie){
        this.series.push(serie)
    }

    listaSeries(persona: Persona){
        console.log(`${persona.nombre} participa en las siguientes series: `)
        persona.series.forEach((value) => {
            console.log(value.nombre)
        })
    }
}