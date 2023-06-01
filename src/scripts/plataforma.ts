import { Planes } from "./planes.js";
import { Serie } from "./serie.js";

export class Plataforma {
    nombre: string;
    url: string;
    planes: Planes[];
    series: Serie[];

    constructor(nombre: string, url: string){
        this.nombre = nombre;
        this.url = url
        this.planes = []
        this.series = []
    }

    agregarPlan(plan: Planes){
        this.planes.push(plan)
    }

    agregarSeries(serie: Serie){
        this.series.push(serie)
    }

    listaPlanes(){
        if (this.planes){
            console.log("Los planes registrados son:")
            this.planes.forEach((value) => {
                console.log(`${value.nombre} \n ${value.descripcion} \n ${value.precio} \n ${value.plataforma}`)
            })
        }else {
            console.log("No existen planes registrados")
        }
    }

}