import { Plataforma } from "./plataforma.js";

export class Planes {
    nombre: string;
    descripcion: string;
    precio: number;
    plataforma: Plataforma[];

    constructor(nombre: string, descripcion: string, precio: number, plataforma: Plataforma[]){
        this.nombre = nombre;
        this.descripcion =  descripcion
        this.precio = precio;
        this.plataforma = []
    }

    agregarPlataforma(plataforma: Plataforma){
        this.plataforma.push(plataforma)
    }
}