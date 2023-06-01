import { Episodios } from "./scripts/episodios.js";
import { Persona } from "./scripts/persona.js";
import { Planes } from "./scripts/planes.js";
import { Plataforma } from "./scripts/plataforma.js";
import { Serie, mostrarSeries, series } from "./scripts/serie.js";


// Instanciando la clase Persona para crear 4 objetos tipos personas
const per1 = new Persona("Sebastian Martinez", "imagenSebastian.jpg", "Actor principal, interpreta a Zacarias", "Actor")
const per2 = new Persona("Ana Lucia Dominguez", "imagenAnaD.jpg", "Actriz principal, interpreta a Camila", "Actor")
const per3 = new Persona("Margarita Muñoz", "imagenMargarita.jpg", "Actriz secundaria, interpreta a Samantha", "Actor")
const per4 = new Persona("Camilo Vega", "imagenCamiloV.jpg", "Director", "Director")
// Instanciando la clase Serie para crear un objeto tipo Serie y asignarle objetos tipo Persona
const serie1 = new Serie("imgPalpito.jpg", "Palpito", [" Suspenso ", " Drama "],[per1,per2,per3,per4])

// Instanciando la clase Persona.
const per5 = new Persona("Julie Kavner", "imagenJulieK.jpg", "Voz de Marge Simpson", "Actor")
const per6 = new Persona("Dan Castallaneta", "imagenDanC.jpg", "Voz de Homero Simpson", "Actor")
// Instanciando la clase Serie, para tener dos objetos tipo Serie, asinando per5 y per6 objetos tipo Persona
const serie2 = new Serie("imgTheSimpson.jpg", "The Simpson", [" Animada ", " Comedia ", " Sátira "],[per5,per6])

// Llamando al método de la clase persona, para agregar una serie al objeto Persona.
per5.agregarSerie(serie2)
per6.agregarSerie(serie2)

//Instanciando objetos tipo Planes
const planBasico = new Planes("Plan Básico Mensual", "Plan mensual una sola pantalla", 9900)
const planPremium = new Planes("Plan Familiar Mensual", "Plan mensual 4 pantallas y 5 Cuentas", 25000)
const planGold = new Planes("Plan Anual Premium", "Plan familiar durante un año", 290000)
const planMinimo = new Planes("Plan Peli", "Plan para ver solo una pelicula", 7000)

// Instanciando objeto tipo Plataforma
const netflix = new Plataforma("Netflix", "https://www.netflix.com/co/")
const disney = new Plataforma("Disney", "https://www.disneylatino.com/")

//Llamando métodos de la clase Plataforma para agregar planes y series
netflix.agregarPlan(planPremium)
netflix.agregarPlan(planGold)
netflix.agregarSeries(serie1)
disney.agregarPlan(planBasico)
disney.agregarPlan(planMinimo)
disney.agregarSeries(serie2)

//Asignando plataformas a las series
serie1.agregarPlataforma(netflix)
serie2.agregarPlataforma(disney)

//Instanciando episodios
const episodio1 = new Episodios("La felicidad no es redonda", "La esposa de Simón es asesinada para quitarle el corazón y trasplantarlo a la esposa de un poderoso millonario. En busca de venganza, Simón se lanza al peligroso mundo del tráfico de órganos.", 43, serie1)
const episodio2 = new Episodios("Un huéspeded dentro de mi cuerpo", "Camila empieza a hacer preguntas sobre su donante. Simón recibe una llamada anónima sobre el paradero de Valeria. Zacarías se enfoca en la campaña de Cárdenas.", 38, serie1)
const episodio11 = new Episodios("Homero en su nuevo trabajo", "Dia de bicibletas", 22, serie2)

//Agregando los episodios a la serie
serie1.agregarEpisodios(episodio1)
serie1.agregarEpisodios(episodio2)
serie2.agregarEpisodios(episodio11)


//Llamando los métodos de clase Serie para listar las categorias, los actores y directores del objeto serie1
serie1.listarCategoria(serie1)
serie1.listaActor(serie1)
serie1.listaDirector(serie1)


// Llamar la función series para visualizarlas en la consola.
series(serie1)
series(serie2)

mostrarSeries()
