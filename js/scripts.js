//JavaScript Básico - Ejercicio asincrónico 02
console.log("Primer Ejercicio");
var peliculas = [
    {
        "titulo": "Busqueda Implacable",
        "rating": "5 estrellas",
        "loHasVisto": "Viste"
    },
    {
        "titulo": "Norbit",
        "rating": "3 estrellas",
        "loHasVisto": "No viste"
    }, {
        "titulo": "Mini Espías",
        "rating": "2 estrellas",
        "loHasVisto": "Viste"
    }, {
        "titulo": "La vida es bella",
        "rating": "5 estrellas",
        "loHasVisto": "No viste"
    }
]

for (let index = 0; index < peliculas.length; index++) {
    console.log(peliculas[index].loHasVisto + " " + peliculas[index].titulo + " - " + peliculas[index].rating);
}

//JavaScript Básico - Ejercicio asincrónico 03
console.log("\nSegundo Ejercicio");
var numero = parseInt(prompt("Ingresa la cantidad de veces que se repetira el mensaje: "));
var palabra = prompt("Ingresa un mensaje o palabra");
function arregloDeObjetos(numero, palabra) {
    var arreglo = [];

    for (let i = 0; i < numero; i++) {
        arreglo[i] = {[palabra]: i};
    }
    console.log(arreglo);
}

arregloDeObjetos(numero, palabra)