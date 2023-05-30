import { Persona } from "./scripts/persona.js";
import { Serie, mostrarSeries, series } from "./scripts/serie.js";



const per1 = new Persona("Sebastian Martinez", "imagenSebastian.jpg", "Actor principal, interpreta a Zacarias", "Actor")
const per2 = new Persona("Ana Lucia Dominguez", "imagenAnaD.jpg", "Actriz principal, interpreta a Camila", "Actor")
const per3 = new Persona("Margarita Muñoz", "imagenMargarita.jpg", "Actriz secundaria, interpreta a Samantha", "Actor")
const per4 = new Persona("Camilo Vega", "imagenCamiloV.jpg", "Director", "Director")
const serie1 = new Serie("imgPalpito.jpg", "Palpito", [" Suspenso ", " Drama "],[per1,per2,per3,per4])


const per5 = new Persona("Julie Kavner", "imagenJulieK.jpg", "Voz de Marge Simpson", "Actor")
const per6 = new Persona("Dan Castallaneta", "imagenDanC.jpg", "Voz de Homero Simpson", "Actor")
const serie2 = new Serie("imgTheSimpson.jpg", "The Simpson", [" Animada ", " Comedia ", " Sátira "],[per5,per6])



console.log(per1)
console.log(serie1.persona)

serie1.listarCategoria(serie1)
serie1.listaActor(serie1)
serie1.listaDirector(serie1)


per1.agregarSerie(serie1)
per1.listaSeriesPersona(per1)

per5.agregarSerie(serie2)
per6.agregarSerie(serie2)


series(serie1)
series(serie2)

mostrarSeries()
