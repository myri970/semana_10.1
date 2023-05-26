import { Persona } from "./scripts/persona.js";
import { Serie } from "./scripts/serie.js";



const per1 = new Persona("Brad", "imagenBrad.jpg", "Actor principal", "Actor")
const serie1 = new Serie("imgPalpito.jpg", "Palpito", ["Suspenso", "Drama"],[per1])


console.log(per1)
console.log(serie1.persona)