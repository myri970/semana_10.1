export class Plataforma {
    constructor(nombre, url) {
        this.nombre = nombre;
        this.url = url;
        this.planes = [];
        this.series = [];
    }
    agregarPlan(plan) {
        this.planes.push(plan);
    }
    agregarSeries(serie) {
        this.series.push(serie);
    }
    listaPlanes() {
        if (this.planes) {
            console.log("Los planes registrados son:");
            this.planes.forEach((value) => {
                console.log(`${value.nombre} \n ${value.descripcion} \n ${value.precio} \n ${value.plataforma}`);
            });
        }
        else {
            console.log("No existen planes registrados");
        }
    }
}
