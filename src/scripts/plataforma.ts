import { Planes } from "./planes.js";

export class Plataforma {
    nombre: string;
    url: string;
    planes: Planes[]

    constructor(nombre: string, url: string){
        this.nombre = nombre;
        this.url = url
        this.planes = []
    }

    agregarPlan(plan: Planes){
        this.planes.push(plan)
    }

    listaPlanes(){

    }
}