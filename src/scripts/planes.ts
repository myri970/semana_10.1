import { Plataforma } from "./plataforma.js";

export class Planes {
    nombre: string;
    descripcion: string;
    precio: number;
    plataforma: Plataforma | undefined;

    constructor(nombre: string, descripcion: string, precio: number){
        this.nombre = nombre;
        this.descripcion =  descripcion
        this.precio = precio;
    }

    agregarPlataforma(plataforma: Plataforma){
        this.plataforma = plataforma
    }
}