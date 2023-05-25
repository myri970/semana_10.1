export class Plataforma {
    constructor(nombre, url) {
        this.nombre = nombre;
        this.url = url;
        this.planes = [];
    }
    agregarPlan(plan) {
        this.planes.push(plan);
    }
    listaPlanes() {
    }
}
