import { Serie } from "./serie.js";

export class Episodios {
    nombre: string;
    resumen: string;
    tiempo: number;
    serie: Serie;

    constructor(nombre: string, resumen: string, tiempo: number, serie: Serie){
        this.nombre = nombre;
        this.resumen = resumen;
        this.tiempo = tiempo;
        this.serie = serie;
    }
}